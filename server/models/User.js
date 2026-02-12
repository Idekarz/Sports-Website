import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    minlength: [2, 'First name must be at least 2 characters'],
    maxlength: [50, 'First name cannot exceed 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    minlength: [2, 'Last name must be at least 2 characters'],
    maxlength: [50, 'Last name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    index: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required']
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [10, 'Age must be at least 10'],
    max: [100, 'Age cannot exceed 100']
  },
  sport: {
    type: String,
    required: [true, 'Sport is required'],
    enum: ['Football', 'Basketball', 'Cricket', 'Swimming']
  },
  bloodGroup: {
    type: String,
    required: [true, 'Blood group is required'],
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  emergencyContact: {
    type: String,
    required: [true, 'Emergency contact name is required'],
    trim: true,
    minlength: [2, 'Emergency contact name must be at least 2 characters'],
    maxlength: [100, 'Emergency contact name cannot exceed 100 characters']
  },
  emergencyPhone: {
    type: String,
    required: [true, 'Emergency phone number is required'],
    trim: true
  },
  medicalConditions: {
    type: String,
    trim: true,
    default: ''
  },
  registrationDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
});

// Create indexes
playerSchema.index({ email: 1 });
playerSchema.index({ registrationDate: -1 });
playerSchema.index({ sport: 1 });

const Player = mongoose.model('Player', playerSchema);

export default Player;