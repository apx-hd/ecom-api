const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const { checkAPIKey, verifyTokenAdmin } = require('../middlewares/auth')

//Initialize router object
const router = express.Router();

//Using a middleware checkAPIKey for /api/products route specifically
router.get("/", checkAPIKey, getAllProducts);
router.get("/:productID", getSingleProduct);

router.post("/", verifyTokenAdmin, createProduct);
router.put("/:productID", verifyTokenAdmin, replaceProduct);
router.patch("/:productID", verifyTokenAdmin, updateProduct);
router.delete("/:productID", verifyTokenAdmin, deleteProduct);

module.exports = router;
