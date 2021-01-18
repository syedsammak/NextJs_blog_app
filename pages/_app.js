import Layout from "components/layout"
import "../scss/styles.scss"
import ThemeContextProvider from "context/newthemeContext"

export default function App({ Component, pageProps }) {
   
   /*  const [isMounted, setisMounted] = useState(false)
    const darkMode = useDarkMode(true)
    const theme = darkMode.value ? darkTheme : lightTheme

    useEffect(() => {
        setisMounted(true)
    }, []) */

   /*  return (
        <ThemeProvider theme={theme}>
            {isMounted && <Component {...pageProps} />}
        </ThemeProvider>
    ) */

    return (
        <ThemeContextProvider>
        <Layout /> 
        <Component {...pageProps} />
        </ThemeContextProvider>
    )
  
  
}

App.getInitialProps = async ({ctx}) =>{
    console.log(ctx.req)
    return {}
}