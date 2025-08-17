import React from 'react';
import { Award, Trophy, Users, BookOpen, Star, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      category: 'Professional Memberships',
      icon: Users,
      gradient: 'from-blue-500 to-indigo-500',
      items: [
        'Member of Data Science Students Association',
        'Technical Member of IEI Club',
        'Corporate Member of ACM Club',
        'MUN Society Member at SRM'
      ]
    },
    {
      category: 'Certifications',
      icon: BookOpen,
      gradient: 'from-indigo-500 to-violet-500',
      items: [
        'Certified in C and C++ (Udemy)',
        'NPTEL Certificate in Java Programming',
        'NPTEL Certificate in Database Management Systems'
      ]
    },
    {
      category: 'Coding Achievements',
      icon: Star,
      gradient: 'from-violet-500 to-purple-500',
      items: [
        'Gold Badge in C Programming (HackerRank)',
        'Gold Badge in C++ Programming (HackerRank)',
        'Gold Badge in Python (HackerRank)'
      ]
    },
    {
      category: 'Competition Recognition',
      icon: Trophy,
      gradient: 'from-purple-500 to-pink-500',
      items: [
        'Runner-up in Hybrid Hack at SRM University',
        'Active participant in coding competitions',
        'Recognition for innovative project solutions'
      ]
    }
  ];

  const stats = [
    { number: '4+', label: 'Professional Memberships', icon: Users, color: 'text-blue-400' },
    { number: '6+', label: 'Certifications', icon: Award, color: 'text-indigo-400' },
    { number: '3', label: 'Gold Badges', icon: Medal, color: 'text-violet-400' },
    { number: '1st', label: 'Runner-up Position', icon: Trophy, color: 'text-purple-400' }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Activities & Achievements
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Recognition for academic excellence, professional development, and technical expertise
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-full bg-slate-800 mb-4`}>
                  <IconComponent className={stat.color} size={24} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Achievement Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.category}
                className="group relative"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full hover:border-opacity-50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-xl mr-4`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start group/item"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full mt-3 mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`}></div>
                        <p className="text-slate-300 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Recognition & Impact</h3>
            <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
              These achievements reflect my commitment to continuous learning, active participation in 
              professional communities, and dedication to excellence in computer science and technology. 
              Each milestone represents growth in technical skills, leadership capabilities, and contribution 
              to the broader tech community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;