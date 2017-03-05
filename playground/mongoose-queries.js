const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58bb9564734d1cd722c622fa';

// if (!ObjectId.isValid(id)) {
//   return console.log('Id not valid', id);
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found', id);
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if (!user) {
    console.log('User not found for id', id);
  }
  console.log('User', user);
}).catch((e) => console.log(e));
