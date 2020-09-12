const express = require("express");
const axios = require("axios");

const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.post("/demo", async (req, res) => {
  var responce = await axios
    .post("https://api.webinarjam.com/everwebinar/webinars", {
      api_key: "917c751f-d178-4960-ba44-04a105f1dd10",
    })
    .then((responce) => {
      return responce;
    })
    .catch((err) => {
      console.log("err", err);
    });
  console.log(":::>", JSON.stringify(responce.data));
  res.status(200).json({
    Data: req.body,
  });
});

app.listen(port, () => {
  console.log(`running at port ${port}`);
});
