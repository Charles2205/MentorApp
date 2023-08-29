const express = require('express')
const dotEnv = require('dotenv')
const userRoute = require('./routes/userRoute')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')




dotEnv.config()
const port = process.env.PORT || 9801

const app = express()



app.set('view engine','ejs')
app.set('views',__dirname+'/views/pages')
app.set('layout',__dirname+'/views/layout')

// adding middlewares
app.use(express.static('public'))
app.use(expressLayouts)
app.use(express.urlencoded({extended:false}))

app.use('/',userRoute)



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
