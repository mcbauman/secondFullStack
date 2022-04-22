import { useContext } from "react"
import trans from "./components/lang"
import {Context} from "./context/langContext.js"

export default function Footer(){
    const {lang,loggedIn}=useContext(Context)
    console.log("logged In",loggedIn);
    return(
        <footer>
            <h1>{trans[lang].footer}{loggedIn?" Logged In":" not logged In"}</h1>
        </footer>
    )
}