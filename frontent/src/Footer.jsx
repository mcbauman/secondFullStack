import { useContext } from "react"
import trans from "./components/lang"
import {LangContext} from "./context/langContext.js"

export default function Footer(){
    const {lang}=useContext(LangContext)
    return(
        <footer>
            <h1>{trans[lang].footer}</h1>
        </footer>
    )
}