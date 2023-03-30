const jwt =require('jsonwebtoken')
require('dotenv').config()
const super_admin_auth = (req,res,next)=>{

    const {token} = req.headers
    

    try {
        const decodedToken = jwt.verify(token,process.env.SECRET_KEY)
        if(decodedToken){
            // console.log(decodedToken.role)
            if(decodedToken.role==="super_admin"){
                next()
            }else{
                res.status(400).send({"error":"unautharised !"})
            }
        }else{
            res.status(400).send({"error":"unautharised !"})
        }
    } catch (err) {
        res.status(400).send({"error":err.message})

    }
}

module.exports=super_admin_auth