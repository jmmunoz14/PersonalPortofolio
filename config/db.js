
let URI = "mongodb+srv://dbadmin:DAC1HbNR31v39G6F@cluster0.kdkux.mongodb.net/mydb?retryWrites=true&w=majority";
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
