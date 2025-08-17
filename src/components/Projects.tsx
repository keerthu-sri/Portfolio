import React, { useState } from 'react';
import { Github, ExternalLink, Code, Database, Brain, MessageCircle, Utensils, Wrench } from 'lucide-react';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Food Ordering System',
      description: 'Java Swing-based application with SQL & Java backend for restaurant order management with user authentication and order tracking.',
      technologies: ['Java Swing', 'SQL', 'Java Backend'],
      category: 'Desktop Application',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Neighborhood Tool Management System',
      description: 'Python-React web app for community tool sharing, allowing neighbors to lend and borrow tools efficiently.',
      technologies: ['Python', 'React.js', 'Community Web App'],
      category: 'Web Application',
      githubUrl: 'https://github.com/keerthu-sri/Neighbourhood_tool_management_system'
    },
    {
      id: 3,
      title: 'Weather Forecast Web App',
      description: 'React application with API integration providing real-time weather updates and forecasts for multiple locations.',
      technologies: ['React.js', 'API Integration', 'Weather API'],
      category: 'Web Application',
      githubUrl: 'https://github.com/keerthu-sri/Weatherappacm'
    },
    {
      id: 4,
      title: 'Derma Care Skincare Platform',
      description: 'React and Node.js platform connecting patients with dermatologists for skincare treatments and consultations.',
      technologies: ['React.js', 'Node.js', 'Healthcare Platform'],
      category: 'Full Stack Application',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Diabetes Prediction System',
      description: 'Django web application using scikit-learn ML model to predict diabetes risk with real-time analysis and dataset integration.',
      technologies: ['Django', 'scikit-learn', 'Machine Learning', 'AI/ML'],
      category: 'AI/ML Application',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'MERN stack chat app with React, Node.js, Express, and MongoDB featuring live messaging via Socket.IO and session-based authentication.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
      category: 'MERN Stack',
      githubUrl: '#'
    }
  ];

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'Desktop Application':
        return Utensils;
      case 'Web Application':
        return Code;
      case 'Full Stack Application':
        return Database;
      case 'AI/ML Application':
        return Brain;
      case 'MERN Stack':
        return MessageCircle;
      default:
        return Wrench;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Desktop Application':
        return 'from-blue-600 to-cyan-600';
      case 'Web Application':
        return 'from-green-600 to-teal-600';
      case 'Full Stack Application':
        return 'from-purple-600 to-pink-600';
      case 'AI/ML Application':
        return 'from-orange-600 to-red-600';
      case 'MERN Stack':
        return 'from-indigo-600 to-purple-600';
      default:
        return 'from-gray-600 to-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore my diverse portfolio of applications spanning web development, AI/ML, and full-stack solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = getProjectIcon(project.category);
            const colorClass = getCategoryColor(project.category);
            const isFlipped = flippedCard === project.id;

            return (
              <div
                key={project.id}
                className="group perspective-1000 h-80"
                onMouseEnter={() => setFlippedCard(project.id)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''} shadow-xl shadow-black/20 rounded-2xl`}>
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/20 p-6 flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${colorClass} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Hover to see details
                        </p>
                        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center">
                          <ExternalLink className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/60 dark:bg-gray-800/60 rounded-full text-xs text-gray-700 dark:text-gray-300 border border-white/30 dark:border-gray-700/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-400">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/20 p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-white/60 dark:bg-gray-800/60 rounded-md text-xs text-gray-700 dark:text-gray-300 border border-white/30 dark:border-gray-700/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-sm text-center"
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
