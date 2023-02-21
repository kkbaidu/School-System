
var express = require("express");

const app = express();

const port = process.env.port || 5000;

let mongoose = require("mongoose");
let dotenv = require("dotenv");
// dotenv.config();
app.use(express.json());

const controller = require("./src/controllers/student.controller");

const connect_db = async function(){
    mongoose.connect(process.env.URI,
        {
          useNewUrlParser: true
        }
      );
      const db = mongoose.connection;
      db.on("error", console.error.bind(console, "connection error: "));
      db.once("open", function () {
        console.log("Connected successfully");
      });
}


connect_db();
app.use(controller);

app.listen(port, async function(){
    try {
        console.log("server listening on Port "+ port);
    } catch (err){
        console.log(err);
    }
});


app.use(express.urlencoded({extended : true}));



app.get("/", (req, res) => {
    res.send("database is working")
});

module.exports = app;
