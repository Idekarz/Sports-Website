import React, { useState } from 'react';
import { Users, CheckCircle, ArrowRight, Sparkles, Shield, Clock, AlertCircle, Loader2, Phone, Mail, User, Plus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function TeamRegister() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState('');
  const [formData, setFormData] = useState({
    teamName: '',
    coachName: '',
    email: '',
    phone: '',
    playerCount: '1',
    teamMembers: [
      { name: '', age: '', position: '', jerseyNumber: '', aadhaar: '' }
    ],
  });

  const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleMemberChange = (index: number, field: string, value: string) => {
    const updatedMembers = [...formData.teamMembers];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setFormData({ ...formData, teamMembers: updatedMembers });
  };

  const addMember = () => {
    setFormData({
      ...formData,
      teamMembers: [...formData.teamMembers, { name: '', age: '', position: '', jerseyNumber: '', aadhaar: '' }],
      playerCount: (formData.teamMembers.length + 1).toString()
    });
  };

  const removeMember = (index: number) => {
    if (formData.teamMembers.length <= 1) return;
    const updatedMembers = formData.teamMembers.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      teamMembers: updatedMembers,
      playerCount: updatedMembers.length.toString()
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.teamName) newErrors.teamName = 'Team name is required';
    if (!formData.coachName) newErrors.coachName = 'Coach/Manager name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    
    formData.teamMembers.forEach((member, index) => {
      if (!member.name) newErrors[`member_${index}_name`] = 'Required';
      if (!member.age) newErrors[`member_${index}_age`] = 'Required';
      if (!member.position) newErrors[`member_${index}_position`] = 'Required';
      if (!member.jerseyNumber) newErrors[`member_${index}_jersey`] = 'Required';
      if (!member.aadhaar) {
        newErrors[`member_${index}_aadhaar`] = 'Required';
      } else if (member.aadhaar.length !== 12) {
        newErrors[`member_${index}_aadhaar`] = '12 digits required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setApiError('');

    try {
      console.log('🚀 Frontend: Submitting team registration');
      const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_BASE}/api/teams/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            teamName: '',
            coachName: '',
            email: '',
            phone: '',
            playerCount: '1',
            teamMembers: [{ name: '', age: '', position: '', jerseyNumber: '', aadhaar: '' }],
          });
        }, 5000);
      } else {
        setApiError(data.message || 'Registration failed. Please try again.');
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
          <h2 className="text-3xl font-bold mb-4 text-white">Team Registered!</h2>
          <p className="text-neutral-300 mb-6 leading-relaxed">
            Your team registration with {formData.teamMembers.length} members has been received. Our coordinators will contact you shortly.
          </p>
          <div className="flex items-center justify-center gap-2 text-neutral-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>Redirecting...</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 pt-20">
      <section className="relative py-16 md:py-24 bg-neutral-950 overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1920&h=1080&auto=format&fit=crop"
            alt="Team Registration"
            className="w-full h-full object-cover opacity-20 px-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F1A] via-transparent to-[#0F0F1A]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary-200 to-accent-200 bg-clip-text text-transparent">
                Team Registration
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl shadow-premium-lg overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="p-6 md:p-8 lg:p-10 space-y-12">
              {apiError && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-sm">{apiError}</p>
                </div>
              )}

              {/* Team Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-4">
                  <Shield className="w-5 h-5 text-primary-400" />
                  General Team Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-neutral-300 uppercase">Team Name *</label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white focus:outline-none focus:ring-2 ${
                        errors.teamName ? 'border-red-500' : 'border-neutral-700 focus:ring-primary-400'
                      }`}
                      placeholder="e.g. Warriors FC"
                    />
                    {errors.teamName && <p className="text-red-400 text-xs mt-1">{errors.teamName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-neutral-300 uppercase">Coach/Manager Name *</label>
                    <input
                      type="text"
                      name="coachName"
                      value={formData.coachName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white focus:outline-none focus:ring-2 ${
                        errors.coachName ? 'border-red-500' : 'border-neutral-700 focus:ring-primary-400'
                      }`}
                      placeholder="Full Name"
                    />
                    {errors.coachName && <p className="text-red-400 text-xs mt-1">{errors.coachName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-neutral-300 uppercase">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-500' : 'border-neutral-700 focus:ring-primary-400'
                      }`}
                      placeholder="coach@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-neutral-300 uppercase">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-red-500' : 'border-neutral-700 focus:ring-primary-400'
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Members Section */}
              <div className="space-y-8">
                <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary-400" />
                    Team Members ({formData.teamMembers.length})
                  </h3>
                  <button
                    type="button"
                    onClick={addMember}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600/20 hover:bg-primary-600/40 text-primary-400 border border-primary-500/30 rounded-lg transition-all text-sm font-semibold"
                  >
                    <Plus className="w-4 h-4" />
                    Add Player
                  </button>
                </div>

                <div className="space-y-6">
                  {formData.teamMembers.map((member, index) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={index}
                      className="p-6 bg-neutral-800/50 border border-neutral-700 rounded-xl relative group shadow-sm"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-neutral-500 font-bold text-sm uppercase tracking-widest">Player #{index + 1}</span>
                        {formData.teamMembers.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeMember(index)}
                            className="p-2 text-neutral-500 hover:text-red-400 transition-colors"
                            title="Remove Player"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-xs font-bold mb-2 text-neutral-400 uppercase">Full Name *</label>
                          <input
                            type="text"
                            value={member.name}
                            onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                            className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white text-sm focus:ring-1 focus:ring-primary-500 outline-none"
                            placeholder="Player Name"
                          />
                          {errors[`member_${index}_name`] && <p className="text-red-400 text-[10px] mt-1">{errors[`member_${index}_name`]}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold mb-2 text-neutral-400 uppercase">Age *</label>
                          <input
                            type="number"
                            value={member.age}
                            onChange={(e) => handleMemberChange(index, 'age', e.target.value)}
                            className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white text-sm focus:ring-1 focus:ring-primary-500 outline-none"
                            placeholder="Age"
                          />
                          {errors[`member_${index}_age`] && <p className="text-red-400 text-[10px] mt-1">{errors[`member_${index}_age`]}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold mb-2 text-neutral-400 uppercase">Position *</label>
                          <select
                            value={member.position}
                            onChange={(e) => handleMemberChange(index, 'position', e.target.value)}
                            className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white text-sm focus:ring-1 focus:ring-primary-500 outline-none"
                          >
                            <option value="">Select Position</option>
                            {positions.map(pos => <option key={pos} value={pos}>{pos}</option>)}
                          </select>
                          {errors[`member_${index}_position`] && <p className="text-red-400 text-[10px] mt-1">{errors[`member_${index}_position`]}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold mb-2 text-neutral-400 uppercase">Jersey Number *</label>
                          <input
                            type="text"
                            value={member.jerseyNumber}
                            onChange={(e) => handleMemberChange(index, 'jerseyNumber', e.target.value)}
                            className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white text-sm focus:ring-1 focus:ring-primary-500 outline-none"
                            placeholder="e.g. 10"
                          />
                          {errors[`member_${index}_jersey`] && <p className="text-red-400 text-[10px] mt-1">{errors[`member_${index}_jersey`]}</p>}
                        </div>
                        <div className="lg:col-span-2">
                          <label className="block text-xs font-bold mb-2 text-neutral-400 uppercase">Aadhaar (12 digits) *</label>
                          <input
                            type="text"
                            value={member.aadhaar}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, '').slice(0, 12);
                              handleMemberChange(index, 'aadhaar', val);
                            }}
                            className={`w-full px-3 py-2.5 bg-neutral-900 border rounded-lg text-white text-sm outline-none transition-all ${
                              member.aadhaar && member.aadhaar.length !== 12 ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-700 focus:ring-1 focus:ring-primary-500'
                            }`}
                            placeholder="12 digit Aadhaar"
                          />
                          {member.aadhaar && member.aadhaar.length !== 12 && <p className="text-red-400 text-[10px] mt-1">Must be exactly 12 digits</p>}
                          {errors[`member_${index}_aadhaar`] && <p className="text-red-400 text-[10px] mt-1">{errors[`member_${index}_aadhaar`]}</p>}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-neutral-800">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-bold text-lg rounded-xl transition-all shadow-glow flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-6 h-6 animate-spin" /> Submitting...</>
                  ) : (
                    <><Sparkles className="w-5 h-5" /> Confirm Team Registration <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
