import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Users, Award, Trophy, AlignCenterVertical as Certificate, Medal, Star } from 'lucide-react';

const Activities = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const activityCategories = [
    {
      title: 'Clubs & Organizations',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      activities: [
        { name: 'DSBS Students Association', role: 'Member', color: 'from-blue-500 to-blue-600' },
        { name: 'IEI DSBS Student Chapter', role: 'Technical Member', color: 'from-green-500 to-green-600' },
        { name: 'ACM SigKDD', role: 'Corporate Member', color: 'from-purple-500 to-purple-600' },
        { name: 'SRMMUN Society', role: 'Member[2024-2025]', color: 'from-orange-500 to-orange-600' }
        
      ]
    },
    {
      title: 'Certifications & Badges',
      icon: Certificate,
      gradient: 'from-green-500 to-emerald-500',
      activities: [
        { name: 'C & C++ Certification', role: 'Udemy Certified', color: 'from-indigo-500 to-indigo-600' },
        { name: 'HackerRank Gold Badges', role: 'C, C++, Python', color: 'from-yellow-500 to-yellow-600' },
        { name: 'NPTEL Java Certificate', role: 'Elite Grade', color: 'from-green-500 to-green-600' },
        { name: 'NPTEL DBMS Certificate', role: 'Elite Grade', color: 'from-blue-500 to-blue-600' }
      ]
    },
    {
      title: 'Hackathons & Awards',
      icon: Trophy,
      gradient: 'from-purple-500 to-pink-500',
      activities: [
        { name: 'Hybrid Hack @ SRM', role: 'Runner-up', color: 'from-purple-600 to-pink-600' },
        { name: 'Inter & Intra-College Hackathons', role: 'Participation', color: 'from-orange-500 to-red-500' }
      ]
    }
  ];

  return (
    <section id="activities" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Activities & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">My involvement in various organizations and accomplishments</p>
          </div>

          <div className="space-y-16">
            {activityCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className={`transform transition-all duration-700 ${
                  isIntersecting 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-[-100px] opacity-0'
                }`}
                style={{ transitionDelay: `${categoryIndex * 300}ms` }}
              >
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <category.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.activities.map((activity, activityIndex) => (
                      <div 
                        key={activity.name}
                        className={`transform transition-all duration-500 ${
                          isIntersecting 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: `${(categoryIndex * 300) + (activityIndex * 150)}ms` }}
                      >
                        <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border-2 border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-rotate-1 h-full">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className={`w-10 h-10 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <Star size={20} className="text-white" />
                              </div>
                              <Medal size={16} className="text-yellow-500" />
                            </div>

                            <div className="space-y-2">
                              <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                                {activity.name}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                                {activity.role}
                              </p>
                            </div>

                            <div className={`w-full h-1 bg-gradient-to-r ${activity.color} rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg border-2 border-blue-200/20 dark:border-blue-700/20 rounded-2xl px-8 py-4">
              <Trophy className="text-yellow-500" size={24} />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                Continuous Learning & Active Engagement
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;