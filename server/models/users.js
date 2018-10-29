var mongoose = require('mongoose');

// this creates the schema
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

// creating the new user
var user = new User({
    email: 'orellana2109@gmail.com'
});

// saving the user
user.save().then((doc) => {
    console.log('user saved', doc);
}, (e) => {
    console.log('Unable to save user', e);
});


module.exports = {User};