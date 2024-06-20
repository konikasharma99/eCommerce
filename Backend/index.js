const express = require("express");
require("./database/config");
const cors = require("cors");
const user = require("./database/Schemas/User");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, resp) => {
  const userData = new user(req.body);
  const result = await userData.save();
  resp.send(result);
});

app.get("/", async (req, resp) => {
  const result = await user.find();
  resp.send(result);
});

app.listen(5000);
