const express = require("express");
require("./database/config");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const user = require("./database/Schemas/User");
const User = require("./database/Schemas/User");
const Product = require("./database/Schemas/Product");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, resp) => {
  let userSignUp = new User(req.body);
  let result = await userSignUp.save();
  result = result.toObject();
  delete result.password;
  console.log(result);
  jwt.sign({ result }, jwtKey, (err, token) => {
    if (err) {
      resp.send("Wrong token");
    } else {
      resp.send({ result, authToken: token });
    }
  });
});
const jwtKey = "12%467&*^&*HJKiuyjhn";
app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let userEntered = await user.findOne(req.body).select("-password");
    if (userEntered) {
      jwt.sign({ userEntered }, jwtKey, (err, token) => {
        if (err) {
          resp.send("Wrong token");
        } else {
          resp.send({ userEntered, authToken: token });
        }
      });
    } else {
      resp.send({ result: "No user Found" });
    }
  } else {
    resp.send({ result: "No user Found" });
  }
});
app.post("/add-product", verifyToken, async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});
app.get("/products", verifyToken, async (req, resp) => {
  let result = await Product.find();
  if (result.length > 0) {
    resp.send(result);
  } else {
    resp.send({ result: "No products found" });
  }
});
app.delete("/products/:id", verifyToken, async (req, resp) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});
app.get("/products/:id", verifyToken, async (req, resp) => {
  let result = await Product.findOne({ _id: req.params.id });
  resp.send(result);
});
app.put("/products/:id", verifyToken, async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});
app.get("/search/:key", verifyToken, async (req, resp) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
});
function verifyToken(req, resp, next) {
  const token = req.headers["authorization"];
  if (token) {
    jwt.verify(token, jwtKey, (err, success) => {
      if (err) {
        resp.status(403).send({ result: "Wrong token" });
      } else {
        next();
      }
    });
  } else {
    resp.status(401).send({ result: "Please add token" });
  }
}

app.listen(5000);
