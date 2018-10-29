var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}); //set the connection

module.exports = {mongoose};
