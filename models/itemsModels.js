const mongoose=require("mongoose");

//יצירת הסכמה
const itemsSchema=new mongoose.Schema({
    id:{type:Number, required:true},
    item_name:{type:String, required:true},
    item_description:{type:String},
    item_price:{type:Number}
})

const Item=mongoose.model("Item", itemsSchema);

module.exports={itemsSchema, Item};