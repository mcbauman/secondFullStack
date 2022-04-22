// import React from "react"

// const defaultValue="en"
// export const LangContext=React.createContext(defaultValue)



//NEW VERSION
import React from "react"
import {useState} from "react"

export const Context=React.createContext(null)
export default function ContextProvider(props){
    const [lang,setLang]=useState("en")
    const [user,setUser]=useState(null)
    const [password,setPassword]=useState(null)
    const [loggedIn, setLoggedIn]=useState(false)

    const contextValue={lang,setLang,user,setUser,password,setPassword,loggedIn, setLoggedIn}

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}