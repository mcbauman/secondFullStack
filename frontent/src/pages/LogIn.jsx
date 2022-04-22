import trans from "../components/lang"
import {Context} from "../context/langContext.js"
import { useContext, useState } from "react"
// import dotenv from "dotenv"

export default function LogIn(){
    const {lang,setLang,user,setUser,password,setPassword,loggedIn,setLoggedIn}=useContext(Context)
    
    // dotenv.config()

    function submitFunction(e){
        e.preventDefault()
        console.log(`User=${user} with Password=${password}`)
        if(user&&password){
            //send request
            const config={
                method:"Post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({user,password})
            }
            console.log("Request from Frontend",JSON.stringify({user,password}));
            let answer
            fetch("http://localhost:4040",config)
                .then(response=>response.json())
                .then(result=>{
                    answer=result[0]
                    console.log("result",result);
                    console.log("answer",answer);
                    if(answer.user==user&&answer.password==password){
                        setLoggedIn(true)
                        setLang(answer.theme)
                    }else{
                        alert(trans[lang].wrongLogIn)  
                    }
                })
                .catch(error=>console.log(error))
        }else{alert(trans[lang].loginAlert)}
    }
    return(
        <form action="" onSubmit={submitFunction}>
            <h1>{trans[lang].logIn}</h1>
            <input type="text" name="username" id="username" placeholder={trans[lang].username} onChange={e=>setUser(e.target.value)}/>
            <input type="password" name="password" id="password" placeholder={trans[lang].password} onChange={e=>setPassword(e.target.value)}/>
            <button type="submit">{trans[lang].submit}</button>
        </form>
    )
}