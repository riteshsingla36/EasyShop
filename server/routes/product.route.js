const express = require('express');
const router = express.Router();
const productController = require("../controllers/product.controller");

router.get("/", productController.getProducts);

router.get("/:id", productController.getProduct);

router.post("/create", productController.createProduct);

router.patch("/update/:id", productController.updateProduct);

router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;