const home =(req,res)=>{
res.send('/pages/home')
}
const about =(req,res)=>{
 res.send('/pages/about')   
}
const courses =(req,res)=>{
res.send('/pages/courses')    
}
const trainers =(req,res)=>{
 res.send('/pages/trainers')   
}
const events =(req,res)=>{
  res.send('/pages/events')  
}
const pricing =(req,res)=>{
 res.send('/pages/pricing')   
}
const contact =(req,res)=>{
  res.send('/pages/contact')  
}
// const getStarted =(req,res)=>{
//    res.send('/pages/courses') 
// }

module.exports={
    home,
    about,
    contact,
  
    pricing,
    events,
    courses,
    trainers
}