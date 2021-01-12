import Layout from '../../../components/layout'
import Head from 'next/head'
import axios from 'axios'


const API_Url = 'https://picsum.photos/v2/list'



export async function getServerSideProps(){
    try
    {
        const photos = await axios.get(`${API_Url}`);
        let loading = false;

        if(!photos) {
            loading = true;
        }

        return { props: { photos : photos.data , loading: loading} }
        
    }
    catch(e)
    {
        console.error(e)
    }
   
}




export default function gallery({ photos , loading }) {
    return(
        <Layout home>
            {loading ?  (
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
            )}
           
        </Layout>

    )
}