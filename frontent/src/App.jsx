import { useContext } from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import {Context} from "./context/langContext.js"

export default function App(){
    const {lang}=useContext(Context)
    return(
            <div  id={lang}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
    )
}