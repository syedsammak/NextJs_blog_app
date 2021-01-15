import { createContext , useContext , useState ,useEffect } from 'react'
/*
Create Context object instantiates a new context object which will
be used to read current context value form its closest matching provider
*/
const ThemeContext = createContext()
/*
in order to avoid calling useContext in every component we instantiate it 
in our context file
*/

export const useThemeContext = () => useContext(ThemeContext)

/*
A provider function holds all the logical reactive state , 
functions to manage operations handled by the context High order component
*/
const themeKey = "ThemeData"

export const ThemeContextProvider = (props) => {
    const defualtTheme = 
    { 
        dark_mode : false  
    }
   
    const [theme, settheme] = useState(defualtTheme)

    useEffect(() => {
        const find = JSON.parse(window.localStorage.getItem(themeKey))

        if(find) 
        {
            settheme(find)
        }
        else
        {
            window.localStorage.setItem(themeKey , JSON.stringify(defualtTheme))
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem(themeKey , JSON.stringify(theme))
        
    }, [theme])

    const toggleTheme = () => {
     settheme({dark_mode : !theme.dark_mode})
    }

    const { children } = props

    return(
        <ThemeContext.Provider value={{ theme , toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
