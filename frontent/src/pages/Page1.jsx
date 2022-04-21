import trans from "../components/lang"
import {LangContext} from "../context/langContext.js"
import { useContext } from "react"

export default function Page1(){
    const {lang}=useContext(LangContext)
    return(
        <h1>{trans[lang].page1}</h1>
    )
}