const Winning = require("../models/winningModel").Winning;
const Item = require("../models/item").Item;

const addWinnig = async (req, res) => {
    try {
        let win = new Winning(req.body);
        await win.save();
        return res.send(win);
    }
    catch (w) {
        return res.status(400).send(w);
    }
}

const getAllUsersByItemID = async (req, res) => {
    let code = req.params.id;
    try {
        let users = await User.find({}).filter(user=>{user.arr_orders.find(order=>order.item_id==code)!=-1});
        return res.send(users);
    }
    catch (err) {
        return res.status(400).send(err)
    }
}

const getWinnerByWinningID=async(req,res,id)=>{
    let code = req.params.id;
    try {
        let win = await Winning.findById(code);
        return res.send(win);
    }
    catch (err) {
        return res.status(400).send(err)
    }
}

const getWinnerByItemId=async(req,res,id)=>{
    let code = req.params.id;
    try {
        let win = await Winning.find({item_id:code});
        return res.send(win);
    }
    catch (err) {
        return res.status(400).send(err)
    }
}

module.exports = {
    addWinnig, getAllUsersByItemID, getWinnerByWinningID, getWinnerByItemId
}