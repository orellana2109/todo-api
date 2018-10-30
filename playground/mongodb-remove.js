const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5bd82617163f8594c3fabece').then((todo) => {
    console.log(todo);
})