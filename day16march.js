const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("views", "./view");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index", {});
});

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

app.get("/students", function(req, res) {
  res.send(studentsList);
});

app.post("/students", function(req, res) {
  let student = {
    id: getNewId(),
    name: req.body.name,
    age: req.body.age,
    point: req.body.point,
    discription: req.body.dis
  };

  studentsList.push(student);

  res.send(student);
});

app.delete("/students/:id", function(req, res) {
  let whodel = studentsList.find(function(student) {
    return student.id == req.params.id;
  });
  studentsList = studentsList.filter(function(student) {
    return student.id != req.params.id;
  });

  res.send(whodel);
});

app.put("/students/:id", function(req, res) {
  studentsList = studentsList.map(function(student) {
    if (student.id == req.params.id) {
      return {
        id: req.params.id,
        name: req.body.name,
        age: req.body.age,
        picture: req.body.picture,
        point: req.body.point,
        discription: req.body.dis
      };
    } else {
      return student;
    }
  });
});

app.listen(8000, () => {
  console.log("Server is running on POrt 8000");
});

function getNewId() {
  return findMaxId() + 1;
}

function findMaxId() {
  let max = 0;
  for (let student of studentsList) {
    if (student.id > max) {
      max = student.id;
    }
  }
  return max;
}
