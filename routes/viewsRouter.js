const express = require("express");

const viewController = require("../controller/viewController");
const router = express();

router.route("/docs").get(viewController.docs);

module.exports = router;
