const express = require("express");
const router = express.Router();

const controller = require('../../controllers/client/home.controller');

router.get("/", controller.index);

router.get("/detail/:slug", controller.detail);

router.get('/watch/:slug', controller.watch);

router.get('/buy/:slug', controller.buy);

module.exports = router;