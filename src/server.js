const express = require('express');;
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(port, ()=>{
    console.log('Server is running on port 80');
});