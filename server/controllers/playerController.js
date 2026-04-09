import Player from '../models/Player.js';

export const registerPlayer = async (req, res) => {
  try {
    console.log('🚀 Backend: Received player registration request');
    console.log('📦 Data:', req.body);

    const { firstName, lastName, email, age, jerseySize, aadhaar, ...otherData } = req.body;

    // Map firstName and lastName to 'name' as requested in specific model requirement
    const playerName = `${firstName} ${lastName}`.trim();

    const newPlayer = new Player({
      name: playerName || req.body.name, // Support both formats
      email,
      age,
      jerseySize,
      aadhaar,
      ...otherData
    });

    const savedPlayer = await newPlayer.save();
    console.log('✅ Player saved successfully:', savedPlayer._id);

    res.status(201).json({
      success: true,
      message: 'Player registered successfully',
      player: savedPlayer
    });
  } catch (error) {
    console.error('❌ Error registering player:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to register player',
      error: error.message
    });
  }
};
