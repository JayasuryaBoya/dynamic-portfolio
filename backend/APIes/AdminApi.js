let exp=require('express')
let adminApp=exp.Router()
let asyncHandler=require('express-async-handler')
let bcryptjs=require('bcryptjs')
let jwt=require('jsonwebtoken')
let verifyApp=require('../Middleware/Verifying')
require('dotenv').config()
let adminCollection;
let projectCollection;
adminApp.use((req,res,next)=>{
    adminCollection=req.app.get('adminCollection')
    projectCollection=req.app.get('projectCollection')
    next()
})
adminApp.post('/admin',asyncHandler(
    async(req,res)=>{
        let newAdmin=req.body;
        let dbAdmin=await adminCollection.findOne({username:newAdmin.username})
        // check duplicate author
        if(dbAdmin!=null)
        {
            res.send({message:"Author already present!,go for login"})
        }else{
            // hash the password
            newAdmin.password=await bcryptjs.hash(newAdmin.password,5)
            let acknowledgement=await adminCollection.insertOne(newAdmin);
            if(acknowledgement.acknowledged==true)
            {
                res.send({message:'registered successfully..!',payload:{username:newAdmin.username}})
            }
            else
            {
                res.send({message:"something went wrong...!"})
            }
        }
    }
))





// login
adminApp.post('/login',async(req,res)=>{

    let credential=req.body
    let admin=await adminCollection.findOne({username:credential.username})
    if(admin==null)
    {
        res.send({message:"UserName name wrong",respond:'invalid-username!'})
    }
    else{
        let passwordStatus=await bcryptjs.compare(credential.password,admin.password)
        if(passwordStatus==true)
        {
            let token=jwt.sign({username:credential.username},process.env.SECRETE_KEY,{expiresIn:'1d'})
            res.send({message:"okay!",payload:admin,token:token})
        }
        else{
            res.send({message:"invalid password!",respond:'invalid-password!'})
        }
    }
})



// SKILL

// add skills
adminApp.post('/skill',verifyApp,asyncHandler(async(req,res)=>{
let skillCollection=req.app.get('skillCollection')
let newSkill=req.body
let dbskill=await skillCollection.findOne({skill:newSkill.skill})
if(dbskill!=null)
{
    res.send({message:"You already add the skill..!",respond:'duplicate!'})
}
else{
    await skillCollection.insertOne(newSkill)
    res.send({message:'successfully add the skill',respond:'added!'})
}
}))


// delete skill
adminApp.delete('/skills/:skill',verifyApp,asyncHandler(async(req,res)=>{
let skillCollection=req.app.get('skillCollection')
let deleteSkill=req.params.skill
let result=await skillCollection.deleteOne({skill:deleteSkill})
res.send({message:"clicked skill deleted successfully!",respond:'deleted!'})
}))

// get Skills
adminApp.get('/skills',async(req,res)=>{
let skillCollection=req.app.get('skillCollection')
let skills=await skillCollection.find().toArray()
res.send({message:"skills List",payload:skills})
})




// PROJECT

// add the project true
adminApp.post('/project',verifyApp,asyncHandler(async(req,res)=>{
    let newProject=req.body
    let dbProject=await projectCollection.findOne({projectId:newProject.projectId})
    if(dbProject!=null)
    {
        res.send({message:"Project submission Already done"})
    }
    else{
        await projectCollection.insertOne(newProject)
        res.send({message:"project successfully submited"})
    }
}))


// get the projects
adminApp.get('/projects',asyncHandler(async(req,res)=>{
    let projectList=await projectCollection.find().toArray()
    res.send({message:"Project List",payload:projectList})
}))



// delete
adminApp.delete('/project/:projectId',verifyApp,asyncHandler(async(req,res)=>{
    let varyProjectId=(+req.params.projectId)
    let dbProject=await projectCollection.deleteOne({projectId:varyProjectId})
    res.send({message:'Project deleted..!'})
})) 


// editing the project 
adminApp.put('/project',verifyApp,asyncHandler(async(req,res)=>{
    let editProject=req.body
    let result=await projectCollection.updateOne({projectId:editProject.projectId},{$set:editProject})
    res.send({message:"Edited successfully!",payload:result})
}))
module.exports=adminApp



