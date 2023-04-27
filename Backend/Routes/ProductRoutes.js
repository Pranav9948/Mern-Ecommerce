const express = require("express");
const {
 getAllProduct, getProductDetails
} = require("../Controller/ProductControllers");

const router = express.Router();



router.route("/").get(getAllProduct);
router.route("/productsDetails/:id").get(getProductDetails);


module.exports = router;