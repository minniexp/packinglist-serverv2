const express = require("express");
const morgan = require("morgan")
const helmet = require("helmet")
const bodyParser = require("body-parser")
const connectDB = require("./db");
const { connect } = require("mongoose");

const postPackingListRoutes = require("./routes/api/post");
const getPackingListRoutes = require("./routes/api/get");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());



app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, DELETE');
    next();
});

app.use(morgan("dev"));
app.use(helmet());
connectDB();


app.get("/", (req, res) => {
    res.send("finalcheck server running");
  });

app.use("/api/v1/finalcheck", postPackingListRoutes);
app.use("/api/v1/finalcheck", getPackingListRoutes);


app.listen(port, () => console.log(`API server listening on port ${port}`));

