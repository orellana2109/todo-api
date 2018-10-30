var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp' || process.env.MONGODB_URI, {useNewUrlParser: true}); //set the connection

// export to use in the rest of the app
module.exports = {mongoose};
