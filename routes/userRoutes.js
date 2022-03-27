const express=require('express');
const router =express.Router();
//const users=require('../controllers/userController');
const {addUser}=require('../controllers/userControllers').addUser;
const {getAllItemsByUserId}=require('../controllers/userControllers').getAllItemsByUserId;
const {addOrder}=require('../controllers/userControllers').addOrder;

const user = '/users';
const userId = '/users/:id';
router.post(user,addUser);
router.get(userId,getAllItemsByUserId);
router.post(user,addOrder);
 
module.exports=router;