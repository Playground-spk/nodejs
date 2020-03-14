const express = require("express");
const rounter = express.Router();

let userlist = [
  {
    id: 1,
    name: "Supakon",
    age: 18
  },
  {
    id: 2,
    name: "kalyssa",
    age: 17
  },
  {
    id: 3,
    name: "janeji",
    age: 20
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

rounter.delete("/del/:id", function(req, res) {
  //let checkId = req.params.id;
  whodelete = userlist.filter(function(item) {
    return item.id == Number(req.params.id);
  });
  userlist = userlist.filter(function(item) {
    return item.id !== Number(req.params.id);
  });

  res.send(whodelete);
});

rounter.put("/update/:id", function(req, res) {
  let change;
  userlist = userlist.map(user => {
    if (user.id == Number(req.params.id)) {
      return (change = {
        id: Number(user.id),
        name: String(req.body.name),
        age: String(req.body.age)
      });
    } else {
      return user;
    }
  });
  res.send(change);
});

function newId() {
  return userlist.length + 1;
}

module.exports = rounter;
