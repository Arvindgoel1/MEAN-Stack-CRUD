// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
//     if (!err)
//         console.log('MongoDB connection succeeded.');
//     else
//         console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
// });

// module.exports = mongoose;
const mongoose = require('mongoose')
//require('dotenv').config()

const connectionUrl = "mongodb+srv://arvind123:arvind123@devconnector.tcwxd.mongodb.net/<dbname>?retryWrites=true&w=majority"

mongoose.connect(connectionUrl, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
})

module.exports = mongoose