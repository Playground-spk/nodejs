const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let studentsList = [
  {
    id: 1,
    picture: "🌽",
    name: "sonter",
    age: 18,
    point: 75,
    discription:
      "I'm sonter from computer engineering A university. I'm 18 years old."
  },
  {
    id: 2,
    picture: "🥑",
    name: "nat",
    age: 19,
    point: 78,
    discription:
      "I'm nat from computer engineering B university. I'm 19 years old."
  },
  {
    id: 3,
    picture: "🥦",
    name: "tle",
    age: 22,
    point: 97,
    discription:
      "I'm tle from computer engineering C university. I'm 22 years old."
  }
];

app.get("/", function(req, res) {
  res.render("index", { studentsList });
});

app.get("/student/:id", function(req, res) {
  let id = Number(req.params.id);
  let targetStudent = studentsList.find(function(item) {
    return item.id == id;
  });
  res.render("student", { targetStudent });
});

app.listen(8500, function(req, res) {
  console.log("LabEjs is running on 8500");
});
