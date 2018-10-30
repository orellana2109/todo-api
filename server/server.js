const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

// local imports with ES6 destructering
var {mongoose} = require('./db/mongoose');
var {
    Todo
} = require('./models/todo');
// var {user} = require('./models/users');

var app = express();
var port = process.env.PORT || 3000;

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
        res.send({
            todos
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();

    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({
            todo
        });
    }).catch((e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    // first validate the id
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    // next find the id and remove it
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

// update a task route
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']); //user passed to us the text and completed to update
                                                        // we set it to a variable
    // first validate the id
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo){
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(404).send();
    });

});

//set up a port
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {
    app
};