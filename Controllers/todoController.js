const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb://localhost/myapp');

// var data = [{item: 'get milk'}, {item:'walk dog'},{item:'kick some coding ass'}];

// create schema

var todoShema = new mongoose.Schema({
  item:String
});

var Todo = mongoose.model('Todo',todoShema);

// var itemone = Todo({item: 'buy flowers'}).save(function (err) {
//   if (err) throw err;
//   console.log('item saved')
// })

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {

app.get('/todo', function (req,res) {
  // get data from moongo and pass it to view
  Todo.find({}, function (err,data) {
    if(err) throw err;
    res.render('todo', {todos:data});
  });
});

app.post('/todo', urlencodedParser,function (req,res) {
// get data from the view and add it to mongodb
var newTodo = Todo(req.body).save(function (err,data) {
  if (err) throw err;
  res.json(data);
  })
//   data.push(req.body)
// res.json(data);
});

app.delete('/todo/:item', function (req,res) {
  Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function (err,data){
    if(err) throw err;
    res.json(data);
  });
  // data = data.filter(function (todo) {
  //   return todo.item.replace(/ /g, '-') !== req.params.item;
  // });
  // res.json(data);
});

}
