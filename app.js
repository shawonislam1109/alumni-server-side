//Basic Library Import
const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");
require("dotenv").config();

//Security Middleware Library Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

//Database Library Import
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
//security middleware implement
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(mongoSanitize());

// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}))

// Body Parser Implement
app.use(bodyParser.json());

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// client use
app.use(express.static("client/build"));

// routes Map
readdirSync("./src/routes").map((r) => app.use(require(`./src/routes/${r}`)));

//Browser check res success
app.get("/", (req, res) => {
  res.json({
    status: "server running successfully",
  });
});

// connect mongoose
const port = process.env.PORT || 8000;
mongoose
  .connect(
    "mongodb+srv://shunnoIT_project1:cN8qroPsviiskJcy@cluster0.5rnuhbi.mongodb.net/uy"
  )
  .then(() => {
    app.listen(9898, () => {
      console.log(`Server Running on port 9898`);
    });
  })
  .catch((err) => console.log(err));

// Server Not found response
// app.get('*',function (req,res) {
//     res.sendFile(path.resolve(__dirname,'client','build','index.html'))
// })
