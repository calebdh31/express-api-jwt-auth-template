const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require("cors")
const mongoose = require('mongoose');
const logger = require('morgan');
const petRouter = require('./controllers/pets.js')

app.use(cors(
    {
        origin: "http://localhost:5173"
    }
))

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(logger('dev'));
app.use('/pets', petRouter)

// Routes go here

app.listen(3000, () => {
  console.log('The express app is ready!');
});
