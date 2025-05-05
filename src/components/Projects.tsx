import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X } from 'lucide-react';
import ToyClub from '../assests/toyclub.png';
import PortFolio from '../assests/portfolio.png';
import PKS from '../assests/PKS.png';
import SCS from '../assests/SCS.png';
import PhotoFish from '../assests/photofish.png'
import CoreStone from '../assests/corestone.png';

const projects = [
  {
    title: 'ToyClub E-Commerce Platform',
    category: 'Web Development',
    image: ToyClub,
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment processing.',
    technologies: ['React', 'Typescript', 'Three.js', 'Supabase', 'Framer-Motion'],
    liveLink: 'https://toyclub-wholesale-whisper.vercel.app/',
    githubLink: 'https://github.com',
  },
  {
    title: 'Poona Keraleeya Samaj',
    category: 'Web Application',
    image: PKS,
    description: 'A task management application with drag-and-drop functionality, user authentication, and real-time updates. Built with React, Firebase, and Tailwind CSS.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'React DnD'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Portfolio Website',
    category: 'Web Design',
    image: PortFolio,
    description: 'A modern portfolio website with smooth animations, responsive design, and dark mode. Built with Next.js and Framer Motion.',
    technologies: ['React.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    liveLink: 'ajithpm.vercel.app',
    githubLink: 'https://github.com/Ajithpmdwaraka/my-portfolio',
  },
  {
    title: 'SwiftCrafting Solutions',
    category: 'Web Application',
    image: SCS,
    description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations. Built with React and the OpenWeatherMap API.',
    technologies: ['React', 'OpenWeatherMap API', 'Chart.js', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'PhotoFish-AI',
    category: 'Full Stack',
    image: PhotoFish,
    description: 'A blog platform with user authentication, markdown support, and comment functionality. Built with Next.js, Prisma, and PostgreSQL.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'CoreStone Innovations',
    category: 'Mobile App',
    image: CoreStone,
    description: 'A fitness tracking application that allows users to track workouts, set goals, and view progress. Built with React Native and Firebase.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
];

const categories = ['All', 'Web Development', 'Web Application', 'Web Design', 'Full Stack', 'Mobile App'];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="bg-darker py-20">
      <div className="section-container">
        <motion.h2
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          My Projects
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card overflow-hidden group"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary">
                        {project.category}
                      </span>
                      <button
                        className="text-white bg-primary/20 p-2 rounded-full hover:bg-primary/40 transition-colors"
                        onClick={() => setSelectedProject(project)}
                      >
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:text-secondary transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:text-secondary transition-colors flex items-center gap-1"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-dark rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-64 sm:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
                <button
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {selectedProject.category}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary/40 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary/40 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <ExternalLink size={16} /> View Live Demo
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full bg-transparent border border-gray-600 text-white font-medium hover:border-primary transition-colors flex items-center gap-2"
                  >
                    <Github size={16} /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;