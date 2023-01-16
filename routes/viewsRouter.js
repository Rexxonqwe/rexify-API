const express = require("express");

const viewController = require("../controller/viewController");
const router = express();

router.route("/").get(viewController.docs);

module.exports = router;
