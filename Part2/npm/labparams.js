const express = require('express');
const app = express();

const catRoute = require('./routes/catRoute');

const dogRoute =require('./routes/dogRoute');

const userRoute = require('./routes/userRoute');

app.use('/user', userRoute);

app.use('/cat', catRoute);

app.use('/dog',dogRoute);


app.get('/add/:a/:mode/:b',function(req, res){
    let one = Number(req.params.a);
    let two = Number(req.params.b);
    let answer;
    if (req.params.mode === "plus"){
        answer = one + two;
    } else if(req.params.mode === "mul"){
        answer = one * two;
    }

    res.send(String(answer));

        
})

app.listen(8000, function(){
    console.log("server is running on port 8000")
});