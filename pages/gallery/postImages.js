import Layout from '../../components/layout'
import Head from 'next/head'
import axios from 'axios'



const API_Url = 'https://jsonplaceholder.typicode.com'



export async function getServerSideProps(){
    try
    {
        const photos = await axios.get(`${API_Url}/photos`);
        return { props: { photos : photos.data } }
        
    }
    catch(e)
    {
        console.error(e)
    }
}



export default function gallery({ photos }) {
    return(
        <Layout home>
            <div className="columns">
                <div className="column">
                {
                photos.map(({ id , url }) => (
                <img 
                src= {url.toString()}
                width="100px"
                height="100px"
                key={id}
                />
                ))}
                </div>
                
            </div>
        </Layout>

    )
}