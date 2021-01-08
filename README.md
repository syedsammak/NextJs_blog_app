# NextJs_blog_app

This Repository consists of a blog app developed using Next.js following the tutorial sample provided on there official website www.nextjs.org/learn/basics

## Learning Objectives (Completed)

### Nextjs Initial Project Setup

### Basic Routing & Client-Side Navigation

    - Link Component to perform client side Navigation within pages
    - Validate that during Client-Side Navigation browser does not load full page through change in background color using developer tools

### CSS Styling Techniques in Nextjs (Global using \_app.js, Layout Component, CSS modules)

    - Custom Layout compnents defined to provide component based css
    - CSS Module assigns classnames by default to avoid conflict in classnames
    - _app.js file manupliation to implement a global css outline to App as a top level component

### Assets and MetaData Directory handling

    - Public direcotry use for assets storage and access by Next.js as default
    - Used imports such as Head as react Compnents to manipulate metadata

### Pre-rendering types ( Client side & Server Side Rendering)

    - Difference between Static Genration and Server Side Rendering
    - Static Generation -> HTML Generated is resused for each request
    - Server Side Rendering -> HTML is ReGenerated when a user makes a page request.

### Method to get blog data for getStaticProps function

    - getStaticProps as an Async function to handle data dependencies for pages which requires data to be generated at build time.
    - Parsed marked down files using gray matter
    - Implemented getStaticProps to recive data from a mardown filter file
    - Fetch method to get Api data

### Server Side Rendering

    - getServerSideProps method learned to get server side data one each request

### Client Side Rendering

    - Desgin methodology to prerender the page without data first then fetch data from the client side used mainly for dashboard where SEO is irrelvant

### Api Routes

    - Create a simple API endpoint using handler function which takes req and res as parameters in which req is for requesting a message to server and res as repsonse back recived from the server
    - Api routes not to be fetch by getStaticeProps or getStaticPaths directly as alternative we can add server side code directly in both functions to recive data

### Client Side Rendering (posts Folder)

    - we use two functions to recieve posts and there relative paths for each individual post
    - we use axios to fetch data and await it response in our function provided by Next.js as getStaticProps and getStaticPaths
    - The HTML Layout is generated and it dosent get refereshed when we use getStaticProps to populate data all the data is fetched on pre-render basis
    -the props are assigned as in terms of objects and path values which are mapped on  to our HTML template
    -as data gets updated the page dosent refreshes as the template has pre rendered data

### Server Side Rendering (gallery Folder)

    - axios is used to fetch data but with promise in return when the promise is fullfiled as in terms request is received the data get resolved and sent back to the original HTMl template as prop
    - the HTML template recives URLs and id as key which is mapped onto the img tag in our HTML Template
    - the differnece can be scene as each time the data is fetched the HTML resfreshes the whole template and post render the tag binds

# Deployed Project

## URL: https://next-js-blog-app-fawn.vercel.app/
