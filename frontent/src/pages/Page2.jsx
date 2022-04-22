import trans from "../components/lang"
import {Context} from "../context/langContext.js"
import { useContext } from "react"

export default function Page2(){
    const {lang}=useContext(Context)
    return(
        <div>
            <h1>{trans[lang].page2}</h1>
            <h1>some animation</h1>
        </div>
    )
}