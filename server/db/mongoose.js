const mongoose = require('mongoose');

//mongoose configuration starts
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
