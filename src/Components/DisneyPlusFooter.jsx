import React from 'react';
import { motion } from 'framer-motion';

const DisneyPlusFooter = () => {
  const footerLinks = {
    company: [
      'About Disney+',
      'Careers',
      'Press',
      'Investor Relations',
      'Contact Us'
    ],
    support: [
      'Help Center',
      'Account & Billing',
      'Supported Devices',
      'Accessibility',
      'Gift Cards'
    ],
    legal: [
      'Terms of Use',
      'Privacy Policy',
      'Cookie Policy',
      'Interest-Based Ads',
      'Content Complaints'
    ],
    social: [
      { name: 'Facebook', icon: '📘' },
      { name: 'Twitter', icon: '🐦' },
      { name: 'Instagram', icon: '📷' },
      { name: 'YouTube', icon: '📺' }
    ]
  };

  const disneyBrands = [
    { name: 'Disney', logo: '🏰' },
    { name: 'Pixar', logo: '⭐' },
    { name: 'Marvel', logo: '🦸' },
    { name: 'Star Wars', logo: '⚔️' },
    { name: 'National Geographic', logo: '🌍' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden border-t-2 border-gray-700">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Disney Brands Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-8 border-b border-gray-700/50"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Stream from these beloved brands
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {disneyBrands.map((brand, index) => (
              <motion.div
                key={brand.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                  {brand.logo}
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4 text-blue-300">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4 text-purple-300">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4 text-pink-300">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media & App Download */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4 text-cyan-300">Connect</h4>
            <div className="flex gap-3 mb-6">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>

            {/* App Download Buttons */}
            <div className="space-y-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors text-sm"
              >
                <span>📱</span>
                <span>Download for iOS</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors text-sm"
              >
                <span>🤖</span>
                <span>Download for Android</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-6 border-t border-gray-700/50"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Logo and Copyright */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D+</span>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Disney+
                </span>
              </div>
              <span className="text-gray-400 text-sm">
                © 2025 Disney+ Clone. All rights reserved.
              </span>
            </motion.div>

            {/* Language Selector */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <select className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                <option value="en">🇺🇸 English</option>
                <option value="es">🇪🇸 Español</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="de">🇩🇪 Deutsch</option>
              </select>
              <span className="text-gray-400 text-sm">
                Magic happens here ✨
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default DisneyPlusFooter;