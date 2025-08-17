import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, Send, User, MessageSquare, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');



// ...inside your Contact component...

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs.send(
    'service_2dpggj5',      // Your Service ID
    'template_izic80z',     // Your Template ID
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: 'Contact Form Submission', 
    },
    '4OqKq_WspifGSkStk'     // Your Public Key -- use this as "user ID"
  )
  .then(() => {
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
  }, () => {
    setSubmitStatus('error');
  })
  .finally(() => {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 5000);
  });
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:keerthanaworkspace13@gmail.com',
      color: 'from-red-500 to-orange-500',
      label: 'keerthanaworkspace13@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/keerthana-sri-d-99b753312',
      color: 'from-blue-600 to-blue-700',
      label: 'Connect on LinkedIn'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/keerthu-sri',
      color: 'from-gray-700 to-gray-900',
      label: 'View on GitHub'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ready to collaborate or have a question? I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 text-gray-900 dark:text-white transition-all duration-200"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 text-gray-900 dark:text-white transition-all duration-200"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 text-gray-400" size={20} />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                          placeholder="Tell me about your project or just say hello..."
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg">
                      <CheckCircle size={20} />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg">
                      <AlertCircle size={20} />
                      <span>Failed to send message. Please try again or email me directly.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Social Links & Info */}
            <div className="space-y-8">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Other Ways to Connect
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <link.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {link.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {link.label}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-200/20 dark:border-blue-700/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Let's Build Something Amazing
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on projects, 
                  or simply chat about technology and innovation. Don't hesitate to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;