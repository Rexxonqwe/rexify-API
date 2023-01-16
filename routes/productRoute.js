const express = require("express");

const productsController = require("../controller/productsController");

const router = express.Router();

router.route("/").get(productsController.getProducts);
router.route("/:id").get(productsController.getProduct);

module.exports = router;
