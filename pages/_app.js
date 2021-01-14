import "../scss/styles.scss"
/* import React , { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme,darkTheme } from '../components/theme' */


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


    return <Component {...pageProps} />
}