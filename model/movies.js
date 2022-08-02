const express=require('express')
const mongoose=require('mongoose')

const moviesSchema=new mongoose.Schema({
   
    moviename:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    dateofrelease:{
        type:Date,
        required:true
    },
    image:{
        type:String,
        required:true
      },
      description:{
        type:String,
        required:true
      }

})

const moviesInfo=new mongoose.model("moviesData",moviesSchema)
module.exports=moviesInfo