const jwt = require('jsonwebtoken');

const checkAPIKey = (req, res, next) => {
  const { APIKey } = req.query;
  if (APIKey) {
    if (APIKey === "ABC123") {
      next();
    } else {
      return res.status(400).json({ message: "Invalid API Key" });
    }
  } else {
    return res.status(400).json({ message: "Missing API Key" });
  }
};


const verifyTokenUserOrAdmin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    //Verify the token and extract the encrypted data
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(403).json("Token is invalid");
      }

      if (decoded.isAdmin || decoded.id === req.params.userID) {
        next();
      } else {
        res.status(403).json("You are not authorized!");
      }
    });
  } else {
    res.status(403).json("You are not authenticated!");
  }
};

const verifyTokenAdmin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    //Verify the token and extract the encrypted data
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(403).json("Token is invalid");
      }

      if (decoded.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not authorized!");
      }
    });
  } else {
    res.status(403).json("You are not authenticated!");
  }
};

module.exports = { checkAPIKey, verifyTokenUserOrAdmin, verifyTokenAdmin };
