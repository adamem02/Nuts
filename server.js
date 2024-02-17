const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const userRoutes = require('./routes/user-routes');
const thoughtRoutes = require('./routes/thought-routes');
const reactionRoutes = require('./routes/reaction-routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Mount routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/reactions', reactionRoutes);

// Additional configurations or middleware can be added here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

