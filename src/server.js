'use strict'
const express=require("express")
const app=express();

const stamperMid=require("./middlewares/stamper")
const notFoundHandler=require("./middlewares/404")
const srverError=require("./middlewares/500")
const getHandler=require("./handlers/getHandler")

app.get("/",(req,res)=>{
    res.send("Server is running")
})
app.get("/endpoint",stamperMid,getHandler)
app.use("*",notFoundHandler)
app.use(srverError)

function start(port) {
    app.listen(port,()=>{
        console.log(`server is running in port ${port}`)
    })
}
module.exports={
    start:start,
    app:app
}