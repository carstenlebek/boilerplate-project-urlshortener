require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");

// Basic Configuration
const port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
	res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/shorturl", urlencodedParser, function (req, res) {
	console.log(req.body);
	const originalUrl = req.body.url;
});

app.listen(port, function () {
	console.log(`Listening on port ${port}`);
});
