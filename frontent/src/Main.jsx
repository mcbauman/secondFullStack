import { useContext } from "react"
import trans from "./components/lang"
import {LangContext} from "./context/langContext.js"

export default function Main(){
    const {lang}=useContext(LangContext)
    return(
        <main>
            <h1>{trans[lang].main}</h1>
        </main>
    )
}