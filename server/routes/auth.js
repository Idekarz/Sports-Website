import express from 'express';
import Player from '../models/User.js';

const router = express.Router();

// Player registration validation middleware
const playerRegistrationValidation = [
  express.json(),
  (req, res, next) => {
    const errors = [];

    // Required field validation
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone',
      'dateOfBirth', 'age', 'sport', 'bloodGroup',
      'emergencyContact', 'emergencyPhone'
    ];

    for (const field of requiredFields) {
      if (!req.body[field] || req.body[field].toString().trim() === '') {
        errors.push(`${field} is required`);
      }
    }

    // Email validation
    if (req.body.email && !/^\S+@\S+\.\S+$/.test(req.body.email)) {
      errors.push('Please provide a valid email address');
    }

    // Age validation
    if (req.body.age && (req.body.age < 10 || req.body.age > 100)) {
      errors.push('Age must be between 10 and 100');
    }

    // Sport validation
    const validSports = ['Football', 'Basketball', 'Cricket', 'Swimming'];
    if (req.body.sport && !validSports.includes(req.body.sport)) {
      errors.push('Please select a valid sport');
    }

    // Blood group validation
    const validBloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    if (req.body.bloodGroup && !validBloodGroups.includes(req.body.bloodGroup)) {
      errors.push('Please select a valid blood group');
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors
      });
    }

    next();
  }
];

// Player registration endpoint
router.post('/players', playerRegistrationValidation, async (req, res) => {
  try {
    console.log('📝 Received player registration request');
    console.log('📦 Request payload:', JSON.stringify(req.body, null, 2));

    const {
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      age,
      sport,
      bloodGroup,
      emergencyContact,
      emergencyPhone,
      medicalConditions
    } = req.body;

    // Check if email already exists
    console.log('🔍 Checking for existing player with email:', email.toLowerCase());
    const existingPlayer = await Player.findOne({ email: email.toLowerCase() });
    if (existingPlayer) {
      console.log('❌ Email already exists:', email.toLowerCase());
      return res.status(409).json({
        success: false,
        message: 'A registration with this email already exists'
      });
    }
    console.log('✅ Email is available for registration');

    // Create new player
    console.log('👤 Creating new player record...');
    const newPlayer = new Player({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase(),
      phone: phone.trim(),
      dateOfBirth: new Date(dateOfBirth),
      age: parseInt(age),
      sport,
      bloodGroup,
      emergencyContact: emergencyContact.trim(),
      emergencyPhone: emergencyPhone.trim(),
      medicalConditions: medicalConditions?.trim() || '',
      status: 'pending'
    });

    console.log('💾 Saving player to database...');
    // Save to database
    await newPlayer.save();
    console.log('✅ Player saved successfully with ID:', newPlayer._id);

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Registration submitted successfully! We will contact you soon.',
      player: {
        id: newPlayer._id,
        firstName: newPlayer.firstName,
        lastName: newPlayer.lastName,
        email: newPlayer.email,
        sport: newPlayer.sport,
        registrationDate: newPlayer.registrationDate
      }
    });

  } catch (error) {
    console.error('Registration error:', error);

    // Handle duplicate email error from MongoDB
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'A registration with this email already exists'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
});

// Get all players (for admin purposes - in production, add authentication)
router.get('/players', async (req, res) => {
  try {
    const players = await Player.find({})
      .sort({ registrationDate: -1 })
      .select('-__v'); // Exclude version field

    res.json({
      success: true,
      data: players,
      count: players.length
    });
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching players'
    });
  }
});

export default router;