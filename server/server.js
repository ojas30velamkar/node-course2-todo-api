var express = require('express');
var bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    console.log('Unale to save todo', e);
    res.status(400).send(e);
  });

});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) => {
  if (!ObjectId.isValid(id)) {
    res.status(404).send();
  }
  var id = req.params.id;
  Todo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404).send();
    }
    res.send({todo});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};

// var newTodo = new Todo({
//   text: "Cook dinner"
// })
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unale to save');
// });

// var anotherTodo = new Todo({
//   text: "Learn mongo - mongoose",
//   completed: false,
//   completedAt: 9999
// });
//
// anotherTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unale to save', e);
// });

// var firstUser = new User({
//   email: "firstUser@abc.com"
// });
//
// firstUser.save().then((doc) => {
//   console.log('Saved User', doc);
// }, (e) => {
//   console.log('Unable to save user', e);
// });
