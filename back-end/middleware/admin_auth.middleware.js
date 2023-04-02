const jwt =require('jsonwebtoken')
require('dotenv').config()
const admin_auth = (req,res,next)=>{

    const {token} = req.headers
    try {
        const decodedToken = jwt.verify(token,process.env.SECRET_KEY)
        console.log(decodedToken)
        if(decodedToken){
            if(decodedToken.role==="admin"){
                next()
            }else if(decodedToken.role==="super_admin"){
                next()
            }
        }else{
            res.status(400).send({"error":"unautharised !"})
        }
    } catch (err) {
        res.status(400).send({"error":err.message})

    }
}

module.exports=admin_auth