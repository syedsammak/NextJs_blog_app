import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
//import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Error from 'next/error'
import ServerErrorPage from './error/404'

const API_Url = 'https://jsonplaceholder.typicode.com'
const BASE_URL = 'https://dummyapi.io/data/api'
const APP_ID = '5ffda4f1fae51808b6926c05'


/* export async function getStaticProps() {
 try{ 
  const res = await axios.get(`${API_Url}/posts`)
  const allPostsData = await res.data
  
  return {
    props: {
      allPostsData,
    }
  }
}
catch(e){
  console.error(e);
}
} */

  
  // const allPostsData = getSortedPostsData()



export default function Home() {
  const [post, setpost] = useState([])
  const [user, setuser] = useState([])
  const [userImg, setuserImg] = useState([])
  const [loading, setloading] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()
  const source = axios.CancelToken.source()

  useEffect(() => {
  axios
  .get(`${API_Url}/posts`)
  .then(setloading(true),setError({}))
  .then(response => {setpost(response.data);  console.log(response.data)})
  .catch(err => {setError(true);console.error(err)})
  }, [])

  useEffect(() => {
  axios
  .get(`${API_Url}/users`, { cancelToken: source.token, })
  .then(setloading(true),setError({}))
  .then(response => {setuser(response.data); setError(false) ;  console.log(response.data)})
  .catch(err => {
    setError(true); 
    console.error(err)
    if(axios.isCancel(err))
    {

    }
    else{
      throw err
    }
  })
  }, [])

  useEffect(() => {
  let mounted = true
  axios.get(`${BASE_URL}/user?limit=10`, { headers:{ 'app-id': APP_ID }})
  .then(setloading(true),setError({}))
  .then(response => { setuserImg(response.data.data) } )
  .then(() => {
    if(mounted)
    {
      setloading(false)
    }
  })
  .catch(err => {setError(true); console.error(err)})


  return function cleanup() {
    mounted = false
  }
}, [])

  const getUser = (id, users) => {
    const username = users.find(user => user.id === id)
    return username.name
  }

  const getUserImg = (id ,userImage) => {
    
      return userImage[id % 10].picture
    
    //return console.log(userImage.filter(img => img.id.charAt(0) == id))
  }

  return (
  
    <>
     <Layout>
     <Head>
        <title>{siteTitle}</title>
      </Head>
      </Layout>
      
      
      <div className="columns is-mobile">
  <div className="column is-half is-offset-one-quarter">
  </div>
</div>

{

loading ? (
  <>

  <div className="section">
    <div className="container">
      
            <div className="loader-wrapper is-offset-5">
            <div className="columns">
        <div className="column is-8 is-offset-1">
            <h1 className="title">Loading</h1>
            </div>
            <div className="column ">
              <div className="loader is-loading"></div>
              </div>
            </div>
            </div>
      </div>
    </div>


  </>

) : (
  
error ? (

<ServerErrorPage />

/* <>
<section class="hero is-danger">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        404 Not found
      </h1>
      <h2 class="subtitle">
        No Data !
      </h2>
    </div>
  </div>
</section>
</> */

) : (
<>
  <section>
    <ul>
      {post.map(({ id, userId, title }) => (
    <div className="column is-mobile" key={id}>
       <div className="column is-10 is-offset-3" key={id}>
          <div className="tile is-ancestor"  key={id}>
            <div className="tile is-parent is-8  " key={id}>
    <article className="tile is-child box notification is-primary ">
    <div className="card-content">
      <div className="media">
        <figure className="media-left">
        <p className="image is-64x64">
      <img 
      className="is-rounded"
      src={getUserImg(id ,userImg)}
      alt="Placeholder image" />
    </p>
        </figure>
        <div className="media-content">
          <div className="content">
          <p><strong>{getUser(userId , user)}</strong></p>
          {console.log(getUserImg(id ,userImg))}
          <li  key={id}>
            <span onClick={() => router.push({
              pathname: `/posts/CSR/${id}`,
              query: { pid: id },
            })}><a className="subtitle is-5">{title}</a>
            </span>
            {/* <Link href={`/posts/${id}`}></Link> */}
           
           {/* <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small> */}
          </li>
          </div>
        </div>
      </div>
    </div>
    
            
    </article>
    </div>
    </div>
          </div>
        </div>
        
        )
      )}
    </ul>
  </section>
</>


  ) 
)
}
</>
)}