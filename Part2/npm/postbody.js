const express = require("express");
const app = express();

const catRoute = require("./routes/catRoute");

const dogRoute = require("./routes/dogRoute");

const userRoute = require("./routes/userRoute");

const bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/user", userRoute);

app.use("/cat", catRoute);

app.use("/dog", dogRoute);

app.use("/user", userRoute);

//- - - - -  -- -  - - - - - --  - - - --

app.post("/add", function(req, res) {
  let answer;
  let one = Number(req.body.a);
  let two = Number(req.body.b);
  if (req.body.mode === "plus") {
    answer = one + two;
  } else if (req.body.mode === "mul") {
    answer = one * two;
  }

  res.send(String(answer));
});

app.listen(8500, function() {
  console.log("server is running on port 8500 postbody");
});
