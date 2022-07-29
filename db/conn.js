const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/CRUD')
.then(()=>{
    console.log('Connected Successfully')
})
.catch((err)=>{
    console.log('No Connection')
})