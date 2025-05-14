import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, ExternalLink } from 'lucide-react';

const educationItems = [
  {
    icon: <GraduationCap size={24} className="text-primary" />,
    degree: 'Masters in Software Application Development',
    institution: 'Cochin University Of Science And Technology',
    period: '2023 - 2025',
    description: 'Developed advanced skills in full-stack development and system design. Focused on real-world applications.',
  },
  {
    icon: <GraduationCap size={24} className="text-primary" />,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Govt Victoria College Pkd, Calicut University',
    period: '2020 - 2023',
    description: 'Studied programming, OOP, DSA, and core computer science. Built a strong technical foundation.',
  },
];

const certifications = [
  {
    icon: <Award size={24} className="text-primary" />,
    title: 'NPTEL Blockchain and its Applications',
    issuer: 'IIT Kharagpur',
    date: '2024',
    url: 'https://drive.google.com/file/d/1dyFrXsaQjMvs2DwCinAXaNE-0fwKulld/view'
  },
  {
    icon: <Award size={24} className="text-primary" />,
    title: 'Python Programming: The Complete Course',
    issuer: 'Udemy',
    date: '2025',
    url: 'https://www.udemy.com/certificate/UC-175657ad-5f63-4258-84e8-b5bee938816b/'
  },
  {
    icon: <Award size={24} className="text-primary" />,
    title: 'Data Structure Using Python 2025',
    issuer: 'Udemy',
    date: '2025',
    url: 'https://udemy.com/certificate/data-structures-python'
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
                  <p className="text-sm text-primary font-medium mb-2">{cert.date}</p>
                  
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors font-medium mt-2"
                  >
                    View Certificate <ExternalLink size={16} />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;