const express=require ('express')
const router=new express.Router()
const moviesSchema=require('../model/movies')
// const signupSchema=require('../model/signup')
// const searchmovies=require('../model/searchmovies')
const authController = require("../controllers/authController");
const isAuth = require("../middleware/isAuth");

router.get('/',async(req,res)=>{
    try{
        const moviesData=await moviesSchema.find({}).sort({"dateofrelease":1})
        res.status(201).send(moviesData)
    }
    catch(err){
        res.status(400).send(err)
    }
})

// router.get('/signup',async(req,res)=>{
//     try{
//         const moviesData=await signupSchema.find({}).sort({"dateofrelease":1})
//         res.status(201).send(moviesData)
//     }
//     catch(err){
//         res.status(400).send(err)
//     }
// })


router.get('/:id', async function(req, res) {
    try{
        const _id = req.params.id
        console.log(_id)
        const moviesData = await moviesSchema.findById(_id);
        res.send(moviesData);
    }catch(err){
        res.status(400).send(err)
    }
});



// router.post('/save1',async(req,res)=>{
//     try{
//         const moviesData1=new signupSchema(req.body)
//         const moviesInfo1=await moviesData1.save()
//         res.status(201).send(moviesInfo1)
//     }
//     catch(err){
//         res.status(400).send(err)
//     }
// })


// router.post('/save',async(req,res)=>{
//     try{
//         const moviesData=new moviesSchema(req.body)
//         const moviesInfo=await moviesData.save()
//         res.status(201).send(moviesInfo)
//     }
//     catch(err){
//         res.status(400).send(err)
//     }
// })



// router.put('/update/:id',async(req,res)=>{
//     try{
//         const _id=req.params.id
//         const moviesData=await moviesSchema.findByIdAndUpdate(_id,req.body, {new:true})
//         res.send(moviesData)
//     }
//     catch(err){
//         res.status(400).send(err)
//     }
// })

// router.delete('/delete/:id',async(req,res)=>{
//     try{
//         const moviesData=await moviesSchema.findByIdAndDelete(req.params.id)
//         res.send(moviesData)
//     }
//     catch(err){
//         res.status(400).send(err)
//     }
// })

router.post("/signin", authController.postSignin);
router.post("/login", authController.postLogin);
router.post("/user", isAuth, authController.getUser);
module.exports=router
