const express = require('express')
const mongoose =  require('mongoose')
const bodyParser = require('body-parser')

const main = express();
main.use(bodyParser.json())

// let dev_db_url = 'mongodb://surveydb:surveydb321@localhost:27017/surveydb';
// const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB, { useNewUrlParser: true });
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let dbCon ='mongodb://127.0.0.1:27017/Example'
const mongoDB = process.env.port || dbCon;
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection

// main.use('/api',require('./controller/productsroutes'))
// main.use('/api',require('./controller/userRoutes'))
const getFlat = require('./routes/flat.route')
const getTeleVision = require('./routes/tv.route')
const getUsers = require('./routes/user.route')
const getProduct = require('./routes/product.route')
main.use('/api',getProduct)
main.use('/api',getTeleVision)
main.use('/api',getUsers)
main.use('/api',getFlat)
main.listen(process.env.port||5000,()=>{
    console.log('Listening to request')
})
// main.get('/',(req,res)=>{
//     res.send({type:"New Example"})
//     console.log("Send me resquest")
// })