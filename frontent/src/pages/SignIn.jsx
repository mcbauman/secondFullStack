import trans from "../components/lang"
import {LangContext} from "../context/langContext.js"
import { useContext } from "react"

export default function SignIn(){
    const {lang}=useContext(LangContext)
    return(
        <h1>{trans[lang].signIn}</h1>
    )
}