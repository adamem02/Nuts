const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user-routes');
const thoughtRoutes = require('./routes/thought-routes');
const reactionRoutes = require('./routes/reaction-routes');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/reactions', reactionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
