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

- getServerSideProps method learend to get seerver side data one each request

### Client Side Rendering

- Desgin methodology to prerender the page without data first then fetch data from the client side used mainly for dashboard where SEO is irrelvant
