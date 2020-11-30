//jshint esversion:6
const express=require('express');
const  path=require('path');
const router=require('./routes/api.js');
app=express();
port=process.env.port||2000;
if(process.env.NODE_ENV==="production"){
  app.use(express.static('tinder-clone/build'));
  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'tinder-clone','build','index.html'));
  });

}
app.use("/",router);

app.listen(port,function(){
console.log("server started");
});
