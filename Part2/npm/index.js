const express = require('express');

const app = express();

app.listen(8000, function(){
    console.log("server is running on port 8000")
})


app.get('/', function(req, res){
    res.send('hello,world')
})

app.get('/myname', function(req, res){
    res.send('supakon cheepsamut')
})