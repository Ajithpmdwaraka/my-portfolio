import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2021 - Present',
    description: 'Lead the frontend development team in building modern web applications using React and TypeScript. Implemented CI/CD pipelines and improved performance by 40%.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    period: '2019 - 2021',
    description: 'Developed and maintained full-stack applications using React, Node.js, and MongoDB. Collaborated with UX designers to implement responsive designs and interactive features.',
  },
  {
    title: 'Web Developer',
    company: 'Creative Agency',
    period: '2017 - 2019',
    description: 'Built client websites using HTML, CSS, JavaScript, and WordPress. Worked directly with clients to gather requirements and implement solutions that met their needs.',
  },
  {
    title: 'Junior Developer',
    company: 'Startup Hub',
    period: '2016 - 2017',
    description: 'Assisted in the development of web applications and gained experience with modern frontend frameworks and backend technologies.',
  },
];

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="bg-darker py-20">
      <div className="section-container">
        <motion.h2
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Work Experience
        </motion.h2>
        
        <motion.div
          className="timeline-container mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card p-6 max-w-lg mx-auto md:mx-0 hover:neon-border transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-gray-800">
                    <Briefcase size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                </div>
                <p className="text-sm text-primary font-medium mb-3">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;