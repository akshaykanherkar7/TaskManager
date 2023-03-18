const jwt = require("jsonwebtoken");
require("dotenv").config();

const Authentication = async (req, res, next) => {
  const user_token = req.headers.authorization.split(" ")[1];
  if (!user_token) {
    return res.status(403).send({ message: "Authentication required" });
  }

  await jwt.verify(user_token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(err).send({ message: "Authentication faild" });
    }
    req.body.userId = decoded.userId;
    next();
  });
};

module.exports = Authentication;
