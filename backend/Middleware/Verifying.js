let jwt=require('jsonwebtoken')
let exp=require('express')
require('dotenv').config()
let verifyApp=exp.Router()
verifyApp.use((req,res,next)=>{
    let bearerToken=req.headers.authorization
    if(bearerToken!=undefined)
    {
        let token=bearerToken.split(' ')[1]
        try{
            jwt.verify(token,process.env.SECRETE_KEY)
            next()
        }
        catch(err)
        {
            next(err)
        }

    }
    else
    {
        res.send({message:"Unauthorised Access"})
    }
})
module.exports=verifyApp