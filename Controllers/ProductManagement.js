const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const data = require("../Data/Data.json");
const FetchProductsData = async (req, res) => {
  try {
    // const url = 'https://product-search-api.p.rapidapi.com/api/google/shopping';
    // const encodedParams = new URLSearchParams();
    // encodedParams.set('query','millet cookies')
    // const options = {
    //   headers:{
    //     'x-rapidapi-key': process.env.RAPID_API_KEY,
    //     'x-rapidapi-host': 'product-search-api.p.rapidapi.com',
    //     'Content-Type': 'application/x-www-form-urlencoded',

    //   }
    // }
    // const response = await axios.post(url,encodedParams,options);
    // if(!response.data || response.length == 0){
    //   return res.status(500).json({
    //     message:"Something Went Wrong,Unable to Fetch the Data",
    //   })
    // }
    if (!data || data.length === 0) {
      return res.status(500).json({
        message: "Something Went Wrong,Unable to Fetch the Data",
      });
    }
    return res.status(200).json({
      message: "Data SuccessFully Fetched",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const FetchProductById = (req,res) => {
  try {
    const productid = req.params.id
    if (!data || data.length === 0) {
      return res.status(500).json({
        message: "Something Went Wrong,Unable to Fetch the Data",
      });
    }
    if(!productid){
      return res.status(404).json({
        message:"Product id is Required"
      })
    }
    const Data = data.products
    //console.log(Data)
    console.log(productid);
    const ProductData = Data.find((Product)=>Product.position == productid)
    console.log(ProductData);
    if(!ProductData){
      return res.status(400).json({
        message:"No Product Found"
      })
    }
    return res.status(200).json({
      data:ProductData
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = { FetchProductsData,FetchProductById };
