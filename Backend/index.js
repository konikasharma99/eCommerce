const app = require("express")();

app.get("/", (req, resp) => {
  resp.send("Project setup is done");
});

app.listen(5000);
