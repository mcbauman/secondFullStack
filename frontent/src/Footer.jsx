import { useContext } from "react"
import trans from "./components/lang"
import {Context} from "./context/langContext.js"

export default function Footer(){
    const {lang}=useContext(Context)
    return(
        <footer>
            <h1>{trans[lang].footer}</h1>
        </footer>
    )
}