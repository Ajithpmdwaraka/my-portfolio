import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Layout, Cloud } from 'lucide-react';
import ajithPhoto from '../assests/ajith-photo.jpg'

const tabs = [
  { id: 'about', label: 'About Me' },
  { id: 'services', label: 'Services' },
  { id: 'expertise', label: 'Expertise' },
];

const services = [
  {
    icon: <Code size={24} className="text-primary" />,
    title: 'Full-Stack Development',
    description: 'Building scalable, user-centric web applications using React, TypeScript, Django, and FastAPI, with seamless frontend and backend integration',
  },
  {
    icon: <Server size={24} className="text-primary" />,
    title: 'API Development',
    description: 'Designing secure, high-performance RESTful APIs with Django REST Framework.',
  },
  {
    icon: <Layout size={24} className="text-primary" />,
    title: 'Responsive Frontend Design',
    description: 'Crafting intuitive, responsive, and engaging user interfaces using React, and animation libraries like Framer Motion and Three.js.',
  },
  {
    icon: <Cloud size={24} className="text-primary" />,
    title: 'DevOps & Deployment',
    description: 'Implementing CI/CD pipelines, Docker, and AWS deployments to ensure efficient, scalable, and production-ready application delivery.',
  },
];

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="bg-dark py-12">
      <div className="section-container">
        <motion.h2
          className="section-heading text-center text-2xl md:text-3xl lg:text-4xl mb-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          About Me
        </motion.h2>
        
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1 rounded-full bg-gray-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="neumorphic p-2">
                <img
                  src={ajithPhoto}
                  alt="Ajith P M"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-secondary p-4 rounded-lg">
                <p className="text-white font-bold text-sm">Available for hire</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {activeTab === 'about' && (
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  I'm a <span className="gradient-text">Full Stack Developer</span> with a passion for creating beautiful, functional websites
                </h3>
                <p className="text-gray-300 mb-4 text-xm md:text-base">
                I'm a results-driven Software Developer with a postgraduate degree in Software Application Development. Specializing in full-stack development, I build scalable, user-centric applications using modern frontend and backend technologies. With impactful internship experience, I’ve architected secure Django REST APIs, integrated AWS Rekognition, and developed responsive React applications.
                </p>
                <p className="text-gray-300 mb-4 text-xm md:text-base">
                Proficient in Python, JavaScript, TypeScript, React, Django, and AWS, I’m passionate about solving complex problems with elegant solutions, thriving in collaborative environments, and delivering exceptional, innovative projects.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-gray-400 text-sm">Name:</p>
                    <p className="font-medium text-sm md:text-base">Ajith P M</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location:</p>
                    <p className="font-medium text-sm md:text-base">Kochi, Kerala</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-gray-400 text-sm">Email:</p>
                    <p className="font-medium text-sm md:text-base truncate">ajithpmdwaraka@gmail.com</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-gray-400 text-sm">Availability:</p>
                    <p className="font-medium text-green-500 text-sm md:text-base">Available for hire</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'services' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="glass-card p-4 transition-all duration-300 hover:neon-border">
                    <div className="mb-3">{service.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base">{service.description}</p>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'expertise' && (
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3">Technical Expertise</h3>
                <p className="text-gray-300 mb-4 text-sm md:text-base">
                  I specialize in full-stack development with expertise in both frontend and backend technologies. My technical skills include:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-sm md:text-base">Languages: Python, JavaScript, TypeScript, SQL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-sm md:text-base">Frontend: React.js, Tailwind CSS, Ant Design, Framer Motion, AOS, Three.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-sm md:text-base">Backend: Django, DRF, FastAPI, REST APIs, ORM, Swagger, JWT, Redis
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-sm md:text-base">Database: PostgreSQL, MongoDB, MySQL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-sm md:text-base">DevOps: Docker, AWS, CI/CD, Git</span>
                  </li>
                </ul>
                <p className="text-gray-300 text-sm md:text-base">
                  I'm constantly learning and adapting to new technologies to stay at the forefront of software development.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;