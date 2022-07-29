const express=require('express');
const app=express();
const port=process.env.PORT || 3400
require('./db/conn');
const router2=require('./router/signup')
const cors=require("cors");
const morgan=require('morgan');
const bodyParser=require('body-parser');

app.use(cors())
app.use(morgan('tiny'));
app.use(bodyParser.json())


app.use(express.json());

app.use(router2)



app.listen(port,()=>{
    console.log(`App is running on port:${port}`)
})