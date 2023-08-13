const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams ={
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    
    try {
        mongoose.connect(process.env.DB, mongoose.connectionParams);
        console.log('Connected to DataBase');
    } catch (error) {
        console.log('Failed to Connected to DataBase');

    }
}