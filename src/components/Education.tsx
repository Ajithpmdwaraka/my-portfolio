import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const educationItems = [
  {
    icon: <GraduationCap size={24} className="text-primary" />,
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    period: '2014 - 2016',
    description: 'Specialized in Human-Computer Interaction and Machine Learning. Graduated with honors.',
  },
  {
    icon: <GraduationCap size={24} className="text-primary" />,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of California, Berkeley',
    period: '2010 - 2014',
    description: 'Focused on software engineering and web development. Participated in multiple hackathons.',
  },
];

const certifications = [
  {
    icon: <Award size={24} className="text-primary" />,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2022',
  },
  {
    icon: <Award size={24} className="text-primary" />,
    title: 'Google Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: '2021',
  },
  {
    icon: <Award size={24} className="text-primary" />,
    title: 'React Advanced Certification',
    issuer: 'Meta',
    date: '2020',
  },
];

const Education: React.FC = () => {
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
    <section id="education" className="bg-dark py-20">
      <div className="section-container">
        <motion.h2
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Education & Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen size={24} className="text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 hover:neon-border transition-all duration-300"
                  variants={itemVariants}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {item.icon}
                    <h4 className="text-xl font-bold">{item.degree}</h4>
                  </div>
                  <p className="text-gray-300 mb-1">{item.institution}</p>
                  <p className="text-sm text-primary font-medium mb-3">{item.period}</p>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award size={24} className="text-primary" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 hover:neon-border transition-all duration-300"
                  variants={itemVariants}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {cert.icon}
                    <h4 className="text-xl font-bold">{cert.title}</h4>
                  </div>
                  <p className="text-gray-300 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-primary font-medium">{cert.date}</p>
                </motion.div>
              ))}
              
              <motion.div
                className="glass-card p-6 hover:neon-border transition-all duration-300"
                variants={itemVariants}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-xl font-bold mb-3">Additional Courses</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-gray-300">Advanced JavaScript - Udemy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-gray-300">UI/UX Design Fundamentals - Coursera</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-gray-300">Data Structures & Algorithms - MIT OpenCourseWare</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;