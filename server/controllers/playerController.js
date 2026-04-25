import { supabase } from '../config/supabase.js';

export const registerPlayer = async (req, res) => {
  try {
    console.log('🚀 Backend: Received player registration request');
    console.log('📦 Data:', req.body);

    const { firstName, lastName, ...otherData } = req.body;
    const playerName = `${firstName} ${lastName}`.trim() || req.body.name;

    // Use Supabase Insert to 'players' table
    const { data, error } = await supabase
      .from('players')
      .insert([
        { 
          name: playerName,
          ...otherData
        }
      ])
      .select(); // Ask Supabase to return the newly generated row

    if (error) {
      throw error;
    }

    console.log('✅ Player saved successfully:', data[0].id);

    res.status(201).json({
      success: true,
      message: 'Player registered successfully',
      player: data[0]
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
