import Team from '../models/Team.js';

export const registerTeam = async (req, res) => {
  try {
    console.log('🚀 Backend: Received team registration request');
    console.log('📦 Data:', req.body);

    const { teamName, coachName, email, phone, playerCount, teamMembers } = req.body;

    const newTeam = new Team({
      teamName,
      coachName,
      email,
      phone,
      playerCount,
      teamMembers
    });

    const savedTeam = await newTeam.save();
    console.log('✅ Team saved successfully:', savedTeam._id);

    res.status(201).json({
      success: true,
      message: 'Team registered successfully',
      team: savedTeam
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
