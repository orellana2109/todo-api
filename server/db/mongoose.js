var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}); //set the connection

// export to use in the rest of the app
module.exports = {mongoose};
