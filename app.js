const tvshow = require("./models/tvshow");

let express = require("express"),
  http = require("http"),
  //server = http.createServer(app),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");
mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

let router = express.Router();

router.get("/", async function (req, res) {
  const show = await tvshow.find({ title: 'joya' }).exec()
  res.send(show);
});

app.use(router);

app.listen(3000, function () {
  console.log("Node server running on http://localhost:3000");
});