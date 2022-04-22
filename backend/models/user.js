import mongoose from "mongoose"
import "mongoose-type-email"

const {Schema,model}=mongoose
const userSchema=new Schema({
    gender:{type:String,required:true,enum:["male","female"]},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:mongoose.SchemaTypes.Email,required:true},
    user:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    dateOfBirth:{type:Date,required:true},
    street:{type:String},
    housnumber:{type:Number},
    postCode:{type:Number},
    phoneNumber:{type:String},
    country:{type:String},
    language:{type:String, enum:["de","en","ke"], default:"de"},
    theme:{type:String,enum:["de", "ke", "en"], default:"de"}
})

const User=model("user",userSchema)

export default User