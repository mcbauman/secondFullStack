import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import {useState} from "react"
import {LangContext} from "./context/langContext.js"

export default function App(){
    const [lang,setLang]=useState("en")
    const langContext={lang,setLang}
    return(
        <LangContext.Provider value={langContext}>
            <div  id={lang}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </LangContext.Provider>
    )
}