import Layout from '../../components/layout'
import Head from 'next/head'
import axios from 'axios'
import utils from '../../styles/utils.module.css'



const API_Url = 'https://jsonplaceholder.typicode.com'



export async function getServerSideProps(){
    try
    {
        const photos = await new Promise((resolve, reject) =>
        {
            axios.get(`${API_Url}/photos`)
            .then(res => 
                {
                    resolve(res.data)
                })
            
        })

        return { props: { photos } }
        
    }
    catch(e)
    {
        console.error(e)
    }
}



export default function gallery({ photos }) {
    return(
        <Layout home>
            <div className={`${utils.row}`}>
                <div className={`${utils.column}`}>
                {
                photos.map(({ id , url }) => (
                <img 
                src= {url.toString()}
                width="100px"
                height="100px"
                />
                ))}
                </div>
                
            </div>
        </Layout>

    )
}