import { supabase } from '../config/supabase.js';

export const registerTeam = async (req, res) => {
  try {
    console.log('🚀 Backend: Received team registration request');
    console.log('📦 Data:', req.body);

    const { data, error } = await supabase
      .from('teams')
      .insert([ req.body ])
      .select();

    if (error) {
      throw error;
    }

    console.log('✅ Team saved successfully:', data[0].id);

    res.status(201).json({
      success: true,
      message: 'Team registered successfully',
      team: data[0]
    });
  } catch (error) {
    console.error('❌ Error registering team:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to register team',
      error: error.message
    });
  }
};
