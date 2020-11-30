//jshint esversion:6
const express=require('express');
const user=require('../models/database');
router=express.Router();
router.get("/api",function(req,res){
  //user.insertMany([{name:"Bill Gates",profile:"https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg",messages:"Hi"},{name:"Elon Musk",profile:"https://peaklife.in/wp-content/uploads/2019/06/elon-musk-image.jpg",messages:"I am in love with my cars"},{name:"Steve Jobs",profile:"https://i.insider.com/56fd87d6918a0fd2443cf1de?width=1136&format=jpeg",messages:"Do you use apple?"},{name:"Warren Buffet",profile:"https://m.economictimes.com/thumb/msid-78039318,width-1200,height-900,resizemode-4,imgsize-103030/warren-buffett-1200-bccl.jpg",messages:"Hi I am a billionare."},{name:"Mark Zuckerberg",profile:"https://media.vanityfair.com/photos/5d8e2fecd3ee420008a05947/3:2/w_1998,h_1332,c_limit/Zuck10.jpg",messages:"Hello"}]);
  user.find({}).then(data =>{
    console.log(data);
    res.send(data);
  });
});
module.exports=router;
