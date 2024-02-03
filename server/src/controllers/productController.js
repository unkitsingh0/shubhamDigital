let handelNewProduct = async (req, res) => {
  let { category, productName, packSize, mrp, status } = req.body;
  try {
    let createCategory = await Product.create({
      category,
      productName,
      packSize,
      mrp,
      status,
    });
    res.status(201).json({ status: "Success", data: createCategory });
  } catch (error) {
    res.status(400).json({ status: "Fail", data: error.message });
  }
};

let handelGetProduct = async (req, res) => {
  try {
    let getProducts = await Product.find({});
    res.status(200).json({ status: "Success", data: getProducts });
  } catch (error) {
    res.status(400).json({ status: "Fail", data: error.message });
  }
};

module.exports = { handelNewProduct, handelGetProduct };
