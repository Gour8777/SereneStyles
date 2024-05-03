const mongoose=require('mongoose');
const userSchemaaa=new mongoose.Schema({
    
    name:String,
    sex:String,
    address:String,
    email:String,
    phone:Number,
    
    
});
const Profile=mongoose.model('profiles',userSchemaaa);
module.exports=Profile;
