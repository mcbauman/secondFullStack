import trans from "../components/lang"
import {LangContext} from "../context/langContext.js"
import { useContext } from "react"

export default function Page2(){
    const {lang}=useContext(LangContext)
    return(
        <div>
            <h1>{trans[lang].page2}</h1>
            <h1>some animation</h1>
        </div>
    )
}