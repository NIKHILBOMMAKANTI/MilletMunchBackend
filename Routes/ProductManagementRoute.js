const Express = require('express')
const route = Express.Router();
const {FetchProductsData,FetchProductById} = require('../Controllers/ProductManagement.js');


route.post("/fetchData",FetchProductsData);
route.get("/FetchProductById/:id",FetchProductById)

module.exports = route