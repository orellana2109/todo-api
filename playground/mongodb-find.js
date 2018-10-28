const {MongoClient, ObjectId} = require('mongodb'); // ObjectId lets us create id's on the fly


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client)=> {  // useNewUrlParser gets rid of a warning
    if (err){
        return console.log('Unable to connect to MongoDB server') // return statement prevents the rest of the code from running since
    }                                                             // I only used an if statement
        console.log('Connected to MongoDB server')
        const db = client.db('TodoApp')

        // basic query 
        // db.collection('Todos').find({completed: false}).toArray().then((docs) => {  // .find().toArray() grabs all the documents in the Collection
        //     console.log('Todos');                                 // .find().toArray().then returns a promise (docs)
        //     console.log(JSON.stringify(docs, undefined, 2));
        // }, (err) => {
        //     console.log('Unable to fetch todos', err);
        // });

        db.collection('Todos').find().count().then((count) => {
            console.log(`Todos count: ${count}`);
        }, (err) => {
            console.log('Unable to fetch todos', err);
        });

        //db.close();
        });
