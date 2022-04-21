import trans from "../components/lang"
import {LangContext} from "../context/langContext.js"
import { useContext } from "react"

export default function LogIn(){
    const {lang}=useContext(LangContext)
    return(
        <h1>{trans[lang].logIn}</h1>
    )
}