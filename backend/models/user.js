import mongoose from "mongoose"
import "mongoose-type-email"

const {Schema,model}=mongoose
const userSchema=new Schema({
    gender:{type:String,required:true,enum:["male","female"]},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:mongoose.SchemaTypes.Email,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    dateOfBirth:{type:Date,required:true},
    street:{type:String},
    housnumber:{type:Number},
    postCode:{type:Number},
    phoneNumber:{type:String},
    country:{type:String},
    language:{type:String, enum:["deutsch","english"], default:"english"},
    theme:{type:String,enum:["deutsch", "kenyan", "british"], default:"deutsch"}
})

const User=model("user",userSchema)

export default User