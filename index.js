const Express = require('express');
const app = Express();
const dotenv = require('dotenv');
dotenv.config();
port = process.env.PORT;
const axios = require('axios');
const ProductManagement = require('./Routes/ProductManagementRoute.js');
const Cors = require('cors');
//Middlewares
app.use(Express.json());
app.use(Cors({
  origin: 'http://localhost:5174',
  credentials: true,
}))


//Routes
app.use("/products",ProductManagement)

app.listen(port,(err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("Server is Runing...")
    }
})