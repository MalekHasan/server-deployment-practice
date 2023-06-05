const data=require("../../data/data.json")
module.exports=(req,res)=> {
    data.push(`timeStamp:${req.timeStamp}`)
    res.status(200).send(data)
}