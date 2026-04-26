import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import playerRoutes from './routes/players.js';
import teamRoutes from './routes/teams.js';
import authRoutes from './routes/authRoutes.js';
import { supabase } from './config/supabase.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

console.log('🚀 Starting Sports Club Server...');
console.log('📊 Environment:', process.env.NODE_ENV || 'development');
console.log('🔌 Port:', PORT);

// Middleware
app.use(helmet());
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/teams', teamRoutes);

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Server is running with Supabase',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Health check failed',
      error: error.message
    });
  }
});

// Serve the built React frontend (production)
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

// For any non-API route, serve index.html (React Router handles client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});