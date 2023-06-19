const asyncHandler=require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');
const bcrypt=require("bcryptjs")

const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password,img}=req.body;

    if(!name||!email||!password){
        res.status(400)
        throw new Error("Missing Details")
    }

    const userExists=await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("User Already Exists")
    }

    const hashedPass = await bcrypt.hash(password, 12);

    const user=await User.create({
        name,email,password:hashedPass,img
    });
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            img:user.img,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Failed to create a new user")
    }
})

const authUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;

    const user=User.findOne({email});

    let isValidPass = await bcrypt.compare(password, user.password);
    if(!isValidPass){
        res.status(400)
        throw new Error("Password didn't match")
    }

    if(user && (passwordMatch)){
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            img:user.img,
            token:generateToken(user._id)
        })
    }
})

module.exports={registerUser,authUser};

