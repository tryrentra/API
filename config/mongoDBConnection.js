const mongoose = require('mongoose');

// Define the MongoDB connection string and options
const MDB = () => {
    const MONGODB_URI = 'mongodb+srv://rentra:hellorentra123@rentra.v8urfew.mongodb.net/Database?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(`MongoDB connection error: ${err}`));

}
// Export the Mongoose object for use in other files
// module.exports = mongoose;
module.exports = MDB