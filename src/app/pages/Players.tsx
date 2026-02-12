import { useState } from 'react';
import { Trophy, Award, Target, TrendingUp, Star, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Players() {
  const [selectedSport, setSelectedSport] = useState('All');

  const sports = ['All', 'Football', 'Basketball', 'Cricket', 'Swimming'];

  const players = [
    {
      id: 1,
      name: 'Soham Milind Idekar',
      sport: 'Football',
      position: 'Defender',
      achievements: ['Top Scorer 2024', 'MVP Award 2023'],
      stats: { matches: 45, goals: 32, assists: 18 },
      rating: 5,
    },
    {
      id: 2,
      name: 'Ketan Sawant',
      sport: 'Football',
      position: 'Mids',
      achievements: ['All-Star 2024', 'Best Defender 2023'],
      stats: { matches: 50, points: 856, assists: 234 },
      rating: 5,
    },
    {
      id: 3,
      name: 'Kshitij ',
      sport: 'Football',
      position: 'All-rounder',
      achievements: ['Player of the Series 2024', 'Best All-rounder 2023'],
      stats: { matches: 38, runs: 1234, wickets: 45 },
      rating: 5,
    },
    {
      id: 4,
      name: 'Marcus Chen',
      sport: 'Swimming',
      position: 'Freestyle Specialist',
      achievements: ['National Champion 2024', 'Record Holder 100m'],
      stats: { races: 62, wins: 48, records: 3 },
      rating: 5,
    },
    {
      id: 5,
      name: 'Sofia Rodriguez',
      sport: 'Football',
      position: 'Midfielder',
      achievements: ['Best Midfielder 2024', 'Team Captain'],
      stats: { matches: 48, goals: 15, assists: 25 },
      rating: 4,
    },
    {
      id: 6,
      name: 'Tyler Johnson',
      sport: 'Basketball',
      position: 'Center',
      achievements: ['Rookie of the Year 2024', 'Dunking Champion'],
      stats: { matches: 42, points: 678, rebounds: 312 },
      rating: 4,
    },
    {
      id: 7,
      name: 'Aisha Patel',
      sport: 'Cricket',
      position: 'Bowler',
      achievements: ['Best Bowler 2024', 'Hat-trick Achievement'],
      stats: { matches: 35, wickets: 67, economy: 4.2 },
      rating: 5,
    },
    {
      id: 8,
      name: 'Emma Thompson',
      sport: 'Swimming',
      position: 'Butterfly Specialist',
      achievements: ['Regional Champion 2024', 'Olympic Qualifier'],
      stats: { races: 55, wins: 42, records: 2 },
      rating: 4,
    },
  ];

  const filteredPlayers = selectedSport === 'All' 
    ? players 
    : players.filter(player => player.sport === selectedSport);

  const getSportColor = (sport: string) => {
    const colors: Record<string, string> = {
      'Football': 'from-green-500 to-emerald-500',
      'Basketball': 'from-orange-500 to-red-500',
      'Cricket': 'from-blue-500 to-indigo-500',
      'Swimming': 'from-cyan-500 to-blue-500',
    };
    return colors[sport] || 'from-primary-500 to-accent-500';
  };

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
                Our Players
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Meet the talented athletes who make our club proud. 
              Champions in their sport, leaders in their community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 py-6 bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <div className="flex items-center gap-2 text-neutral-400">
              <Filter className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Filter:</span>
            </div>
            {sports.map((sport) => (
              <motion.button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  selectedSport === sport
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 border border-neutral-700'
                }`}
              >
                {sport}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSport}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {filteredPlayers.map((player, index) => (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:scale-105 hover:shadow-premium-lg">
                    {/* Player Header */}
                    <div className={`relative h-32 bg-gradient-to-br ${getSportColor(player.sport)} p-6`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent"></div>
                      <div className="relative flex items-center justify-between">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white text-2xl font-bold border-2 border-white/20 shadow-lg">
                          {player.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            {[...Array(player.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <div className="text-xs text-white/80 font-semibold uppercase tracking-wider">
                            {player.sport}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Player Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 text-white">{player.name}</h3>
                      <div className="text-primary-400 font-semibold mb-4">{player.position}</div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-4 h-4 text-yellow-500" />
                          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Achievements</span>
                        </div>
                        <div className="space-y-2">
                          {player.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Trophy className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-neutral-300 leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="border-t border-neutral-800 pt-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="w-4 h-4 text-primary-400" />
                          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Season Stats</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {Object.entries(player.stats).map(([key, value]) => (
                            <div key={key} className="text-center p-2 bg-neutral-800/50 rounded-lg">
                              <div className="text-lg font-bold text-white mb-1">{value}</div>
                              <div className="text-xs text-neutral-500 uppercase tracking-wider">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Performance Indicator */}
                      <div className="mt-4 pt-4 border-t border-neutral-800">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-neutral-500 uppercase tracking-wider">Performance</span>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-semibold text-green-500">Excellent</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPlayers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-neutral-500 text-lg">No players found for the selected sport.</div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
