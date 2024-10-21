require('dotenv').config();
const express = require('express');
const { connectDB } = require('./config/database');

const app = express();
app.use(express.json());


connectDB();


const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/categoryRoutes');
const serviceRoutes = require('./routes/serviceRoutes');


app.use('/auth', authRoutes);
app.use(categoryRoutes);
app.use(serviceRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
