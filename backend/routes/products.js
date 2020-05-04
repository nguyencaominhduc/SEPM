const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProduct,
  getPopularProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct
} = require("../controllers/products");

router
  .route("/")
  .get(getProducts)
  .post(createProduct);

router
  .route("/:id")
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct)

router
  .route("/search/:query")
  .get(searchProduct)

router
  .route("/pop")
  .get(getPopularProducts)

module.exports = router;
