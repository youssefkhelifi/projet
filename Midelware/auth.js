const jwt = require("jsonwebtoken");
const isAuth = async (req, res, next) => {
  try {
    const token = req.header("token");
    const verifyToken = await jwt.verify(token, "shhhhh");
    console.log(verifyToken)
    if (!verifyToken) {
      res.status(401).json({ msg: "you are not authorized" });
    } //else {
    //  const user = await User.findById(verifyToken.id);
      //console.log("test",user)
    //req.user = user;
      //next();
    //}
  } catch (error) {
    res.status(400).json({ msg: "sssssssssssssssss" });
  }
};
module.exports = isAuth;
