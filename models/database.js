//jshint esversion:6
//Tnk8W6CCAMwl3tCg
const mongoose=require('mongoose');
mongoose.connect(process.env.MONGODBURI,{useNewUrlParser:true});
const UserSchema=mongoose.Schema({
  name:String,
  profile:String,
  messages:String
});
const User=mongoose.model("User",UserSchema);
mongoose.connection.on('connected',()=>{
  console.log("databaseconnected");
})
module.exports=User;
