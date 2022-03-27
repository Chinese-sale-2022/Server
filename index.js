const express = require('express')
const cors = require('cors')
const items = require('./routes/itemsRoutes')
const users = require('./routes/userRoutes')
const winning = require('./routes/winningRouter')
const app = express()
const app=express()
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

