const express = require("express");
require("./database/config");
const cors = require("cors");
const user = require("./database/Schemas/User");
const User = require("./database/Schemas/User");

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

app.get("/", async (req, resp) => {
  const result = await user.find();
  resp.send(result);
});

app.listen(5000);
