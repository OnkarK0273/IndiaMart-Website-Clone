const mongoose = require('mongoose')



const userSchema = mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    age:Number
},{
    versionKey:false
})

const UserModal = mongoose.model("user",userSchema)

module.exports = UserModal