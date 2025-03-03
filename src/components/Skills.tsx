import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Layout, Figma, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: <Code size={24} className="text-primary" />,
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Vue.js', level: 75 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    name: 'Backend',
    icon: <Server size={24} className="text-primary" />,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Django', level: 70 },
      { name: 'Laravel', level: 65 },
      { name: 'GraphQL', level: 75 },
      { name: 'REST API', level: 90 },
    ],
  },
  {
    name: 'Database',
    icon: <Database size={24} className="text-primary" />,
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Firebase', level: 85 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    name: 'Design',
    icon: <Layout size={24} className="text-primary" />,
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 75 },
      { name: 'UI/UX', level: 80 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Wireframing', level: 85 },
    ],
  },
  {
    name: 'Tools',
    icon: <Figma size={24} className="text-primary" />,
    skills: [
      { name: 'VS Code', level: 95 },
      { name: 'Webpack', level: 80 },
      { name: 'Vite', level: 85 },
      { name: 'Jest', level: 75 },
      { name: 'Cypress', level: 70 },
    ],
  },
  {
    name: 'DevOps',
    icon: <GitBranch size={24} className="text-primary" />,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 80 },
      { name: 'Netlify/Vercel', level: 85 },
    ],
  },
];

const Skills: React.FC = () => {
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
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 hover:neon-border transition-all duration-300"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
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