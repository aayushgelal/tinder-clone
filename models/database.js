//jshint esversion:6
//Tnk8W6CCAMwl3tCg
const mongoose=require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB,{useNewUrlParser:true});
const UserSchema=mongoose.Schema({
  name:String,
  profile:String,
  messages:String
});
const User=mongoose.model("User",UserSchema);
mongoose.connection.on('connected',()=>{
  console.log("databaseconnecte");
})
module.exports=User;
