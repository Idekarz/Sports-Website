import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true
  },
  coachName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  playerCount: {
    type: Number,
    required: true
  },
  teamMembers: [{
    name: { type: String, required: true },
    age: { type: Number, required: true },
    position: { 
      type: String, 
      required: true,
      enum: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward']
    },
    jerseyNumber: { type: String, required: true },
    aadhaar: { 
      type: String, 
      required: true,
      match: [/^\d{12}$/, 'Aadhaar must be exactly 12 digits']
    }
  }]
}, {
  timestamps: true
});

const Team = mongoose.model('Team', teamSchema);
export default Team;
