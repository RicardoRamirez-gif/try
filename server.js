const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routers/userRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB data base
const URL = 'mongodb://localhost:27017/MongooseDB_lab';
mongoose.connect(URL, {})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Routes
app.use('/api/users', userRoutes);
