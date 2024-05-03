const mongoose=require('mongoose');
const salonSchema=new mongoose.Schema({
    ownername:String,
    salonname:String,
    city:String,
    phone:Number,
    email:String,
   
    
    
});
const Bussiness=mongoose.model('sbussinesses',salonSchema);
module.exports=Bussiness;
