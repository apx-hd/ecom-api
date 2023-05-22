const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

//Initialize router object
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:productID", getSingleProduct);
router.post("/", createProduct);
router.put("/:productID", replaceProduct);
router.patch("/:productID", updateProduct);
router.delete("/:productID", deleteProduct);

module.exports = router;
