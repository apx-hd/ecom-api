// const productData = require("../data/products.json");
const ProductModel = require("../models/Product");

const getAllProducts = async (req, res) => {
  const { category, minprice, page, pageSize } = req.query;
  try {
    //Apply filter here
    if (category && minprice) {
      const filteredData = await ProductModel.find({
        category,
        price: {$gte : minprice},
      });
      res.json(filteredData);
    } else if (category) {
      const filteredData = await ProductModel.find({ category });
      res.json(filteredData);
    } else if (minprice) {
      const filteredData = await ProductModel.find({ price: {$gte : minprice} });
      res.json(filteredData);
    } else {
      const productData = await ProductModel.find().limit(pageSize).skip((page - 1) * pageSize);
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

const createProduct = async (req, res) => {
  console.log(req.body)
  try {
    const product = await ProductModel.create(req.body)
    res.status(200).json(product);
  } catch (err) {
    console.log("Something went wrong");
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

const replaceProduct = async (req, res) => {
  const { productID } = req.params;
  try {
    const product = await ProductModel.findOneAndReplace({_id : productID}, req.body, {new:true})
    res.status(200).json(product);
  } catch (err) {
    console.log("Something went wrong");
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

const updateProduct = async (req, res) => {
  const { productID } = req.params;
  try {
    const product = await ProductModel.findByIdAndUpdate(productID, req.body, {new:true})
    res.status(200).json(product);
  } catch (err) {
    console.log("Something went wrong");
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

const deleteProduct = async (req, res) => {
  const { productID } = req.params;
  try {
    const product = await ProductModel.findByIdAndDelete(productID)
    res.status(200).json(product);
  } catch (err) {
    console.log("Something went wrong");
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
