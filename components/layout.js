import Head from 'next/head'
/* import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css' */
import Link from 'next/link'

const name = 'Sammak'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({children, home }) {
return (
    <div >
        <Head>
            <link rel="icon" href="favicon.ico" />
            <meta 
            name="description"
            content="Learn How to build using Next.js"
            />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header >
          {home ? (
            <>
            <img 
            src="/images/profile.jpg"
            
            alt={name}
            />
            <h1 >{name}</h1>
        </>
          ):(
              <> 
              <Link href="/">
                  <a>
                      <img
                      src="/images/profile.jpg"
                      alt={name} 
                      />
                  </a>
              </Link>
              <h2 >
                  <Link href="/">
                      <a >{name}</a>
                  </Link>
              </h2>
              </>
              )}
      </header>
        <main>{children}</main>
        {!home && (
            <div >
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
        )}
    </div>
)

}




