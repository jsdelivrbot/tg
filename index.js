var express = require('express');
const todoController = require('./Controllers/todoController');

var app = express();


app.set('view engine', 'ejs');
// app.use(express.static('./public'));
app.use(express.static('/Users/mac/Desktop/beta-tg/App/'));



todoController(app);


app.listen(3000);
console.log('listening to port 3000 <<<')
