import React from 'react';
import { MapPin, CheckCircle, Star, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Facilities() {
  const turfs = [
    {
      name: 'Eagle Sports Complex', 
      location: 'Bangalore, Karnataka', 
      type: 'Football & Cricket Turf', 
      description: 'A sprawling multi-sport complex with FIFA-standard football turfs and dedicated cricket pitches. Features floodlights for night play, changing rooms, and spectator stands.',
      image: 'https://images.unsplash.com/photo-1579952962648-522d7a2205cf?q=80&w=1400'
    },
    {
      name: 'The Arena by Sportrepublic', 
      location: 'Mumbai, Maharashtra', 
      type: 'Padel & Badminton Courts', 
      description: 'Mumbai\'s premier indoor sports facility featuring state-of-the-art padel tennis courts and professional badminton courts. Fully air-conditioned with ample parking.',
      image: 'https://images.unsplash.com/photo-1517462050212-d922a00c618c?q=80&w=1400'
    },
    {
      name: 'Chennai Sports Dome', 
      location: 'Chennai, Tamil Nadu', 
      type: 'Indoor Multi-Sport Facility', 
      description: 'A massive indoor dome offering facilities for basketball, volleyball, and futsal. Equipped with advanced flooring, comfortable seating, and a dedicated fitness zone.',
      image: 'https://images.unsplash.com/photo-1546519632-4d2d416b24d7?q=80&w=1400'
    },
    {
      name: 'Hyderabad Turf Park', 
      location: 'Hyderabad, Telangana', 
      type: 'Hockey & Football Turf', 
      description: 'A lush green turf park designed for field hockey and football, meeting international standards. Includes coaching academies, a cafeteria, and ample open space.',
      image: 'https://images.unsplash.com/photo-1549476465-950c4ce8c71d?q=80&w=1400'
    },
    {
      name: 'Delhi Olympic Village', 
      location: 'Delhi, NCR', 
      type: 'Athletics Track & Field', 
      description: 'The iconic Delhi Olympic Village offers a world-class synthetic athletics track and various field event facilities. A historical venue for aspiring Olympians.',
      image: 'https://images.unsplash.com/photo-1547847146-81aa71d0e80a?q=80&w=1400'
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 pt-20">
      <h1 className="text-white">Facilities Page Test</h1>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-neutral-950 via-primary-950/20 to-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary-200 to-accent-200 bg-clip-text text-transparent">
                Our World-Class Facilities
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Explore our cutting-edge sports complexes and turfs across India.
              Designed for champions, built for excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
              <span className="bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                Premier Sports Turfs
              </span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-[1.6] font-medium">
              Discover the best training and playing grounds in the country.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {turfs.map((turf, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 rounded-2xl shadow-premium-lg overflow-hidden border border-neutral-700 hover:border-primary-500/50 transition-all duration-300 hover:scale-[1.02]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-60 w-full relative">
                  <img
                    src={turf.image}
                    alt={turf.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-3xl font-bold text-white mb-1 leading-tight tracking-tight">{turf.name}</h3>
                    <p className="text-primary-300 text-sm flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {turf.location}
                    </p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-neutral-300 font-medium">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{turf.type}</span>
                  </div>
                  <p className="text-neutral-400 leading-relaxed">{turf.description}</p>
                  <button className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors">
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-950 via-primary-900 to-accent-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white leading-[1.1]">
              Ready to Experience Our Facilities?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-100 max-w-2xl mx-auto leading-[1.6] font-medium">
              Join our community and get access to the best sports infrastructure.
              Your journey to greatness starts with the right environment.
            </p>
            <a
              href="/register"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-neutral-100 text-primary-900 rounded-xl font-bold text-lg shadow-premium-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Register Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}