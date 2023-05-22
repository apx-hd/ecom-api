const productData = require("../data/products.json");

const getAllProducts = (req, res) => {
  const { category, minprice } = req.query;
  //Apply filter here
  if (category && minprice) {
    const filteredData = productData.filter((element) => {
      return element.category === category && element.price >= minprice;
    });
    res.json(filteredData);
  } else if (category) {
    const filteredData = productData.filter((element) => {
      return element.category === category;
    });
    res.json(filteredData);
  } else if (minprice) {
    const filteredData = productData.filter((element) => {
      return element.price >= minprice;
    });
    res.json(filteredData);
  } else res.json(productData);
};

const getSingleProduct = (req, res) => {
  console.log(req.params);
  const { productID } = req.params;
  const product = productData.find(
    (product) => product.id === Number(productID)
  );
  res.json(product ? product : "Index Not Found");
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
