const mongoose=require("mongoose");
const orderSchema=require('./orderSchema').orderSchema;

const userSchema=new mongoose.Schema({
    user_first_name: { type: String, match: /[A-Z a-z]/ },
    user_last_name: { type: String, match: /[A-Z a-z]/ },
    user_phone: { type: String, match:/[0-9]{9,11}/ },
    arr_order:[orderSchema]
});
const User=mongoose.model("users",userSchema);
module.exports={
    userSchema,
    User
}