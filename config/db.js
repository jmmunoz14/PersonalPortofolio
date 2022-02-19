let URI = process.env.MONGODB_URI
let mongoose = require('mongoose');

module.exports = function () {

    mongoose.connect(URI);

    let mongoDB = mongoose.connection;
    mongoDB.on('error', console.error.bind(console, 'Connection Error: '))
    mongoDB.once('open', () => {
        console.log('Connected to MongoDB...');
    });

    return mongoDB
}

