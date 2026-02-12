import { Calendar, MapPin, Users, Trophy, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Tournaments() {
  const upcomingTournaments = [
    {
      id: 1,
      name: 'Spring Football Championship',
      sport: 'Football',
      date: '2026-03-15',
      location: 'Central Stadium',
      participants: 16,
      status: 'Registration Open',
      prize: '$5,000',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 2,
      name: 'City Basketball League',
      sport: 'Basketball',
      date: '2026-03-22',
      location: 'Sports Arena',
      participants: 12,
      status: 'Registration Open',
      prize: '$3,500',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 3,
      name: 'Cricket Premier Series',
      sport: 'Cricket',
      date: '2026-04-05',
      location: 'Cricket Ground',
      participants: 8,
      status: 'Registration Open',
      prize: '$7,500',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 4,
      name: 'Swimming Nationals',
      sport: 'Swimming',
      date: '2026-04-12',
      location: 'Aquatic Center',
      participants: 50,
      status: 'Registration Open',
      prize: '$4,000',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  const pastTournaments = [
    {
      id: 5,
      name: 'Winter Football Cup',
      sport: 'Football',
      date: '2025-12-10',
      winner: 'Team Thunder',
      participants: 16,
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 6,
      name: 'Basketball Invitational',
      sport: 'Basketball',
      date: '2025-11-25',
      winner: 'Court Kings',
      participants: 10,
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 7,
      name: 'Cricket Championship',
      sport: 'Cricket',
      date: '2025-10-15',
      winner: 'Warriors XI',
      participants: 12,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 8,
      name: 'Swimming Grand Prix',
      sport: 'Swimming',
      date: '2025-09-20',
      winner: 'Wave Riders',
      participants: 45,
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 pt-20">
      {/* Header */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-neutral-950 via-primary-950/20 to-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary-200 to-accent-200 bg-clip-text text-transparent">
                Tournaments
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Compete with the best and showcase your skills. 
              Join prestigious tournaments and make your mark.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">Upcoming Tournaments</h2>
              <p className="text-neutral-400">Don't miss your chance to compete</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-green-400 font-semibold text-sm">Registration Open</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {upcomingTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:scale-105 hover:shadow-premium-lg">
                  {/* Header with gradient */}
                  <div className={`relative h-32 bg-gradient-to-br ${tournament.color} p-6`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent"></div>
                    <div className="relative flex items-start justify-between h-full">
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 mb-3">
                          <span className="text-white text-sm font-semibold">{tournament.sport}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{tournament.name}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-1">{tournament.prize}</div>
                        <div className="text-sm text-white/80 font-medium">Prize Pool</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3 text-neutral-300">
                        <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-primary-400" />
                        </div>
                        <div>
                          <div className="text-sm text-neutral-500 uppercase tracking-wider">Date</div>
                          <div className="font-semibold">
                            {new Date(tournament.date).toLocaleDateString('en-US', { 
                              month: 'long', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-neutral-300">
                        <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary-400" />
                        </div>
                        <div>
                          <div className="text-sm text-neutral-500 uppercase tracking-wider">Location</div>
                          <div className="font-semibold">{tournament.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-neutral-300">
                        <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary-400" />
                        </div>
                        <div>
                          <div className="text-sm text-neutral-500 uppercase tracking-wider">Participants</div>
                          <div className="font-semibold">{tournament.participants} Teams/Players</div>
                        </div>
                      </div>
                    </div>

                    <Link
                      to="/register"
                      className="group/btn w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 flex items-center justify-center gap-2"
                    >
                      Register Now
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Tournaments */}
      <section className="py-16 md:py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">Past Tournaments</h2>
            <p className="text-neutral-400">Celebrating our champions and their achievements</p>
          </motion.div>

          <div className="space-y-4">
            {pastTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-primary-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-premium-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-white">{tournament.name}</h3>
                        <div className={`px-3 py-1 bg-gradient-to-r ${tournament.color} rounded-lg`}>
                          <span className="text-white text-sm font-semibold">{tournament.sport}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-6 text-neutral-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary-400" />
                          <span className="text-sm">
                            {new Date(tournament.date).toLocaleDateString('en-US', { 
                              month: 'long', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary-400" />
                          <span className="text-sm">{tournament.participants} Participants</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-yellow-500/10 border border-yellow-500/30 px-6 py-4 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/30">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Winner</div>
                        <div className="text-lg font-bold text-white">{tournament.winner}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Info */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Tournament Information</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Everything you need to know about our tournaments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Calendar,
                title: 'Regular Schedule',
                description: 'We host tournaments year-round across all our sports disciplines. Check the schedule above for upcoming events.',
                color: 'from-primary-500 to-primary-600',
              },
              {
                icon: Trophy,
                title: 'Prizes & Awards',
                description: 'All tournaments feature cash prizes, trophies, and certificates for winners. Top performers also earn points towards our annual rankings.',
                color: 'from-yellow-500 to-orange-500',
              },
              {
                icon: Clock,
                title: 'Registration',
                description: 'Registration typically opens 6-8 weeks before each tournament. Early bird discounts available for the first 50% of slots.',
                color: 'from-accent-500 to-accent-600',
              },
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 hover:shadow-premium-lg">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{info.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
