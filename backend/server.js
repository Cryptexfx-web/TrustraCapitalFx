require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/auth', require('./routes/authRoutes'));
app.use('/admin', require('./routes/adminRoutes'));
app.use('/plans', require('./routes/planRoutes'));
app.use('/invest', require('./routes/investmentRoutes'));
app.use('/withdraw', require('./routes/withdrawalRoutes'));

app.listen(5000, () => console.log('Server running on port 5000'));
