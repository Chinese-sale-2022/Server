const express=require('express');
const router =express.Router();
const users=require('../controllers/userController');

router.post('/users',users.addUser);
router.get('/users/:id',users.getAllItemsByUserId);
router.post('/users',users.addOrder);
 
module.exports=router;