import trans from "../components/lang"
import {Context} from "../context/langContext.js"
import { useContext, useState } from "react"

export default function SignIn(){
    const {lang,user,setUser,password,setPassword,loggedIn,setLoggedIn}=useContext(Context)

    const [gender,setGender]=useState("male")
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [email,setEmail]=useState("")
    const [dateOfBirth,setDateOfBirth]=useState("")
    const [language,setLanguage]=useState("de")
    const [theme,setTheme]=useState("de")

    function submitFunction(e){
        e.preventDefault()
        console.log("gender",gender);
        console.log("firstname",firstname);
        console.log("lastname",lastname);
        console.log("email",email);
        console.log("user",user);
        console.log("password",password);
        console.log("dateOfBirth",dateOfBirth);
        console.log("lang",lang);
        console.log("language",language);
        console.log("theme",theme);
        if(gender&&firstname&&lastname&&email&&user&&password&&dateOfBirth){
            setLanguage(lang)
            setTheme(lang)
            const config={
                method:"Post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({gender,firstname,lastname,email,user,password,dateOfBirth,language,theme})
            }

            let answer
            fetch("http://localhost:4040/users",config)
                .then(response=>response.json())
                .then(result=>{
                    answer=result
                    console.log(result);
                    if(answer.user==user&&answer.password==password){
                        setLoggedIn(true)
                    }else{
                        alert(trans[lang].wrongLogIn)  
                    }
                })
                .catch(error=>console.log(error))
        }else{alert(trans[lang].signUpAlert)}
    }
    return(
        <form action="" onSubmit={submitFunction}>
            <h1>{trans[lang].signIn}</h1>
            <select name="gender" id="gender" onChange={e=>setGender(e.target.value)}>
                <option value="male">{trans[lang].male}</option>
                <option value="female">{trans[lang].female}</option>
            </select>
            <input type="text" name="firstName" id="firstName" placeholder={trans[lang].firstname} onChange={e=>setFirstname(e.target.value)}/>
            <input type="text" name="lastname" id="lastname" placeholder={trans[lang].lastname} onChange={e=>setLastname(e.target.value)}/>
            <input type="email" placeholder="eMail" name="email" id="email" onChange={e=>setEmail(e.target.value)}/>
            <input type="text" name="username" id="username" placeholder={trans[lang].username} onChange={e=>setUser(e.target.value)}/>
            <input type="password" name="password" id="password" placeholder={trans[lang].password} onChange={e=>setPassword(e.target.value)} />
            <input type="date" name="dateofbirth" id="dateofbirt" placeholder={trans[lang].dateob}  onChange={e=>setDateOfBirth(e.target.value)}/>
            <button type="submit">{trans[lang].submit}</button>
        </form>
    )
}