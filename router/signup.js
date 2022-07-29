const express=require ('express')
const router=new express.Router()
const signupSchema=require('../model/signup')

router.get('/',async(req,res)=>{
    try{
        const moviesData=await signupSchema.find({}).sort({"dateofrelease":1})
        res.status(201).send(moviesData)
    }
    catch(err){
        res.status(400).send(err)
    }
})


router.get('/:id', async function(req, res) {
    try{
        const _id = req.params.id
        console.log(_id)
        const moviesData = await signupSchema.findById(_id);
        res.send(moviesData);
    }catch(err){
        res.status(400).send(err)
    }
});


router.post('/save',async(req,res)=>{
    try{
        const moviesData=new signupSchema(req.body)
        const moviesInfo=await moviesData.save()
        res.status(201).send(moviesInfo)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.put('/update/:id',async(req,res)=>{
    try{
        const _id=req.params.id
        const moviesData=await signupSchema.findByIdAndUpdate(_id,req.body, {new:true})
        res.send(moviesData)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try{
        const moviesData=await signupSchema.findByIdAndDelete(req.params.id)
        res.send(moviesData)
    }
    catch(err){
        res.status(400).send(err)
    }
})


module.exports=router
