import trans from "../components/lang"
import {Context} from "../context/langContext.js"
import { useContext, useState } from "react"

export default function LogIn(){
    const {lang}=useContext(Context)

    function submitFunction(e){
        e.preventDefault()
        console.log("Submit function executed");
    }
    return(
        <form action="" onSubmit={submitFunction}>
            <h1>{trans[lang].logIn}</h1>
            <input type="text" name="username" id="username" placeholder={trans[lang].username} />
            <input type="password" name="password" id="password" placeholder={trans[lang].password} />
            <button type="submit">{trans[lang].submit}</button>
        </form>
    )
}