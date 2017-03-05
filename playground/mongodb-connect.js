//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

//ObjectID
// var obj = new ObjectID();
// console.log(obj);

//Destructuring
var user = {name: 'ojas', age: 24};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert into Todos', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Ojas',
  //   age: 34,
  //   location: 'Melbourne, Australia'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert into Users', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //   //console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  db.close();
});
