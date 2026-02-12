import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

console.log('🚀 Starting Sports Club Server...');
console.log('📊 Environment:', NODE_ENV);
console.log('🔌 Port:', PORT);

// Middleware
app.use(helmet());
app.use(cors({
  origin: NODE_ENV === 'production'
    ? false
    : [
        'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:3000'
      ],
  credentials: true
}));
app.use(express.json());

/*
|--------------------------------------------------------------------------
| API Routes (Temporary Dummy Routes)
|--------------------------------------------------------------------------
*/

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

/*
|--------------------------------------------------------------------------
| Serve Frontend (React Build)
|--------------------------------------------------------------------------
*/

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// React Router support
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
*/

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
