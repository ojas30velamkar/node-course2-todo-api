const mongoose = require('mongoose');

//mongoose configuration starts
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://todo-app-user:todo-app-user@ds119020.mlab.com:19020/todo-app-api');

module.exports = {mongoose};
