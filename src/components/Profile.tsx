import React from 'react';
import { GraduationCap, Heart, Target } from 'lucide-react';
import aboutimg from "../assets/about2.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about building innovative, real-world applications. 
            Eager to collaborate and contribute to impactful software products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold">M.Tech (Integrated) Computer Science Engineering</span><br />
                Specialization in Data Science<br />
                SRM Institute of Science and Technology<br />
                <span className="text-indigo-600 dark:text-indigo-400">2023-2028</span>
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-indigo-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Goals
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Focused on creating innovative solutions that make a real difference. 
                I thrive in collaborative environments and am always eager to learn 
                new technologies and contribute to meaningful projects.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-violet-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg mr-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Hobbies
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Dancing', 'Drawing', 'Crafting', 'Doodling'].map(hobby => (
                  <span
                    key={hobby}
                    className="px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-400/30 rounded-full text-violet-700 dark:text-violet-300 text-sm"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={aboutimg} 
              alt="Coding workspace"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-lg font-medium">
                <!-Strive / Perceive / Accomplish>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
