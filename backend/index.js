require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
connectDB();


app.use(cors({
    origin: 'https://revisit-1-b7rw.onrender.com', 
    credentials: true
  }));

  app.use(express.json());

app.use('/api/', require('./routes/authRoutes'));
app.use('/api/', require('./routes/categoryRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));