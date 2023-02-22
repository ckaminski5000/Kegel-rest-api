const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.route("/").post(userController.createUser);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
