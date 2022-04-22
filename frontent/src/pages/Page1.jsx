import trans from "../components/lang"
import {Context} from "../context/langContext.js"
import { useContext } from "react"

export default function Page1(){
    const {lang}=useContext(Context)
    return(
        <div>
            <h1>{trans[lang].page1}</h1>
            <h1>API integration like maps or wather</h1>
            <h1>or about me</h1>
            <ul>
                <li>projects</li>
                <li>useReducer</li>
            </ul>
        </div>
    )
}