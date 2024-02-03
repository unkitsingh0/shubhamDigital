const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  category: { type: String, required: true },
  productName: { type: String, required: true },
  packSize: { type: String, required: true },
  mrp: { type: String, required: true },
  status: { type: String, required: true },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
