import React, { useState, useEffect } from 'react';
import { Code, Database, Wrench, Globe } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js', 'Express.js', 'Next.js', 'Angular.js', 'Django', 'Tailwind CSS', 'Java Swing'],
      gradient: 'from-indigo-500 to-violet-500'
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MongoDB', 'Firebase', 'SQLite', 'SQL', 'DBMS'],
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Wrench,
      title: 'Tools & Others',
      skills: ['Git & GitHub', 'REST APIs', 'API Integration', 'Vercel', 'Vite'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="group relative"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 h-full hover:border-opacity-50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-lg w-fit mb-4`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill} className="relative">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{skill}</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${category.gradient} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: isVisible ? `${85 + Math.random() * 15}%` : '0%',
                              transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl">
            <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
            <div className="text-gray-700 dark:text-gray-300">Programming Languages & Frameworks</div>
          </div>
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl">
            <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
            <div className="text-gray-700 dark:text-gray-300">Database Technologies</div>
          </div>
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl">
            <div className="text-3xl font-bold text-pink-400 mb-2">5+</div>
            <div className="text-gray-700 dark:text-gray-300">Development Tools</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
