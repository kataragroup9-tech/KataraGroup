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

// Vercel deployment ke liye CORS ko flexible rakhein
app.use(cors({
  origin: true, // Sabhi origins allow karega ya aap apna domain dal sakte hain
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));

// --- MONGODB CONNECTION ---
const dbURI = process.env.MONGO_URI; // Local fallback production mein error de sakta hai

mongoose.connect(dbURI)
  .then(() => console.log(`✅ MongoDB Connected`))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// --- ROUTES ---
app.use('/api/jobs', jobRoutes);

// Health Check - Ise /api/health kar dein taaki frontend route se clash na ho
app.get('/api/health', (req, res) => res.send("🚀 API is running modularly!"));

// --- GLOBAL ERROR HANDLER ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Vercel par listen ki zaroorat nahi hoti, par local ke liye rehne de sakte hain
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🔥 Server running on port ${PORT}`);
  });
}

// YEH SABSE ZAROORI HAI VERCEL KE LIYE
module.exports = app;