const {
    MongoClient,
    ObjectId
} = require('mongodb'); // ObjectId lets us create id's on the fly


MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => { // useNewUrlParser gets rid of a warning
    if (err) {
        return console.log('Unable to connect to MongoDB server') // return statement prevents the rest of the code from running since
    } // I only used an if statement
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId('5bd5b9fb76cd1427045f23e0')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});