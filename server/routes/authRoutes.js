import express from 'express';
import { body } from 'express-validator';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

/**
 * Route: POST /api/register
 * Included Validation with express-validator
 */
router.post(
  '/register',
  [
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password must be 6 or more characters').isLength({ min: 6 })
  ],
  registerUser
);

/**
 * Route: POST /api/login
 */
router.post('/login', loginUser);

export default router;
