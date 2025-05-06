import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Server, 
  Database, 
  Layout, 
  Terminal, 
  Globe,
  Star
} from 'lucide-react';

const skillCategories = [
  {
    name: 'Languages',
    icon: <Code size={24} className="text-primary" />,
    skills: [
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'HTML/CSS', level: 'Expert' },
    ],
  },
  {
    name: 'Frontend',
    icon: <Layout size={24} className="text-primary" />,
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Ant Design', level: 'Proficient' },
      { name: 'Framer Motion', level: 'Advanced' },
      { name: 'Three.js', level: 'Proficient' },
      { name: 'AOS', level: 'Proficient' },
    ],
  },
  {
    name: 'Backend',
    icon: <Server size={24} className="text-primary" />,
    skills: [
      { name: 'Django', level: 'Advanced' },
      { name: 'Django Rest Framework', level: 'Advanced' },
      { name: 'FastAPI', level: 'Proficient' },
      { name: 'REST APIs', level: 'Advanced' },
      { name: 'JWT', level: 'Advanced' },
      { name: 'ORM', level: 'Advanced' },
      { name: 'Redis', level: 'Proficient' },
      { name: 'Swagger', level: 'Proficient' },
    ],
  },
  {
    name: 'Database',
    icon: <Database size={24} className="text-primary" />,
    skills: [
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
    ],
  },
  {
    name: 'Tools & Platforms',
    icon: <Terminal size={24} className="text-primary" />,
    skills: [
      { name: 'Git/GitHub', level: 'Advanced' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'AWS', level: 'Proficient' },
      { name: 'CI/CD', level: 'Proficient' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'Vercel', level: 'Advanced' },
      { name: 'Netlify', level: 'Advanced' },
      { name: 'NPM/Yarn', level: 'Advanced' },
      { name: 'Poetry', level: 'Proficient' },
    ],
  },
  {
    name: 'Other',
    icon: <Globe size={24} className="text-primary" />,
    skills: [
      { name: 'AI/ML', level: 'Proficient' },
      { name: 'Agile & Scrum', level: 'Advanced' },
      { name: 'Jira', level: 'Proficient' },
      { name: 'Responsive Design', level: 'Advanced' },
    ],
  },
];

// Mapping for skill level to number of filled stars
const levelToStars: Record<string, number> = {
  'Expert': 5,
  'Advanced': 4,
  'Proficient': 3,
  'Intermediate': 2,
  'Beginner': 1
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="skills" className="bg-dark py-20">
      <div className="section-container">
        <motion.h2
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Skills & Expertise
        </motion.h2>
        
        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeCategory === index 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden sm:block">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>
        
        {/* Skills Display */}
        <motion.div
          className="mt-12 glass-card p-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <motion.div
                key={i}
                className="flex flex-col p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/20"
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-lg text-white">{skill.name}</span>
                  <span className="text-sm text-primary">{skill.level}</span>
                </div>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      className={`${
                        starIndex < levelToStars[skill.level]
                          ? 'text-primary fill-primary'
                          : 'text-gray-600'
                      } mr-1`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-16 glass-card p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Want to work together?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;