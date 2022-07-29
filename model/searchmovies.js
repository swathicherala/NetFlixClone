const express=require('express')
const mongoose=require('mongoose')

const searchmoviesSchema=new mongoose.Schema({
   
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
      }

})

const searchmoviesInfo=new mongoose.model("searchmoviesData",searchmoviesSchema)
module.exports=searchmoviesInfo