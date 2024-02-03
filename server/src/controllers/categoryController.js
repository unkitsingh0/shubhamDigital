const Category = require("../models/Category");

let handelNewCategory = async (req, res) => {
  try {
    let { category, description, status } = req.body;
    console.log(req.body);
    let createCategory = await Category.create({
      category,
      description,
      status,
    });
    res.status(201).json({ status: "Success", data: createCategory });
  } catch (error) {
    res.json({ status: "fail", message: error.message });
  }
};

let handelGetCategory = async (req, res) => {
  try {
    let getCategory = await Category.find({});
    res.status(200).json({ status: "Success", data: getCategory });
  } catch (error) {
    res.json({ status: "fail", message: error.message });
  }
};

module.exports = { handelNewCategory, handelGetCategory };
