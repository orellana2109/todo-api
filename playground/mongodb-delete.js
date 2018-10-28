const {MongoClient, ObjectId} = require('mongodb'); // ObjectId lets us create id's on the fly


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client)=> {  // useNewUrlParser gets rid of a warning
    if (err){
        return console.log('Unable to connect to MongoDB server') // return statement prevents the rest of the code from running since
    }                                                             // I only used an if statement
        console.log('Connected to MongoDB server')
        const db = client.db('TodoApp')

        //delete many
        // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        //     console.log(result);
        // });

        //delete one
        // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        //     console.log(result);
        // });

        //findONeandDelete
        db.collection('Todos').findOneAndDelete({completed: 'false'}).then((result) => {
            console.log(result);
        });

        //db.close();
        });
