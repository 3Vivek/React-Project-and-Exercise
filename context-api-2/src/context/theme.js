import { createContext, useContext } from "react";

//create context here with bydefaukt method and value
export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
    sayHello:"Hello"
})

//use ThemeProvider here instead of all place
export const ThemeProvider=ThemeContext.Provider

//now create custom hooks
//now we able to access themeContext by hook useTheme
export default function useTheme(){
    return useContext(ThemeContext)
}
 