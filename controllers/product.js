// const productData = require("../data/products.json");
const ProductModel = require("../models/Product");

const getAllProducts = async (req, res) => {
  const { category, minprice } = req.query;
  try {
    //Apply filter here
    if (category && minprice) {
      const filteredData = await ProductModel.find({
        category,
        price: minprice,
      });
      res.json(filteredData);
    } else if (category) {
      const filteredData = await ProductModel.find({ category });
      res.json(filteredData);
    } else if (minprice) {
      const filteredData = await ProductModel.find({ price: minprice });
      res.json(filteredData);
    } else {
      const productData = await ProductModel.find();
      res.json(productData);
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const product = await ProductModel.findById(productID);
    res.json(product ? product : "Data Not Found");
  } catch (err) {
    console.log("Something went wrong");
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

const createProduct = (req, res) => {
  res.send("This api will create product in database");
};

const replaceProduct = (req, res) => {
  res.send("This api will replace product in database");
};

const updateProduct = (req, res) => {
  res.send("This api will update product in database");
};

const deleteProduct = (req, res) => {
  res.send("This api will delete product in database");
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
