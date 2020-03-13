const express = require("express");
const rounter = express.Router();

const userlist = [
  {
    id: "1",
    name: "Supakon",
    age: "18"
  },
  {
    id: "2",
    name: "kalyssa",
    age: "17"
  },
  {
    id: "3",
    name: "janeji",
    age: "20"
  }
];

rounter.get("/", function(req, res) {
  res.send(userlist);
});

rounter.post("/add", function(req, res) {
  const newUser = {
    id: newId(),
    name: req.body.name,
    age: req.body.age
  };
  userlist.push(newUser);
  res.send(newUser);
});

rounter.delete("/del", function(req, res) {
  let checkId = req.query.id;
  let userdelete = userlist.filter(function(item) {
    return item.id == req.query.id;
  });
  console.log(userdelete);
  res.send(userdelete);
});

function newId() {
  return userlist.length + 1;
}

module.exports = rounter;
