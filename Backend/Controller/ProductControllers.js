const products = require("../Data/data");

const getAllProduct = (req, res) => {
  try {
    res
      .status(200)
      .send({
        message: "Product fetched successfully",
        success: true,
        products,
      });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Product fetching failed", success: false, err });
  }
};

const getProductDetails = async(req, res) => {
  try {
    const id = req.params.id;
 

    const productDetails = await products.find(product => product.id==id)
       

    res
      .status(200)
      .send({
        message: "Product  details fetched successfully",
        success: true,
        productDetails,
      });
  } catch (err) {
    console.log("12", err);

    res
      .status(500)
      .send({ message: "Product details fetching failed", success: false, err });
  }
};

module.exports = { getAllProduct, getProductDetails };
