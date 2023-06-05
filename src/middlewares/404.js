
module.exports=(req,res,next)=> {
    res.status(404).json({
        code:404,
        route:req.path,
        message:"Error 404: Page Not Found",
    })
}