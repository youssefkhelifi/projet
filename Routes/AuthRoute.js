const express = require("express");
const router = express.Router();
const { RegisterUser, LoginUser } = require("../Controllers/AuthController");
const isAuth=require('../Midelware/auth')
router.post("/Register", RegisterUser);
router.post("/login", LoginUser);
router.get('/yep',isAuth,(req,res)=>{
    res.status(200).json({msh:'hello'})
})
module.exports = router;
