const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoute = require('./routes/user.route')
require('dotenv').config()
const app = express()

// global middleweres---------------

app.use(express.json())
app.use(cors())

//  routes--------------------------

// route-1
app.use('/auth',userRoute)



// run http and back-end server-------------------

app.listen(process.env.HTTP_PORT,async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_CONNECT}`)
        console.log('connected db')

    }catch(err){
        console.log('not-connected')
        console.log(err)

    }
    console.log('port 4500 running')
})








