import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  jerseySize: {
    type: String,
    required: true,
    enum: ['S', 'M', 'L', 'XL', 'XXL']
  },
  aadhaar: {
    type: String,
    required: true,
    match: [/^\d{12}$/, 'Aadhaar must be exactly 12 digits']
  },
  // Adding fields from the existing frontend form for compatibility
  phone: String,
  sport: String,
  dateOfBirth: Date,
  bloodGroup: String,
  emergencyContact: String,
  emergencyPhone: String,
  medicalConditions: String
}, {
  timestamps: true
});

const Player = mongoose.model('Player', playerSchema);
export default Player;
