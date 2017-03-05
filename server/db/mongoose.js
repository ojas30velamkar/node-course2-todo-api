const mongoose = require('mongoose');

//mongoose configuration starts
mongoose.Promise = global.Promise;

var db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://todo-app-user:todo-app-user@ds119020.mlab.com:19020/todo-app-api'
};
//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect(process.env.PORT ? db.mlab : db.localhost);

module.exports = {mongoose};
