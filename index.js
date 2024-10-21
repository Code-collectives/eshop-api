// app.mjs
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import advertRoutes from './routes/advert.js';

const app = express();

// Middleware
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use( authRoutes );
app.use( advertRoutes );

// Connect to MongoDB


// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
