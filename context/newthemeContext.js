import { createContext , useContext , useState } from 'react'

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

export const ThemeContextProvider = (props) => {
    const [theme, settheme] = useState(true)

    const toggleTheme = () => {
        const find = JSON.parse(window.localStorage.getItem("darkMode"))

        if(find) 
        {
            window.localStorage.setItem('darkMode' , false)
            settheme(JSON.parse(window.localStorage.getItem('darkMode')))
        }
        else
        {
            window.localStorage.setItem('darkMode', true)
            settheme(JSON.parse(window.localStorage.getItem('darkMode')))
        }
    }

    const { children } = props

    return(
        <ThemeContext.Provider value={{ theme , toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
