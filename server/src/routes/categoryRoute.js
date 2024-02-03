const express = require("express");
const {
  handelNewCategory,
  handelGetCategory,
} = require("../controllers/categoryController");
const router = express.Router();

//tem imp

router.post("/", handelNewCategory);
router.get("/", handelGetCategory);

module.exports = router;
