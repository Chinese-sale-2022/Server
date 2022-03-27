/*const express = require('express')
const cors = require('cors')
const items = require('./routes/itemsRoutes')
const users = require('./routes/userRoutes')
const winning = require('./routes/winningRouter')
const app = express()
const mongoose = require("mongoose");
 mongoose.connect("mongodb://localhost:27017/chineseAuctionch").then(() => {
    console.log("connected to mogodb")

}).catch(err => console.log(err));
app.use(express.json)
app.use(cors())
app.use(items)
app.use(users)
app.use(winning)

app.listen(4500, () => console.log(`listening at http://localhost:4500`));
*/

const express = require('express')
const cors = require('cors')
const mongoose=require('mongoose')
const itemController = require('./controllers/itemsControllers')
const userConroller = require('./controllers/userControllers');
const winningConroller = require('./controllers/winningController');

const app = express();

mongoose.connect('mongodb://localhost:27017/Chinese-sale-2022')
.then(success=>console.log('mongodb connected'))
.catch(error=>console.log(error))

app.get('/user',userConroller.getAllItemsByUserId)
app.get('/winning/:id', winningConroller.getWinnerByWinningID)
app.get('/winning/getUserSubscribe/:id',winningConroller.getAllUsersByItemID)
app.get('/winning/getWinner/:id',winningConroller.getWinnerByItemId)
app.get('/item',itemController.getAllItems)
app.get('/item/:id',itemController.getItemById)
app.delete('/item/:id',itemController.deleteItem)
app.post('/user',userConroller.addUser)
app.post('/user/order/:id',userConroller.addOrder)
app.post('/winning',winningConroller.addWinnig)
app.post('/item',itemController.addItem)

app.listen(4500, () => { console.log('listening') })

