import express from 'express';
import { registerPlayer } from '../controllers/playerController.js';

const router = express.Router();

router.post('/register', registerPlayer);

export default router;
