import Head from 'next/head'
import { siteTitle } from 'components/layout'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ServerErrorPage from 'pages/error/404'
import { useThemeContext } from "context/newthemeContext"
const API_Url = 'https://jsonplaceholder.typicode.com'
const BASE_URL = 'https://dummyapi.io/data/api'
const APP_ID = '5ffda4f1fae51808b6926c05'
const Image_Url = 'https://picsum.photos/v2/list'



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
   /*  if(axios.isCancel(err))
    {

    }
    else{
      throw err
    } */
  })
  }, [])

  useEffect(() => {
  let mounted = true
  //axios.get(`${BASE_URL}`, { headers:{ 'app-id': APP_ID }})
  axios.get(`${Image_Url}`)
  .then(setloading(true),setError({}))
  .then(response => { setuserImg(response.data) } )
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

 const { theme } = useThemeContext()


  const getUser = (id, users) => {
    const username = users.find(user => user.id === id)
    return username.name
  }

  const getUserImg = (id ,userImage) => {

    return userImage[id % 10].download_url 

    //return userImage[id % 10].picture
    //return console.log(userImage.filter(img => img.id.charAt(0) == id))
  }

  const getUserCatchPhrase = (id , userData) => 
  {
    return userData[id % 10].company.catchPhrase
  }

  return (
  
    <>
     <Head>
        <title>{siteTitle}</title>
    </Head>
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
<section className="hero is-danger">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
        404 Not found
      </h1>
      <h2 className="subtitle">
        No Data !
      </h2>
    </div>
  </div>
</section>
</> */

) : (
<>
  <section className={theme.dark_mode
     ? "dark-mode" : "light-mode"}>
     <div className="tile is-ancestor px-6">
     <div className="tile is-parent pl-6 pr-0">
    <div className="tile is-child box-one">
    <h1 class="title p-5">Trees</h1>
        <p class="subtitle is-1 p-5 ">Fuel your imagination</p>
     </div>
  </div>
  <div className="tile is-6 is-vertical is-parent pr-6">
    <div className="tile is-child box-two">
        <p class="subtitle is-3 p-5">Fuel your imagination</p>
    </div>
    <div className="tile is-child box-three">
        <p class="subtitle is-3 p-5">Bridge Lighting</p>
     </div>
    <div className="tile is-child box-four">
        <p class="subtitle is-3 p-5">City Sounds</p>
      </div>
  </div>
 
</div>

    <ul>
      {post.map(({ id, userId }) => (
    <div className="container is-widescreen" key={id}>
    <div className="column is-hovered" key={id}>
    <article onClick={() => router.push({
              pathname: `/posts/CSR/${id}`,
              query: { pid: id },
            })} className="tile notification" key={id}>
      <div className="media">
        <figure className="media-left">
        <p className="image is-94x94">
      <img 
      src={getUserImg(id ,userImg)}
      alt="Placeholder image" 
      />
    </p>
        </figure>
        <div className="media-content px-3 ">
          <div className="content p-1">
          <h2 className="is-family-sans-serif  ">{getUserCatchPhrase(id,user)}</h2>
          {console.log(getUserImg(id ,userImg))}
         {/*  <li key={id}>
            <span onClick={() => router.push({
              pathname: `/posts/CSR/${id}`,
              query: { pid: id },
            })}>
              <a className="subtitle is-5 is-mobile ">{title}</a>
            </span>
          <Link href={`/posts/${id}`}></Link>
           
           <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small> 
          </li> */}
          </div>
          <div className="content p-1">
          <div className="columns ">
            <div className="column">
            <p className="subtitle is-5 is-mobile">{getUser(userId , user)}</p>
            </div>
            <div className="column">
            <span className="tag is-danger is-large">World</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </article>
    </div>
    </div>
))}
    </ul>
  </section>
</>
))}
</>
)}