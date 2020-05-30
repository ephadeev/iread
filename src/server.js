const express = require('express');
const mongoose = require('mongoose');

const server = express();

server.use('/api/auth', require('./routes/authRoutes'));

const PORT = 5000;

const start = async () => {
    try{
        await mongoose.connect('mongodb+srv://itrex:gunsguns@cluster0-d5ykh.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        server.listen(PORT, () => console.log(`server has been started on port ${PORT}...`));
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
};

start();

