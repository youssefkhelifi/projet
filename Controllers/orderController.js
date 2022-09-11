const User = require("../Models/User");
const Product = require('../models/product');
const Order = require("../Models/order");

const addorder= async (req, res) => {
    const idUser = req.user._id;
    const idProduct=req.params.id;
    try {
        const product =  Product.findOne({ _id:idProduct });
    if (product) {
        const neworder = new Order({
           
            user: req.user,
            price:product.price  ,
            address: req.body.address,
            name: req.body.name,
            Modepayment: req.body.Modepayment
             
          });
          await neworder.save();
          res.status(200).json(neworder);
    } else {
          res.send(null);
    }
    } catch (error) {
        res.status(500).send();
    }
    };