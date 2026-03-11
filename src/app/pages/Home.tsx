import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Trophy, Calendar, Users, ArrowRight, Shield, Zap, CirclePlay, Star, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';

export function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const heroImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1920&h=1080&auto=format&fit=crop', alt: 'Epic Football Action' },
    { id: 2, src: 'https://images.unsplash.com/photo-1593341646782-20b495cff86d?q=80&w=1920&h=1080&auto=format&fit=crop', alt: 'Cricket Batting Moment' },
    { id: 3, src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1920&h=1080&auto=format&fit=crop', alt: 'Energy Basketball Dunk' },
    { id: 4, src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&h=1080&auto=format&fit=crop', alt: 'Pro Swimmer Racing' },
    { id: 5, src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1920&h=1080&auto=format&fit=crop', alt: 'Wide Stadium Crowd' }
  ];
  
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentHeroIndex(index);
  };

  const upcomingMatches = [
    {
      team1: 'Night Hawks',
      team2: 'Silver Wolves',
      date: 'Oct 24, 2026',
      time: '18:00 EST',
      location: 'Main Stadium',
      sport: 'Basketball'
    },
    {
      team1: 'FC Titans',
      team2: 'United Lions',
      date: 'Oct 26, 2026',
      time: '20:00 EST',
      location: 'Grand Arena',
      sport: 'Football'
    },
    {
      team1: 'Aces Club',
      team2: 'Kings Men',
      date: 'Nov 02, 2026',
      time: '14:30 EST',
      location: 'Court 1A',
      sport: 'Tennis'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&h=600&auto=format&fit=crop', // Sprint track
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&h=600&auto=format&fit=crop', // Soccer match
    'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&h=600&auto=format&fit=crop', // Basketball dunk
    'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&h=600&auto=format&fit=crop', // Tennis action
    'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&h=600&auto=format&fit=crop', // Stadium lights
    'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&h=800&auto=format&fit=crop', // High quality action image
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-primary-500/30">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        className="relative min-h-[95vh] flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 8, ease: "linear" }}
                className="w-full h-full"
              >
                <ImageWithFallback
                  src={heroImages[currentHeroIndex].src}
                  alt={heroImages[currentHeroIndex].alt}
                  className="w-full h-full object-cover origin-center"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
          {/* Enhanced Dark Gradient Overlay for Readability (30-40% opacity) */}
          <div className="absolute inset-0 bg-[#0F0F1A]/40 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] via-transparent to-transparent z-10 pointer-events-none"></div>

          {/* Manual Navigation Controls */}
          <div className="absolute inset-0 z-30 flex items-center justify-between px-4 sm:px-10 pointer-events-none">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white pointer-events-auto hover:bg-white/20 transition-all hover:scale-110 group focus:outline-none"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white pointer-events-auto hover:bg-white/20 transition-all hover:scale-110 group focus:outline-none"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentHeroIndex === index 
                    ? 'bg-primary-500 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
            <span className="text-primary-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base">Elite Sports Platform</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.9] tracking-tighter"
          >
            <span className="text-white drop-shadow-lg">Train Hard.</span><br />
            <span className="bg-gradient-to-r from-primary-400 via-accent-300 to-primary-500 bg-clip-text text-transparent drop-shadow-purple-glow">
              Play Harder.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-neutral-300 mb-10 max-w-2xl font-light leading-relaxed"
          >
            Join the ultimate destination for athletes. Compete in elite tournaments, track your stats, and elevate your game to the next level.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link
              to="/register"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-105 overflow-hidden flex items-center justify-center gap-3"
            >
              <Zap className="w-5 h-5 text-white" />
              <span className="relative z-10">Join the Team</span>
            </Link>
            
            <Link
              to="/register"
              className="group px-8 py-4 bg-[#0F0F1A]/60 backdrop-blur-md border border-neutral-700 hover:border-primary-400 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-purple-glow hover:scale-105 flex items-center justify-center gap-3"
            >
              <span className="relative z-10">Register Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.section>



      {/* 3. UPCOMING MATCHES SECTION */}
      <section className="py-24 md:py-32 bg-neutral-950 relative border-t border-neutral-900">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-900/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 mb-6 text-primary-400 shadow-glow">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Upcoming Fixtures</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">Don't miss the biggest clashes of the season.</p>
          </motion.div>

          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            {upcomingMatches.map((match, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex flex-col md:flex-row items-center justify-between bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-primary-500/40 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-purple-glow hover:bg-neutral-800/80"
              >
                {/* Date & Time */}
                <div className="flex flex-col md:w-1/4 text-center md:text-left mb-6 md:mb-0 border-b md:border-b-0 md:border-r border-neutral-800 pb-6 md:pb-0 pr-0 md:pr-6">
                  <span className="text-primary-400 font-bold uppercase tracking-wider text-sm mb-1">{match.date}</span>
                  <span className="text-2xl font-black text-white mb-2">{match.time}</span>
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-neutral-400 text-sm">
                    <MapPin className="w-4 h-4" /> {match.location}
                  </div>
                </div>

                {/* Teams */}
                <div className="flex-1 flex items-center justify-center w-full md:w-auto px-4">
                  <div className="flex items-center w-full justify-between max-w-md">
                    <div className="text-right flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-300 transition-colors">{match.team1}</h4>
                    </div>
                    <div className="px-6 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-accent-400 font-black text-sm relative">
                        VS
                        <div className="absolute inset-0 rounded-full bg-accent-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-500 mt-2 font-bold">{match.sport}</span>
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-300 transition-colors">{match.team2}</h4>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="md:w-1/4 flex justify-center md:justify-end mt-6 md:mt-0 pl-0 md:pl-6">
                  <Link to="/tournaments" className="px-6 py-3 bg-neutral-800 hover:bg-primary-600 text-white font-semibold rounded-xl border border-neutral-700 hover:border-primary-500 transition-all duration-300 flex items-center gap-2 hover:shadow-glow">
                    Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/tournaments" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-500/30 hover:border-primary-500 text-white font-bold rounded-xl transition-all duration-300 hover:bg-primary-500/10 hover:shadow-glow">
                View Full Calendar
             </Link>
          </div>
        </div>
      </section>

      {/* 4. PLAYER REGISTRATION SECTION */}
      <section className="py-24 md:py-0 bg-[#0F0F1A]">
        <div className="flex flex-col md:flex-row min-h-[80vh]">
          {/* Image Side */}
          <motion.div 
            className="w-full md:w-1/2 relative min-h-[400px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0">
               <ImageWithFallback 
                 src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&h=1600&auto=format&fit=crop" 
                 alt="Athlete Training" 
                 className="w-full h-full object-cover" 
               />
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0F0F1A]/50 to-[#0F0F1A]"></div>
               <div className="absolute inset-0 bg-primary-900/20 mix-blend-overlay"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-12 left-12 bg-neutral-900/80 backdrop-blur-md border border-neutral-700 rounded-2xl p-6 shadow-premium-lg max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-glow">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Pro Level</h4>
                  <p className="text-primary-400 text-sm font-semibold">Training Facilities</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-xl"
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-[1.1]">
                Your Journey <br/>
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Starts Here.</span>
              </h2>
              
              <p className="text-xl text-neutral-300 mb-10 leading-relaxed font-light">
                Whether you're looking to play casually or train for the pros, we have the facilities, coaches, and tournaments to help you reach your goals.
              </p>

              <ul className="space-y-6 mb-12">
                <li className="flex items-center gap-4 text-neutral-200 font-medium text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-5 h-5 text-primary-400" />
                  </div>
                  State-of-the-art facilities and equipment
                </li>
                <li className="flex items-center gap-4 text-neutral-200 font-medium text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-5 h-5 text-primary-400" />
                  </div>
                  Professional coaching staff
                </li>
                <li className="flex items-center gap-4 text-neutral-200 font-medium text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-5 h-5 text-primary-400" />
                  </div>
                  Competitive league placements
                </li>
              </ul>

              <Link
                to="/register"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0F0F1A] hover:bg-neutral-100 font-black text-lg rounded-xl transition-all duration-300 shadow-premium-lg hover:shadow-glow-lg hover:scale-105"
              >
                Become a Member
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY SECTION */}
      <section className="py-24 md:py-32 bg-neutral-950">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
             <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">In Action</h2>
                <p className="text-xl text-neutral-400">Highlights from latest tournaments</p>
             </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square md:aspect-[4/3] lg:aspect-square'
                }`}
              >
                <div className="absolute inset-0">
                  <ImageWithFallback 
                    src={src} 
                    alt={`Gallery Image ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors duration-300 mix-blend-overlay"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-glow">
                      <Star className="w-8 h-8 text-white" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STATS SECTION (Animated Counters) */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-neutral-950 via-primary-950/20 to-[#0F0F1A] border-y border-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divider-x-0 md:divide-x divide-neutral-800">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6"
            >
              <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                <AnimatedCounter value={2500} suffix="+" duration={2.5} />
              </div>
              <div className="text-xl text-neutral-400 font-bold uppercase tracking-widest">Players Registered</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center p-6"
            >
              <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                <AnimatedCounter value={320} suffix="+" duration={2} />
              </div>
              <div className="text-xl text-neutral-400 font-bold uppercase tracking-widest">Matches Played</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center p-6"
            >
               <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                <AnimatedCounter value={45} duration={1.5} />
              </div>
              <div className="text-xl text-neutral-400 font-bold uppercase tracking-widest">Elite Teams</div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}

// Simple internal check icon to avoid extra lucide imports
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
}
