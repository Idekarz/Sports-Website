import React, { useState } from 'react';
import { UserPlus, CheckCircle, ArrowRight, Sparkles, Shield, Clock, Users, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    age: '',
    sport: '',
    bloodGroup: '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalConditions: '',
  });

  const sports = ['Football', 'Basketball', 'Cricket', 'Swimming'];
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setApiError('');
    setErrors({});

    try {
      console.log('🚀 Frontend: Submitting player registration');
      console.log('📤 Frontend: Sending data:', JSON.stringify(formData, null, 2));

      const response = await fetch('http://localhost:3001/api/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📥 Frontend: Response status:', response.status);

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        // Reset form after successful submission
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            dateOfBirth: '',
            age: '',
            sport: '',
            bloodGroup: '',
            emergencyContact: '',
            emergencyPhone: '',
            medicalConditions: '',
          });
        }, 5000);
      } else {
        if (data.errors && Array.isArray(data.errors)) {
          // Handle validation errors
          const validationErrors: Record<string, string> = {};
          data.errors.forEach((error: any) => {
            validationErrors[error.param] = error.msg;
          });
          setErrors(validationErrors);
        } else {
          setApiError(data.message || 'Registration failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Registration error:', error);
      setApiError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl shadow-premium-lg p-8 md:p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4 text-white">Registration Successful!</h2>
          <p className="text-neutral-300 mb-6 leading-relaxed">
            Thank you for registering with Sports Club. We'll contact you shortly with more information about your membership and next steps.
          </p>
          <div className="flex items-center justify-center gap-2 text-neutral-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>Redirecting to home page...</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 pt-20">
      {/* Header */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-neutral-950 via-primary-950/20 to-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30">
              <UserPlus className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary-200 to-accent-200 bg-clip-text text-transparent">
                Join Sports Club
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards athletic excellence.
              Complete your registration and become part of our elite community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl shadow-premium-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 border-b border-neutral-800 p-6">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary-400" />
                <div>
                  <h3 className="text-lg font-bold text-white">Secure Registration</h3>
                  <p className="text-sm text-neutral-400">Your information is encrypted and secure</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 lg:p-10 space-y-8">
              {/* API Error Display */}
              <AnimatePresence>
                {apiError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-sm">{apiError}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-400 font-bold">1</span>
                  </div>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold mb-2 text-neutral-300 uppercase tracking-wider">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-primary-500'
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold mb-2 text-neutral-300 uppercase tracking-wider">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-primary-500'
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-400 font-bold">2</span>
                  </div>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-neutral-300 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-primary-500'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-neutral-300 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-primary-500'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-400 font-bold">3</span>
                  </div>
                  Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-semibold mb-2 text-neutral-300 uppercase tracking-wider">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.dateOfBirth ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-primary-500'
                      }`}
                    />
                    {errors.dateOfBirth && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.dateOfBirth}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="age" className="block text-sm font-semibold mb-2 text-neutral-300 uppercase tracking-wider">
                      Age *
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="10"
                      max="100"
                      className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.age ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-primary-500'
                      }`}
                      placeholder="25"
                    />
                    {errors.age && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.age}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="bloodGroup" className="block text-sm font-semibold mb-2 text-neutral-300 uppercase tracking-wider">
                      Blood Group *
                    </label>
                    <select
                      id="bloodGroup"
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.bloodGroup ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-primary-500'
                      }`}
                    >
                      <option value="">Select Blood Group</option>
                      {bloodGroups.map(group => (
                        <option key={group} value={group}>{group}</option>
                      ))}
                    </select>
                    {errors.bloodGroup && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.bloodGroup}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Sports Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-400 font-bold">4</span>
                  </div>
                  Sports Information
                </h3>
                <div>
                  <label htmlFor="sport" className="block text-sm font-semibold mb-2 text-neutral-300 uppercase tracking-wider">
                    Primary Sport *
                  </label>
                  <select
                    id="sport"
                    name="sport"
                    value={formData.sport}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                      errors.sport ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-primary-500'
                    }`}
                  >
                    <option value="">Select Your Sport</option>
                    {sports.map(sport => (
                      <option key={sport} value={sport}>{sport}</option>
                    ))}
                  </select>
                  {errors.sport && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.sport}
                    </p>
                  )}
                </div>
              </div>

              {/* Emergency Contact */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-400 font-bold">5</span>
                  </div>
                  Emergency Contact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="emergencyContact" className="block text-sm font-semibold mb-2 text-neutral-300 uppercase tracking-wider">
                      Emergency Contact Name *
                    </label>
                    <input
                      type="text"
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.emergencyContact ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-primary-500'
                      }`}
                      placeholder="Jane Doe"
                    />
                    {errors.emergencyContact && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.emergencyContact}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="emergencyPhone" className="block text-sm font-semibold mb-2 text-neutral-300 uppercase tracking-wider">
                      Emergency Phone *
                    </label>
                    <input
                      type="tel"
                      id="emergencyPhone"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.emergencyPhone ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-primary-500'
                      }`}
                      placeholder="+1 (555) 987-6543"
                    />
                    {errors.emergencyPhone && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.emergencyPhone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Medical Conditions */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-400 font-bold">6</span>
                  </div>
                  Medical Information
                </h3>
                <div>
                  <label htmlFor="medicalConditions" className="block text-sm font-semibold mb-2 text-neutral-300 uppercase tracking-wider">
                    Medical Conditions (Optional)
                  </label>
                  <textarea
                    id="medicalConditions"
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${
                      errors.medicalConditions ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-primary-500'
                    }`}
                    placeholder="Please list any medical conditions, allergies, or medications we should be aware of..."
                  />
                  {errors.medicalConditions && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.medicalConditions}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-neutral-800">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 disabled:from-neutral-600 disabled:to-neutral-600 text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing Registration...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Complete Registration
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-sm text-neutral-500 mt-4 text-center">
                  By registering, you agree to our{' '}
                  <a href="#" className="text-primary-400 hover:text-primary-300 underline">terms and conditions</a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}