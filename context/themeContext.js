import React , {  createContext , useState, useContext } from 'react';

 export const ThemeContext = createContext()

 export const useThemeContext = () => useContext(ThemeContext)

 export const ThemeContextProvider = (props) => {
    const [mode, setmode] = useState(false)

    const toggleDarkMode = () =>{
        const f = JSON.parse(window.localStorage.getItem("darkMode"));
        console.log(f)

        if(f){
                window.localStorage.setItem('darkMode', false)
                setmode(false)
            }
        else{
            window.localStorage.setItem('darkMode', true)
            setmode(true)
        }
    }

    const { children } = props;

    return (
        <ThemeContext.Provider value = { {  mode : mode, toggleDarkMode : () => toggleDarkMode(), } }>
            { children }
        </ThemeContext.Provider>
    )
} 

export default ThemeContextProvider




