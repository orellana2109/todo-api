// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); // ObjectId lets us create id's on the fly


//var obj = new ObjectId(); // creating a new instance of ObjectId() and save it to the variable
// console.log(obj);

// example of object destructering in ES6
//var user = {name: 'Eddie', age: '25'}; // created an object with two properties
//var {name} = user; // create a new variable based off of the object property above
//console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client)=> {  // useNewUrlParser gets rid of a warning
    if (err){
        return console.log('Unable to connect to MongoDB server') // return statement prevents the rest of the code from running since
    }                                                             // I only used an if statement
        console.log('Connected to MongoDB server')
        const db = client.db('TodoApp')  // new requirement in Mongo 3
    
        db.collection('Users').insertOne({
            name: 'Eddie O',
            age: '37',
            location: 'Kuwait'
        }, (err, result) => {
            if(err){
                return console.log('Unable to insert usert', err);
            }

            console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
        });
        // db.collection('Todos').insertOne({   // insert an object into the database
        //     text: 'Something to do',
        //     completed: false
        // }, (err, result) => {  //second callback function to check if it was successfully inserted
        //     if (err){
        //         return console.log('Unable to insert todo', err);
        //     }

        //     console.log(JSON.stringify(result.ops, undefined, 2)); // prints it out to the console in a nice format
        // });

        client.close();  

});