const express = require('express')
const {home,about,contact,courses,trainers,pricing,events} = require('../controllers/userController')
const app = express.Router()

app.get('/',home)
app.get('/about',about)
app.get('/contact',contact)
app.get('/events',events)
app.get('/trainers',trainers)
app.get('/getstarted',courses)
app.get('/pricing',pricing)


module.exports=app