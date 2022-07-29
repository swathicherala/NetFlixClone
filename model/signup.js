const express=require('express')
const mongoose=require('mongoose')

const signupData=new mongoose.Schema({
   
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

})

const signUpInfo=new mongoose.model("signupdata",signupData)
module.exports=signUpInfo