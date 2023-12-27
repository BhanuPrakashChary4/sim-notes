// index.js
import express from 'express';
import connectDB from './config/db.js';
import notesRouter from './routes/notes.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/notes', notesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
