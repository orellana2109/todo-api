var express = require('express');
var bodyParser = require('body-parser');

// local imports with ES6 destructering
var {
    mongoose
} = require('./db/mongoose');
var {
    Todo
} = require('./models/todo');
// var {user} = require('./models/users');

var app = express();

//middleware 
app.use(bodyParser.json());

//routes
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
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

//set up a port
app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};