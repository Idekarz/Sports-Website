import { Target, Heart, Award, Users, TrendingUp, Calendar, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our club, from training to competition, setting the highest standards for ourselves and our athletes.',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for sports drives us to push boundaries and achieve greatness. Passion is the fuel that powers our commitment.',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: Award,
      title: 'Achievement',
      description: 'We celebrate every victory and learn from every challenge. Achievement is not just about winning—it\'s about growth.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong, supportive community of athletes and enthusiasts. Together we are stronger, together we achieve more.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const team = [
    { name: 'John Smith', role: 'Club President', experience: '15 years in sports management', initials: 'JS', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { name: 'Sarah Johnson', role: 'Head Coach', experience: 'Olympic medalist and certified trainer', initials: 'SJ', image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { name: 'Mike Davis', role: 'Tournament Director', experience: '10+ years organizing events', initials: 'MD', image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { name: 'Emma Wilson', role: 'Youth Program Director', experience: 'Specialized in youth development', initials: 'EW', image: 'https://images.pexels.com/photos/3621583/pexels-photo-3621583.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
  ];

  const timeline = [
    { year: '2010', title: 'Foundation', description: 'Sports Club was founded by a group of passionate athletes with a vision to create a premier sports organization that would nurture talent and promote excellence.' },
    { year: '2015', title: 'Expansion', description: 'Opened our state-of-the-art training facility and expanded to include multiple sports disciplines including football, basketball, cricket, and swimming.' },
    { year: '2020', title: 'National Recognition', description: 'Our athletes won 5 national championships, establishing us as one of the top sports clubs in the country.' },
    { year: '2025', title: 'Continued Growth', description: 'Today, we proudly serve over 500 active members and host more than 100 events annually, continuing our tradition of excellence and community engagement.' },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-neutral-950 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="About Sports Club"
            className="w-full h-full object-cover opacity-30 px-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F1A] via-[#0F0F1A]/50 to-[#0F0F1A]"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary-200 to-accent-200 bg-clip-text text-transparent">
                About Sports Club
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
              Empowering athletes since 2010, we are committed to fostering talent, 
              building character, and creating champions both on and off the field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl"></div>
              <div className="relative bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 md:p-10 hover:border-primary-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  To provide exceptional sports training, competitive opportunities, and a supportive 
                  environment where athletes of all levels can develop their skills, build character, 
                  and achieve their full potential. We are dedicated to promoting health, teamwork, 
                  and excellence in everything we do.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500/10 rounded-full blur-2xl"></div>
              <div className="relative bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 md:p-10 hover:border-accent-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-accent-500/30">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Vision</h2>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  To be the leading sports club recognized for developing world-class athletes and 
                  fostering a vibrant community of sports enthusiasts. We envision a future where 
                  every member has the opportunity to excel, compete at the highest levels, and 
                  inspire the next generation of champions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 hover:shadow-premium-lg">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-24 md:py-32 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                Tournaments
              </span>
            </h2>
            <p className="text-xl text-primary-400 font-semibold mt-4 bg-primary-900/20 inline-block px-6 py-2 rounded-full border border-primary-500/30">
              * Dates to be decided for all events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Football */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Football</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { name: 'Frenzy Cup', desc: '5v5 (Knockout)' },
                  { name: 'Fútbol Fiesta', desc: '6v6 to 9v9 (Knockout)' },
                  { name: 'Derby Day', desc: '7v7 (Knockout)' },
                  { name: 'Atheos Cup', desc: '11v11 (League + Knockout)' },
                  { name: 'Atheos Shield', desc: '11v11 (League + Knockout)' },
                ].map((t, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-neutral-700/50 pb-3 last:border-0 last:pb-0">
                    <span className="text-white font-semibold">{t.name}</span>
                    <span className="text-primary-400 text-sm ml-4 text-right">{t.desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Basketball */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 hover:border-accent-500/50 transition-all duration-300 hover:shadow-purple-glow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Basketball</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { name: 'Slam It', desc: '5v5 (Knockout)' },
                  { name: 'Hoopers Cup', desc: '5v5 (League + Knockout), 3v3 (Knockout)' },
                ].map((t, i) => (
                  <li key={i} className="flex flex-col border-b border-neutral-700/50 pb-3 last:border-0 last:pb-0">
                    <span className="text-white font-semibold">{t.name}</span>
                    <span className="text-accent-400 text-sm mt-1">{t.desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Marathon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-glow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Marathon</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-neutral-700/50 pb-3">
                  <span className="text-white font-semibold">Minithon</span>
                  <span className="text-emerald-400 text-sm font-medium">5K / 10K</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 md:py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                Our Leadership Team
              </span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 text-center hover:border-primary-500/50 transition-all duration-300 hover:scale-105 hover:shadow-premium-lg">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mx-auto mb-6 overflow-hidden shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <div className="text-primary-400 font-semibold mb-3">{member.role}</div>
                  <p className="text-neutral-400 text-sm leading-relaxed">{member.experience}</p>
                  <div className="mt-4 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
