const jwt = require('jsonwebtoken')
require('dotenv').config()
const auth= (req,res,next)=>{

    const {token} = req.headers

    // console.log("token" ,token)
    //    console.log("token",req.headers)

    try {
        const decodedToken = jwt.verify(token,process.env.SECRET_KEY)
        if(decodedToken){
            // console.log("role",decodedToken.role)
            
             if(decodedToken.role==="admin" || decodedToken.role==="super_admin"){
                next()
             }else if(decodedToken.role ==="user"){
                req.body.userID=decodedToken.userID
                next()
             }
        }else{
            res.status(400).send({"error":"please login first"})
        }
    } catch (err) {
        res.status(400).send({"error":err.message})
        
    }
}

module.exports=auth