// app.mjs
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';



// Connect to MongoDB
await mongoose.connect(process.env.MONGO_URI);


//Create an express app
const app = express();



// Middleware
app.use(express.json());
app.use(cors());



// Routes



// Start the server
app.listen(3009, () => {
  console.log('Server running on port 3009');
});
