const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/user.controller");

const validate = require("../../validates/client/user.validate");

const authMiddleware = require("../../middlewares/client/auth.middleware");

router.get("/register", controller.register);

router.post(
  "/register",
  validate.registerPost,
  controller.registerPost
);

router.get("/logout", controller.logout);

router.get("/login", controller.login);

router.get(
  "/info", 
  authMiddleware.requireAuth,
  controller.info
);

router.post("/login", controller.loginPost);


module.exports = router;