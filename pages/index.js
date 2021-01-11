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
  const router = useRouter()


  useEffect(() => {
  axios
  .get(`${API_Url}/posts`)
  .then(response => {setpost(response.data); console.log(response.data)})
  
  }, [])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section >
        <p>I am a Software Engineer !</p>
        <Link href={`/gallery/SSR/postImages`}>
               <a>Gallery</a>
        </Link>
      </section>
      <section >
        <h2 >Blog</h2>
        <ul >
          {post.map(({ id, title }) => {


let pid = id;
           return (
              <li  key={pid}>
                <span onClick={() => router.push({
                  pathname: `/posts/CSR/${id}`,
                  query: { pid: pid },
                })}><a>{title}</a></span>
                {/* <Link href={`/posts/${id}`}></Link> */}
               <br />
               {/* <small className={utilStyles.lightText}>
                 <Date dateString={date} />
               </small> */}
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}