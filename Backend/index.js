const express = require("express");
require("./database/config");
const cors = require("cors");
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
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let userEntered = await user.findOne(req.body).select("-password");
    if (userEntered) {
      resp.send(userEntered);
    } else {
      resp.send({ result: "No user Found" });
    }
  } else {
    resp.send({ result: "No user Found" });
  }
});

app.post("/add-product", async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});
app.get("/products", async (req, resp) => {
  let result = await Product.find();
  if (result.length > 0) {
    resp.send(result);
  } else {
    resp.send({ result: "No products found" });
  }
});
app.delete("/products/:id", async (req, resp) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});
app.get("/products/:id", async (req, resp) => {
  let result = await Product.findOne({ _id: req.params.id });
  resp.send(result);
});
app.put("/products/:id", async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});

app.listen(5000);
