import Head from 'next/head'
/* import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css' */
import Link from 'next/link'
import Image from 'next/image'
const name = 'Sammak'
import React , { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
export const siteTitle = 'Next.js Sample Website'

export default function Layout() {
    const darkMode = useDarkMode(true)

return (
    <div>
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
      <nav className="navbar p-4" role="navigation" aria-label="main navigation" >
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
    </a>
    <Image 
    src="/images/blogging.svg"
    alt="LOGO"
    width={50}
    height={10}
    />
    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start px-5">
      <a href={"/"} className="navbar-item">
               Home
      </a>
      <a href={`/gallery/SSR/postImages`} className="navbar-item">
               Gallery
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider" />
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
          <button className="button is-dark" onClick={darkMode.enable}>Dark</button>
          <button className="button is-light" onClick={darkMode.disable}>Light</button>
        </div> 
      </div>
      
    </div>
  </div>
</nav>
          
      </header>
        
    </div>
)

}




