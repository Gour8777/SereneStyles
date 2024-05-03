const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
    password:String
});
const User=mongoose.model('users',userSchema);
module.exports=User;
