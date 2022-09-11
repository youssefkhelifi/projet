const express = require("express");
const router = express.Router();
const  Comment  = require("../Models/Comment");
const  auth  = require("../Midelware/auth");
const Product = require('../models/product');

router.post("/saveComment/:id", auth, (req, res) => {
  const ProductId=req.params.id
  const comment=req.body

  try {
    const findProduct = Product.findOne({ _id: ProductId });
    
  
  if(findProduct){
    const newComment = new Comment({
     
      writer: req.user,
      postId:findProduct._id,
      content:comment.content,


    });
    console.log(err),
     newComment.save();
  }
  else{
    res.status(400).json({ message: error.message });
  }
  } catch (error) {

    res.status(400).json({ message: error.message });
  }
});

router.post("/getComments", (req, res) => {
  Comment.find({ postId: req.body.movieId })
    .populate("writer")
    .exec((err, comments) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, comments });
    });
});

router.post("/deleteComment", (req, res) => {
  console.log(req.body);

  Comment.findByIdAndDelete(req.body.commentId, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, doc });
    console.log("DELETE removing ID: " + doc);
  });
});
module.exports = router;