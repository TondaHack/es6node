import express from 'express';

var app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(80, ()=>{
    console.log('Server is running on port 80');
});