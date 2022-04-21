import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import User from "./models/user.js"

const app=express()
app.use(cors()) //makes backend/frontend like this possible
app.use(express.json()) //formats to/from json
dotenv.config() //connects the data from .env
function connect(){
    mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(()=>console.log("Databank connected"))
    .catch(err=>console.log("conneting Error",err))
}
connect()

app.get("/",async (req,res)=>{
    const usr=await User.find()
    res.send(usr)
})

app.post("/",async (req,res)=>{
    const usr=new User(req.body)
    try{
        await usr.save()
        res.send(usr)
    }catch(err){
        res.status(400).send({error:err.message})
    }
})

app.use("/",(req,res)=>{
    console.log("Received Get Request");
    res.send("Answer to get Request")
})
// app.use((req,res)=>res.status(404).send({error:"Resorce not found"}))

const { PORT } =process.env
app.listen(PORT,()=>console.log(`Server upt at ${PORT}`))