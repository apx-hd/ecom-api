const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

const loginUser = async (req, res) => {
  try {
    //Check if email is correct
    const user = await UserModel.findOne({ email: req.body.email });
    //If provided email is present in database
    if (user) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      //If entered password is also correct
      if (isValidPassword) {
        const accessToken = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        const { password, ...rest } = user._doc;
        res.cookie("jwt", accessToken);
        res.json({ ...rest, accessToken });
      } else {
        res.status(401).json("Password is incorrect");
      }
    } else {
      res.status(401).json("Email is incorrect");
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

module.exports = { registerUser, loginUser };
