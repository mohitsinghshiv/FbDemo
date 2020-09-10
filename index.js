const express = require("express");

const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.post("/demo", (req, res) => {
  res.status(200).json({
    Data: req.body,
  });
});

app.listen(port, () => {
  console.log(`running at port ${port}`);
});
