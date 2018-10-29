var mongoose = require('mongoose'); // import mongoose

// specifing a model that tells the DB what attributes we want to have
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }, 
    completedAt: {
        type: Number,
        default: null
    }
    
});

module.exports = {Todo}; // we have to export it as an object to use in other parts of the app