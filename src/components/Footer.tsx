import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          <div className="md:col-span-2">
            <Link
              to="hero"
              spy={true}
              smooth="easeInOutQuad"
              offset={-70}
              duration={300}
              className="text-2xl font-bold gradient-text cursor-pointer inline-block mb-4"
            >
              John Doe
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              A passionate Full Stack Developer with a focus on creating beautiful, functional, and user-friendly applications.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-primary hover:neon-border transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-primary hover:neon-border transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-primary hover:neon-border transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth="easeInOutQuad"
                  offset={-70}
                  duration={300}
                  className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth="easeInOutQuad"
                  offset={-70}
                  duration={300}
                  className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth="easeInOutQuad"
                  offset={-70}
                  duration={300}
                  className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth="easeInOutQuad"
                  offset={-70}
                  duration={300}
                  className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                San Francisco, California, USA
              </li>
              <li>
                <a href="mailto:john@example.com" className="text-gray-400 hover:text-primary transition-colors">
                  john@example.com
                </a>
              </li>
              <li>
                <a href="tel:+11234567890" className="text-gray-400 hover:text-primary transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            © {currentYear} John Doe. All rights reserved. Made with <Heart size={16} className="text-red-500" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;