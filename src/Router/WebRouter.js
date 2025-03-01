const express = require("express");
const router = express.Router();
const HomeController = require("../Controllers/HomeController");

router.get("/", HomeController.renderHomePage);

module.exports = router;
