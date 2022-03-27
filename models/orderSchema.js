const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
    
    item_id:Number,
    item_name: { type: String, match: /[0-9]{9}/ },
    item_desciption:String,
    price:Number
} );
module.exports={
    orderSchema
}