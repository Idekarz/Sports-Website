import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

console.log('🚀 Starting Sports Club Server...');
console.log('📊 Environment:', NODE_ENV);
console.log('🔌 Port:', PORT);
console.log('⚠ MongoDB disabled for deployment');

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

// Dummy in-memory storage (temporary)
let users = [];

// Validation middleware
const registerValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),

  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];

// Registration endpoint (temporary, no DB)
app.post('/api/register', registerValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }

  const { name, email, password } = req.body;

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: 'User already exists'
    });
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password,
    createdAt: new Date()
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: 'Registration successful (temporary storage)',
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      createdAt: newUser.createdAt
    }
  });
});

// Get users (temporary)
app.get('/api/users', (req, res) => {
  res.json({
    success: true,
    data: users,
    count: users.length
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running (Database disabled)',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
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
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
