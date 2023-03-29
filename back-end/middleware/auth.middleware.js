const jwt = require('jsonwebtoken')
const auth= (req,res,next)=>{

    const {token} = req.headers
    
    try {
        const decodedToken = jwt.verify(token,process.env.SECRET_KEY)
        if(decodedToken){
            // console.log("role",decodedToken.role)
             if(decodedToken.role==="admin"){
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