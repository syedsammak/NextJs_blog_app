import Layout from '../../components/layout'
//import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
//import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'



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
} */

/* 
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
} */


export default function Post({ pathname }) {

    console.log(pathname ,"uydtrsetifd5dfy")

    const [postData, setpostData] = useState([])
    const [paths, setpaths] = useState([])

    useEffect(() => {
        axios
        .get(`${API_Url}/posts/${props.id}`)
        .then(response => setpostData(response.data))
    }, [])

    useEffect(() => {
        axios
        .get(`${API_Url}/posts`)
        .then(response => setpaths(response.data))
     }, [])



    return (
    <Layout>
        <Head>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}></h1>
            <div className={utilStyles.lightText}>
                {/* <Date dateString={postData.date} /> */}
                <p></p>
            </div>
            {/* <div dangerouslySetInnerHTML={{__html: postData.contentHtml }} /> */}
        </article>
    </Layout>
)
}
