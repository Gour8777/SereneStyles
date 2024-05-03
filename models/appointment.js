const mongoose=require('mongoose');
const userSchemaa=new mongoose.Schema({
    email:String,
    salonname:String,
    name:String,
    sex:String,
    contact:Number,
    datetime:String,
    purpose:String,
    reason:String,
    


});
const Appoint=mongoose.model('appointment',userSchemaa);
module.exports=Appoint;
