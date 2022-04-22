import { useContext } from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import {Context} from "./context/langContext.js"
// import ContextProvider from "./context/langContext.js"

export default function App(){
    // const lang="de"
    const {lang}=useContext(Context)
    return(
        // <ContextProvider>
            <div  id={lang}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        // </ContextProvider>
    )
}