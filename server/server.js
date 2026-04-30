const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const jobRoutes = require('./routes/jobRoutes');

dotenv.config();

const app = express();

// --- MIDDLEWARES ---
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: false,
}));
app.use(cors({
  origin: 'http://localhost:5173', // Vite Frontend
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));

// --- MONGODB CONNECTION ---
const dbURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/careerDB';

mongoose.connect(dbURI)
  .then(() => console.log(`✅ MongoDB Connected`))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// --- ROUTES ---
app.use('/api/jobs', jobRoutes);

// Health Check
app.get('/', (req, res) => res.send("🚀 API is running modularly!"));

// --- GLOBAL ERROR HANDLER ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});