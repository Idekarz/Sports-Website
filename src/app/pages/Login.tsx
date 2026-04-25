import React, { useState } from 'react';
import axios from 'axios';
import { LogIn, AlertCircle, Loader2, Key } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link, useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (apiError) setApiError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setApiError('');

    try {
      console.log('🚀 Frontend: Attempting Login...');

      const response = await axios.post('http://localhost:5000/api/login', formData);

      console.log('📥 Frontend: Login Response:', response.status);

      if (response.data.success) {
        // Store JWT Session
        localStorage.setItem('supabase_token', response.data.session.access_token);
        localStorage.setItem('supabase_user_id', response.data.user.id);
        
        // Redirect to homepage or user dashboard
        navigate('/');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      if (error.response && error.response.data) {
        setApiError(error.response.data.message || 'Login failed. Please check your credentials.');
      } else {
        setApiError('Network error. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 pt-20">
      {/* Header section identical aesthetic to Registration */}
      <section className="relative py-16 md:py-24 bg-neutral-950 overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1920&h=1080&auto=format&fit=crop"
            alt="Login to Sports Club"
            className="w-full h-full object-cover opacity-20 px-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F1A] via-transparent to-[#0F0F1A]"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30">
              <Key className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary-200 to-accent-200 bg-clip-text text-transparent">
                Welcome Back
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Login to access the community resources and review your schedule.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Login Form UI */}
      <section className="py-16 md:py-24">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl shadow-premium-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 border-b border-neutral-800 p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold text-white">Sign In to Account</h3>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
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
                  className="w-full px-4 py-3 bg-neutral-800 border-neutral-700 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all hover:shadow-purple-glow"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold mb-2 text-neutral-300 uppercase tracking-wider">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border-neutral-700 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all hover:shadow-purple-glow"
                  placeholder="••••••••"
                />
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 disabled:from-neutral-600 disabled:to-neutral-600 text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Authenticating...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5" />
                      Secure Login
                    </>
                  )}
                </button>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-neutral-400">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary-400 hover:text-primary-300 font-bold transition-colors underline">
                    Join Now
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
