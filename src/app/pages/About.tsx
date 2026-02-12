import { Target, Heart, Award, Users, TrendingUp, Calendar, Star } from 'lucide-react';
import { motion } from 'motion/react';

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
    { name: 'John Smith', role: 'Club President', experience: '15 years in sports management', initials: 'JS' },
    { name: 'Sarah Johnson', role: 'Head Coach', experience: 'Olympic medalist and certified trainer', initials: 'SJ' },
    { name: 'Mike Davis', role: 'Tournament Director', experience: '10+ years organizing events', initials: 'MD' },
    { name: 'Emma Wilson', role: 'Youth Program Director', experience: 'Specialized in youth development', initials: 'EW' },
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
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-neutral-950 via-primary-950/20 to-neutral-950 overflow-hidden">
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

      {/* History Timeline */}
      <section className="py-24 md:py-32 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                Our History
              </span>
            </h2>
            <p className="text-xl text-neutral-400">
              A journey of excellence and growth
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-neutral-900 transform md:-translate-x-1/2 z-10 shadow-lg shadow-primary-500/50"></div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-6 md:p-8 hover:border-primary-500/50 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg">
                          <span className="text-white font-bold text-lg">{item.year}</span>
                        </div>
                        <Calendar className="w-5 h-5 text-primary-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                      <p className="text-neutral-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                    {member.initials}
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
