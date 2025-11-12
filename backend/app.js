const dotenv = require('dotenv');
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require("./Database/dbConnection");
const port  = process.env.PORT || 3000 ;


dotenv.config();


connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.get('/',(req,res)=>{
    rws.send("app is running");
})

app.listen(port,()=>{
    console.log(`surveris running on ${port}`);
})