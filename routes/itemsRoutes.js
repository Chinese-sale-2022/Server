const express=require('express');
const router=express.Router();
const controlers=require("../controllers/itemsControllers");

//שליפת כל המוצרים
router.get('/items/',controlers.getAllItems);

//שליפה של פריט לפי id
router.get('/items/:id', controlers.getItemById);

//הוספת מוצר
router.post('/addItem/',controlers.addItem);

//מחיקת מוצר
router.post('/deleteItem/:id', controlers.deleteItem);

module.exports=router;