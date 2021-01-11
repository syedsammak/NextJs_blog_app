import Layout from '../../../components/layout'
import Head from 'next/head'
import axios from 'axios'



const API_Url = 'https://picsum.photos/v2/list'



export async function getServerSideProps(){
    try
    {
        const photos = await axios.get(`${API_Url}`);
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
            <div className="columns is-mobile">
                <div className="column">
                {
                photos.map(({ id , download_url }) => (
                <img 
                src= {download_url.toString()}
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