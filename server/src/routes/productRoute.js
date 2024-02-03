const express = require("express");
const {
  handelNewProduct,
  handelGetProduct,
} = require("../controllers/productController");
const router = express.Router();

router.route("/").post(handelNewProduct).get(handelGetProduct);

module.exports = router;
