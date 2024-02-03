const express = require("express");
const router = express.Router();

const { handelLogin, handelSignup } = require("../controllers/userController");
router.route("/").post(handelSignup);
router.post("/login", handelLogin);

module.exports = router;
