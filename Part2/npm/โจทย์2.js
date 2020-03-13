const express = require('express');
const app = express();

const catRoute = require('./routes/catRoute');

const dogRoute =require('./routes/dogRoute');

const userRoute = require('./routes/userRoute');

app.use('/user', userRoute);

app.use('/cat', catRoute);

app.use('/dog',dogRoute);

app.get('/query',function(req,res){
    console.log(req.query.age);
    console.log(req.query.name);
    res.send(req.query);

});

app.get('/add',function(req, res){
    let one = Number(req.query.a);
    let two = Number(req.query.b);
    let answer;
    if(req.query.mode === "plus"){
        answer = one+two;
    }else if(req.query.mode === "mul"){
        answer = one*two;
    }else if(req.query.mode === "devide"){
    }
    res.send(String(answer))
    
})



app.listen(3000, function(){
    console.log("server is running on port 3000")
});



