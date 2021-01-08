import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
//import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import axios from 'axios'

const API_Url = 'https://jsonplaceholder.typicode.com'



export async function getStaticProps() {
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
}

  
  // const allPostsData = getSortedPostsData()



export default function Home({ allPostsData , allUsersData }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Software Engineer !</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
             <Link href={`/posts/${id}`}>
               <a>{title}</a>
             </Link>
             <br />
             {/* <small className={utilStyles.lightText}>
               <Date dateString={date} />
             </small> */}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}