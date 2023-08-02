const express = require('express');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/gameRoutes.js');
const cors = require('cors');
//const gameController = require('./controllers/gameController.js');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/mydatabase'; // replace with your MongoDB URI
app.use(cors());

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start listening for requests after the MongoDB connection is successful
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.json());

// Use the gameRoutes for all requests to /games
app.use('/games', gameRoutes);
