import trans from "../components/lang"
import {Context} from "../context/langContext.js"
import { useContext } from "react"

export default function SignIn(){
    const {lang}=useContext(Context)
    function submitFunction(e){
        e.preventDefault()
        console.log("Submit function executed");
    }
    return(
        <form action="" onSubmit={submitFunction}>
            <h1>{trans[lang].signIn}</h1>
            <select name="gender" id="gender">
                <option value="male">{trans[lang].male}</option>
                <option value="female">{trans[lang].female}</option>
            </select>
            <input type="text" name="firstName" id="firstName" placeholder={trans[lang].firstname}/>
            <input type="text" name="lastname" id="lastname" placeholder={trans[lang].lastname}/>
            <input type="email" placeholder="eMail" name="email" id="email"/>
            <input type="text" name="username" id="username" placeholder={trans[lang].username} />
            <input type="password" name="password" id="password" placeholder={trans[lang].password} />
            <input type="date" name="dateofbirth" id="dateofbirt" placeholder={trans[lang].dateob} />
            <button type="submit">{trans[lang].submit}</button>
        </form>
    )
}