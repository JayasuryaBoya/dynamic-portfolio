const exp=require('express')
const adminApp = require('./APIes/AdminApi')
const app=exp()
require('dotenv').config()
let path=require('path')
// integrate with frontend
app.use(exp.static(path.join(__dirname,'../frontend/build')))
// parse body of req
app.use(exp.json())

// forward to admin-api
app.use('/admin-api',adminApp)

let mc=require('mongodb').MongoClient
mc.connect(process.env.CONNECTION)
.then((client)=>{
    console.log('database connected')
    let dbObj=client.db('portfolio')
    let adminCollection=dbObj.collection('Admin')
    let skillCollection=dbObj.collection('skills')
    let projectCollection=dbObj.collection('projects')
    app.set('adminCollection',adminCollection)
    app.set('skillCollection',skillCollection)
    app.set('projectCollection',projectCollection)
}).catch(err=>{
    console.log(err)
})
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'../frontend/build/index.html'))  
})
app.use((err,req,res,next)=>{
    res.send({message:"error",error:err.message})
})
// to handle refresh

let port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server run on ${port}`)
})