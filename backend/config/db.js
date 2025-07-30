const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = 'mongodb://localhost:27017/statup';

        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1); // Stop the app if DB fails
    }
};

module.exports = connectDB;
