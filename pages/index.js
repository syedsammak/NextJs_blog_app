import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
//import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'



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
  const router = useRouter()


  useEffect(() => {
  axios
  .get(`${API_Url}/posts`)
  .then(response => {setpost(response.data); console.log(response.data)})
  
  }, [])

  useEffect(() => {
  axios
  .get(`${API_Url}/users`)
  .then(response => {setuser(response.data); console.log(response.data)})
  
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
      
      <section >
        <ul >
          {post.map(({ id, userId, title }) => (
        <div className="column is-mobile" key={id}>
           <div className="column is-11 is-offset-1" key={id}>
              <div className="tile is-ancestor" key={id}>
                <div className="tile is-parent is-8" key={id}>
      <article className="tile is-child box">
      <p className="title is-4">{getUser(userId , user)}</p>
      
                <li  key={id}>
                <span onClick={() => router.push({
                  pathname: `/posts/CSR/${id}`,
                  query: { pid: id },
                })}><a className="subtitle is-6">{title}</a>
                </span>
                {/* <Link href={`/posts/${id}`}></Link> */}
               
               {/* <small className={utilStyles.lightText}>
                 <Date dateString={date} />
               </small> */}
              </li>
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
}