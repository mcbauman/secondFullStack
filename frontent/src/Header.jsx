import { useContext } from "react"
import trans from "./components/lang"
import {LangContext} from "./context/langContext.js"

export default function Header(){
    const {lang,setLang}=useContext(LangContext)
    return(
        <header>
            <h1>{trans[lang].title}</h1>
            <select onChange={(e)=>setLang(e.target.value)}name="lang" id="lang">
                <option value="en">🇬🇧</option>
                <option value="de">🇩🇪</option>
                <option value="ke">🇰🇪</option>
            </select>
        </header>
    )
}