import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Heart } from 'lucide-react';
import { Rss } from 'lucide-react'; // Using Rss icon as a close representation of Medium

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          {/* Brand and Description Section */}
          <div className="md:col-span-2 text-center md:text-left">
            <Link
              to="hero"
              spy={true}
              smooth="easeInOutQuad"
              offset={-70}
              duration={300}
              className="text-2xl font-bold gradient-text cursor-pointer inline-block mb-4"
            >
              Ajith P M
            </Link>
            <p className="text-gray-400 mb-6 max-w-md mx-auto md:mx-0">
              A passionate Full Stack Developer with a focus on creating beautiful, functional, and user-friendly applications.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="https://github.com/Ajithpmdwaraka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-primary hover:neon-border transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ajithpmdwaraka/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-primary hover:neon-border transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://medium.com/@ajithpmdwaraka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-primary hover:neon-border transition-all duration-300"
              >
                <Rss size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link.toLowerCase()}
                    spy={true}
                    smooth="easeInOutQuad"
                    offset={-70}
                    duration={300}
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Dwaraka, Puliyaparamb Kodunthirapully(PO), Palakkad Kerala India.
              </li>
              <li>
                <a 
                  href="mailto:ajithpmdwaraka@gmail.com" 
                  className="text-gray-400 hover:text-primary transition-colors block"
                >
                  ajithpmdwaraka@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919846494210" 
                  className="text-gray-400 hover:text-primary transition-colors block"
                >
                  +91 9846494210
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} All rights reserved. Made with{' '}
            <Heart size={16} className="text-red-500 mx-1" /> and React by Ajith P M.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;