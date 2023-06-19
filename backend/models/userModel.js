const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true
    },
    img:{
        type:String,
        default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    }
},{timestamps:true})

module.exports = mongoose.model("User",userSchema)