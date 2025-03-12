import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, BookOpen } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-darker via-dark to-darker opacity-90"></div>
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2 
            className="text-base md:text-xl font-light mb-2 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I'm
          </motion.h2>
          
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 animate-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="gradient-text">Ajith P M</span>
          </motion.h1>
          
          <motion.div
            className="text-lg md:text-2xl font-mono mb-4 h-10 md:h-12 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1000,
                'Backend Developer',
                1000,
                'Frontend Developer',
                1000,
                'Problem Solver',
                1000,
                'Tech Enthusiast',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-xs sm:max-w-lg md:max-w-xl mx-auto text-gray-300 mb-4 text-xs sm:text-sm md:text-base"
          >
            I create elegant, high-performance web applications with modern technologies.
            Specializing in React, Node.js, and cutting-edge UI design.
          </motion.p>
          
          <motion.div
            className="flex flex-col xs:flex-row gap-3 justify-center mb-4 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              className="w-full xs:w-auto"
            >
              <button className="w-full xs:w-auto px-5 sm:px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity text-xs sm:text-sm">
                Hire Me
              </button>
            </Link>
            
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              className="w-full xs:w-auto"
            >
              <button className="w-full xs:w-auto px-5 sm:px-6 py-2 rounded-full bg-transparent border border-gray-500 text-white font-medium hover:border-primary transition-colors text-xs sm:text-sm">
                View Projects
              </button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center space-x-4"
          >
            <a href="https://github.com/Ajithpmdwaraka" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors duration-300">
              <Github size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ajithpmdwaraka/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors duration-300">
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="https://medium.com/@ajithpmdwaraka" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors duration-300">
              <BookOpen size={18} className="sm:w-5 sm:h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
          className="cursor-pointer"
        >
          <ChevronDown size={20} className="sm:w-6 sm:h-6 text-primary" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;