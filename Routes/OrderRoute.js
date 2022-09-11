const express = require("express");
const router = express.Router();
const { addorder } = require("../Controllers/orderController");
const isAuth=require('../Midelware/auth')
router.post("/addOrder",isAuth, addorder);

module.exports = router;