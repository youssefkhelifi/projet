const User = require("../Models/User");
let bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const RegisterUser = async (req, res) => {
  const user = req.body;

  try {
    const foundUser = await User.findOne({ email: user.email });
    if (foundUser) {
      res.status(401).json({ msg: "user already exist" });
    }
    const hashedPasword = await bcrypt.hash(user.password, 10);
    const newUser = new User({
      userName: user.userName,
      email: user.email,
      password: hashedPasword,
    });
    newUser.save();

    const token = jwt.sign(
      {
        username: newUser.username,
        email: newUser.email,
        id: newUser._id,
      },
      "shhhhh"
    );

    res.status(200).json({ newUser, token });
  } catch (error) {
    res.status(400).json({ msg: "server error" });
  }
};
const LoginUser = async (req, res) => {
  const user = req.body;
  try {
    const foundUser = await User.findOne({ email: user.email });
    if (foundUser) {
      const result = await bcrypt.compare(user.password, foundUser.password);
      if (result === true) {
        const token = jwt.sign(
          {
            email: foundUser.email,
            id: foundUser._id,
          },
          "shhhhh"
        );

        res.status(200).json({foundUser, token});
      }
      if (result === false) {
        res.status(402).json({ msg: "wrong password" });
      }
    }
    res.status(401).json({ msg: "you need to register before" });
  } catch (error) {
    res.status(400).json({ msg: "server error" });
  }
};
module.exports = { RegisterUser, LoginUser };
