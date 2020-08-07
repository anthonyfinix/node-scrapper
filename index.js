const path = require('path')
const express = require("express");
const app = express();

const api = require('./routes/api');

const logger = require('./utils/logger');
const logIncomingReq = require('./utils/logIncomingRequest');
const notFound = require("./utils/notfound");
const errorHandle = require("./utils/errorHandle");

const port = 5000;

app.use(express.json());
app.use(express.static('public'))
app.use(logIncomingReq);

// routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html'))
});
app.use("/api",api);

app.use(notFound);
app.use(errorHandle);


app.listen(process.env.PORT || port, () => {
  console.log(`Express Listening at port ${port}`);
});
