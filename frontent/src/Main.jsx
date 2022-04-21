import { useContext } from "react"
import trans from "./components/lang"
import {LangContext} from "./context/langContext.js"
import {Routes,Route} from "react-router-dom"
import Page1 from "./pages/Page1.jsx"
import Page2 from "./pages/Page2.jsx"
import LogIn from "./pages/LogIn.jsx"
import SignIn from "./pages/SignIn.jsx"

export default function Main(){
    const {lang}=useContext(LangContext)
    return(
        <main>
            <h1>{trans[lang].main}</h1>
            <Routes>
                <Route path="main/page1" element={<Page1/>}></Route>
                <Route path="main/page2" element={<Page2/>}></Route>
                <Route path="main/logIn" element={<LogIn/>}></Route>
                <Route path="main/signIn" element={<SignIn/>}></Route>
            </Routes>
        </main>
    )
}