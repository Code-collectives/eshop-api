import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import advertRouter from './routes/advert.js';
import userRouter from './routes/user.js';




// Connect to MongoDB
await mongoose.connect(process.env.MONGO_URI);



//Create an express app
const app = express();



// Middlewares
app.use(express.json());
app.use(cors());



// Routes
app.use(advertRouter);
app.use(userRouter)

// Start the server
app.listen(3009, () => {
  console.log('Server running on port 3009');
});
