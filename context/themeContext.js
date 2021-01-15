import React , { Children, Component, useEffect , createContext , useState, useContext } from 'react';

 export const ThemeContext = createContext()

export const ThemeContextProvider = (props) => 
{
    const [mode, setmode] = useState(false)

    useEffect(() => {
        setmode(window.localStorage.getItem("darkMode"))
    }, [])

    const { children } = props;

    return (
        <ThemeContext.Provider value = {{ mode }}>
            { children }
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider




