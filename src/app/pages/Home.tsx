import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, TrendingUp, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../components/ui/carousel';

export function Home() {
  const stats = [
    { icon: Trophy, label: 'Tournaments', value: '50+', color: 'from-primary-500 to-primary-600' },
    { icon: Users, label: 'Active Members', value: '500+', color: 'from-accent-500 to-accent-600' },
    { icon: Calendar, label: 'Events/Year', value: '100+', color: 'from-primary-600 to-accent-600' },
    { icon: TrendingUp, label: 'Championships', value: '25+', color: 'from-accent-600 to-primary-700' },
  ];

  const sports = [
    {
      name: 'Football',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=95',
      heroImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=95'
    },
    {
      name: 'Basketball',
      image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=95',
      heroImage: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=95'
    },
    {
      name: 'Cricket',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=95',
      heroImage: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=95'
    },
    {
      name: 'Basketball',
      image: 'https://images.unsplash.com/photo-1552657244-5f6e1e6b152b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=95',
      heroImage: 'https://images.unsplash.com/photo-1552657244-5f6e1e6b152b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=95'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <Carousel plugins={[Autoplay({ delay: 5000 })]} className="w-full h-full">
            <CarouselContent>
              {sports.map((sport, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[90vh]">
                    <ImageWithFallback
                      src={sport.heroImage || sport.image}
                      alt={sport.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/85 via-neutral-950/75 to-neutral-950/85"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-semibold backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Elite Sports Excellence Since 2010
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-neutral-100 to-primary-200 bg-clip-text text-transparent drop-shadow-lg">
              Where Champions
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-accent-300 to-primary-300 bg-clip-text text-transparent drop-shadow-lg">
              Are Made
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-neutral-200 max-w-3xl mx-auto leading-[1.4] font-light tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join a community of elite athletes, world-class facilities, and championship-winning programs.
            <span className="block mt-2 text-lg md:text-xl text-neutral-300">
              Your journey to greatness starts here.
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/register"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-premium-lg shadow-primary-500/30 hover:shadow-glow-lg hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Join Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </Link>
            <Link
              to="/tournaments"
              className="px-8 py-4 bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-800/70 text-white font-semibold text-lg rounded-xl border border-neutral-700 hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
            >
              View Tournaments
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-500 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 md:py-40 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.08),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
              <span className="bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                Our Legacy
              </span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-[1.6] font-medium">
              Numbers that speak to our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative bg-neutral-800/80 backdrop-blur-sm border border-neutral-600 rounded-2xl p-10 hover:border-primary-500/60 transition-all duration-300 hover:scale-105 hover:shadow-premium-lg hover:shadow-primary-500/20">
                  <div className={`flex justify-center mb-6`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <motion.div
                    className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-neutral-200 bg-clip-text text-transparent leading-[1.1]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: 'spring' }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-neutral-200 font-semibold text-sm uppercase tracking-[0.15em] leading-[1.4]">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="relative py-32 md:py-40 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
              <span className="bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                Our Sports
              </span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-[1.6] font-medium">
              World-class training across multiple disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {sports.map((sport, index) => (
              <motion.div
                key={index}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer bg-neutral-900"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 w-full h-full">
                    <ImageWithFallback
                      src={sport.image}
                      alt={sport.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent pointer-events-none z-20"></div>
                  <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-300 pointer-events-none z-30"></div>
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                  <motion.h3
                    className="text-3xl md:text-4xl font-black text-white mb-3 leading-[1.1] tracking-tight"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {sport.name}
                  </motion.h3>
                  <div className="flex items-center gap-2 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-12 h-12 bg-neutral-900/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-neutral-800">
                  <Trophy className="w-6 h-6 text-primary-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-primary-950 via-primary-900 to-accent-950 overflow-hidden">
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
              Ready to Join Us?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-100 max-w-2xl mx-auto leading-[1.6] font-medium">
              Be part of our growing community of elite athletes and sports enthusiasts.
              <span className="block mt-2">Your journey to greatness starts with a single step.</span>
            </p>
            <Link
              to="/register"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-neutral-100 text-primary-900 rounded-xl font-bold text-lg shadow-premium-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Register Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
