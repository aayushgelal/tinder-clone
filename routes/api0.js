//jshint esversion:6
const express=require('express');
const user=require('../models/database');
router=express.Router();
router.get("/",function(req,res){
  user.find({},function(Data){
    res.send(Data);

  });
});
module.exports=router;
