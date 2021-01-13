import Layout from '../../../components/layout'
//import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
//import Date from '../../components/date'
import utilStyles from '../../../styles/utils.module.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
const API_Url = 'https://jsonplaceholder.typicode.com'

/* export async function getStaticProps({ params }) {
   // const postData = await getPostData(params.id)
   const res = await axios.get(`${API_Url}/posts/${params.id}`)
   const postData = await res.data
    return {
        props: {
            postData
        }
    }
}


export async function getStaticPaths() {
    try
    { 
        const res = await axios.get(`${API_Url}/posts`)
        const posts = await res.data
        const paths = posts.map((post) => ({
            params: { id: post.id.toString() },
        }))
        return {
            paths,
            fallback:false
        }
        
    }
    catch(e)
    {
        console.error(e);
    }
} 
 */

export default function Post(props) {

    const router = useRouter()
    const { pid } = router.query 
    console.log(pid)

    const [postData, setpostData] = useState([])

    useEffect(() => {
        axios
        .get(`${API_Url}/posts/${pid}`)
        .then(response => setpostData(response.data))
    }, [])

    return (
        <>
    <Layout>
        <Head>
        {postData.title}
        </Head>
    </Layout>
    <section className="hero is-fullheight is-primary is-bold">
        <div className="hero-body">
            <div className="container">
            <h1 className={"title content is-large is-size-1 "}>{postData.title}</h1>
            <p className={"content is-large "}>{postData.body}</p>
            </div>
        </div>
    </section>
        </>
   
)
}
