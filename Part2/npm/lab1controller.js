const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.listen(8000, function() {
  console.log("lab1 controller is running on port 8000");
});

app.set("views", "./views");
app.set("view engine", "ejs");
// b
app.get("/staticJSON", function(req, res) {
  let json = {
    text: "helloworld"
  };
  res.send(json);
});
//c
app.get("/echo", function(req, res) {
  res.send(req.query.text);
});

//d
app.get("/plus", function(req, res) {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  res.send(String(a + b));
});

//e

app.get("/plusbyJSON", function(req, res) {
  let kobject = JSON.parse(req.query.jsontext);
  res.send(String(kobject.a + kobject.b));
});

//f
app.get("/plusbyparams/:a/:b", function(req, res) {
  let a = Number(req.params.a);
  let b = Number(req.params.b);
  res.send(String(a + b));
});

//gcheckEvenNumber
// app.get("/checkEvenNumber/:a", function(req, res) {
//   res.send(String(req.params.a % 2 == 0));
// });

//1,2

app.get("/checkEvenNumber/:a", function(req, res) {
  if (req.params.a % 2 === 0) {
    res.status(200).send("The Success");
  } else {
    res.status(400).send("The bad input");
  }
});

let jasonarr = [];
//3
app.post("/number/:a", function(req, res) {
  let number = Number(req.params.a);
  jasonarr.push(number);
  res.status(200).send(jasonarr);
});

//10
app.put("/number/:a/:b", function(req, res) {
  jasonarr = jasonarr.map(function(item) {
    if (item == Num(req.params.a)) {
      return Number(req.params.b);
    } else {
      return item;
    }
  });
  res.status(200).send(jasonarr);
});
