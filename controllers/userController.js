const home =(req,res)=>{
res.render('home')
}
const about =(req,res)=>{
 res.render('about')   
}
const courses =(req,res)=>{
res.render('courses')    
}
const trainers =(req,res)=>{
 res.render('trainers')   
}
const events =(req,res)=>{
  res.render('events')  
}
const pricing =(req,res)=>{
 res.render('pricing')   
}
const contact =(req,res)=>{
  res.render('contact')  
}
// const getStarted =(req,res)=>{
//    res.render('/pages/courses') 
// }

module.exports={
    home,
    about,
    contact,
  
    pricing,
    events,
    courses,
    trainers,
}