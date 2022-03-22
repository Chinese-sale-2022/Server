const Item=require("../models/itemsModels").Item;

//פונקציה לשליפת כל המוצרים
const getAllItems= async(req, res)=>{
    try{
        let item=await Item.find({});
        return res.send(item);
    }
    catch(e){
        return res.status(400).send(e);
    }
}

//פונקציה לשליפת מוצר לפי id
const getItemById =async(req, res)=>{
    try{
        let item=await Item.findById({id:req.id});
        return res.send(item);
    }
    catch(e){
        return res.status(400).send(e);
    }
}

//פונקציה להוספת מוצר
const addItem=async(req, res)=>{
    try{
        let item=new Item(req.body);
        await item.save();
        return res.send(item);
    }
    catch(e){
        return res.status(400).send(e);
    }
}

//פונקציה למחיקת מוצר
const deleteItem=async(req, res)=>{
    let itemId=req.params.id;
    try{
      let item=await Item.findByIdAndDelete(itemId);
      return res.send(item);  
    }
    catch(e){
        return res.status(400).send(e);
    }
}
module.exports={getAllItems,getItemById,addItem,deleteItem}