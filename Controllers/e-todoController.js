const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const mongodb = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
// MongoClient.connect("mongodb://localhost:27017/samplesite",function (err, db) {
//   console.log('Conncted to database');
//      if(err) throw err;
//      //Write databse Insert/Update/Query code here..
// });

// create schema






//
// //
// var MongoClient = require('mongodb').MongoClient;
//
// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
//   if (err) throw err
//     console.log('In Database now')
//     db.collection('Persons', function (err, collection) {
//
//         collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
//       collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
//         collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
//
//
//         console.log('added things to database with mongodb driver')
//         db.collection('Persons').count(function (err, count) {
//             if (err) throw err;
//
//             console.log('Total Rows: ' + count);
//         });
//     });
//
// });
// // //
//
// var MongoClient = require('mongodb').MongoClient;
//
// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
//
//     db.collection('Persons', function (err, collection) {
//
//          collection.find().toArray(function(err, items) {
//             if(err) throw err;
//             var mydbdata = (items)
//             console.log(mydbdata, 'inside function');
//         });
//
//     });
//
// });
// // //


// console.log(mydbdata, 'out side function');


var todoSchema = new mongoose.Schema({
  item:String
});



var Todo = mongoose.model('Todo',todoSchema);

var itemone = Todo({item: 'buy flowers'}).save(function (err) {
  if (err) throw err;
  console.log('item saved');
});

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {

app.get('/todo', function (req,res) {
//   //
//   MongoClient.connect("mongodb://localhost:27017/samplesite",function (err, db) {
//     console.log('Conncted to database');
//        if(err) throw err;
//       //
//        Todo.find({}, function (err, data) {
//          if (err) throw err ;
//            res.render('todo', {todos:data});
//          });
//        //Write databse Insert/Update/Query code here..
//   });
//   //
//
// // res.writeHead(200, {"Content-type":"text/plain"});
// // res.end("yes , the database maybe the issue here");

  res.render('todo', {todos:data});
});

app.post('/todo', urlencodedParser,function (req,res) {
  // var newTodo = Todo(req.body).save(function (err, data) {
  //   if (err) throw err;
  //   res.json(data);
  // })
data.push(req.body)
res.json(data);
});

app.delete('/todo/:item', function (req,res) {
  Todo.find({item: re.params.item.replace(/\-/g,/*THIS COULD BE (req.body) */ " ")}).remove(function (err,data) {
    if (err) throw err;
    res.json(data);
  });

  Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function (err,data){
    if(err) throw err;
    res.json(data)
  });
  // data = data.filter(function (todo) {
  //   return todo.item.replace(/ /g, '-') !== req.params.item;
  // });
  // res.json(data);
});

};
