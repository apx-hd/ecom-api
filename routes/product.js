const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const checkAPIKey = require('../middlewares/auth')

//Initialize router object
const router = express.Router();

//Using a middleware checkAPIKey for /api/products route specifically
router.get("/", checkAPIKey, getAllProducts);
router.get("/:productID", getSingleProduct);

router.post("/", createProduct);
router.put("/:productID", replaceProduct);
router.patch("/:productID", updateProduct);
router.delete("/:productID", deleteProduct);

module.exports = router;
