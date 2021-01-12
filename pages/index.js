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
  const [loading, setloading] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()


  useEffect(() => {
  axios
  .get(`${API_Url}/posts`)
  .then(setloading(true),setError({}))
  .then(response => {setpost(response.data);  console.log(response.data)})
  .catch(err => {setError(true);console.log(err)})
  }, [])

  useEffect(() => {
  axios
  .get(`${API_Url}/users`)
  .then(setloading(true),setError({}))
  .then(response => {setuser(response.data); setError(false) ;  console.log(response.data)})
  .then(setloading(false))
  .catch(err => {setError(true); console.log(err)})
  }, [])


  const getUser = (id, users) => {
    const username = users.find(user => user.id === id)
    return username.name
  }

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <div className="columns is-mobile">
  <div className="column is-half is-offset-one-quarter">
  <img 
            src="/images/profile.jpg"
            alt={"dsad"}
            width="100px"
            height="100px"
            />
  <section>
        <p>I am a Software Engineer !</p>
        <Link href={`/gallery/SSR/postImages`}>
               <a>Gallery</a>
        </Link>
  </section>

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
          <div className="tile is-ancestor" key={id}>
            <div className="tile is-parent is-8" key={id}>
    <article className="tile is-child box">
    <div className="card-content">
      <div className="media">
        <figure className="media-left">
        <p className="image is-64x64">
      <img 
      className="is-rounded"
      src="https://bulma.io/images/placeholders/96x96.png"
      alt="Placeholder image" />
    </p>
        </figure>
        <div className="media-content">
          <div className="content">
          <p><strong>{getUser(userId , user)}</strong></p>
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