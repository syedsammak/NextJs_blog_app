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

   //   return userImage[id % 10].picture
    
    //return console.log(userImage.filter(img => img.id.charAt(0) == id))
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
  <section className={theme.dark_mode
     ? "dark-mode" : "light-mode"}>
    <ul>
      {post.map(({ id, userId, title }) => (
    <div className="container is-widescreen" key={id}>
    <div className="column is-mobile is-hovered" key={id}>
    <article className="tile notification" key={id}>
      <div className="media">
        <figure className="media-left">
        <p className="image is-94x94">
      <img 
      src={getUserImg(id ,userImg)}
      alt="Placeholder image" 
      />
    </p>
        </figure>
        <div className="media-content">
          <div className="content p-5 ">
          <h2 className="is-family-sans-serif">{getUser(userId , user)}</h2>
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
    
            
    </article>
    </div>
 
        
       
        </div>
        )
      )}
    </ul>
  </section>
</>
))}
</>
)}