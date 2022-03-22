const express = require('express');
const winning=require("../controllers/winningController");
const router = express.Router();

router.post('/winning',winning.addWinnig);
router.get('/winning/:id',winning.getAllUsersByItemID);
router.get('/winning/:id',winning.getWinnerByWinningID);
router.get('/winning/:id',winning.getWinnerByItemId);

module.exports = router;

