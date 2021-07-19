const express = require("express");
const mongoose = require('mongoose');
const http = require("http");
const api = require("./routes/file-router");

const app = express();
var port  = 3000;

app.use("/api", api);
  
const server = http.createServer(app);
server.listen(port, () => {
    console.log('Server is running on port ' + port);
});

mongoose.connect('mongodb://localhost:27017/uploaderDB',{ 
        useNewUrlParser: true,
        useUnifiedTopology: true
     });

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connected');
    })
    .on('error', (err) => {
        console.log(`Connectior error: ${err.message}`);
    });