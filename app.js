const express = require('express')
const dotEnv = require('dotenv')
const blogRoute = require('./routes/userRoute')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')




dotEnv.config()
const port = process.env.PORT || 9801

const app = express()



app.set('view engine','ejs')

// adding middlewares
app.use(express.static('public'))
app.use(expressLayouts)
app.use(express.urlencoded({extended:false}))

app.use('/',blogRoute)



const startServer=()=>{
    try{
        
        app.listen(port,()=>{
            console.log(`Server is running on http://localhost:${port}`)
        });
    }catch(err){
        console.log(err);
    }
}

startServer()
