import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Seeroo IT Solutions',
    period: 'Jan 2025 - Apr 2025',
    description:
      'Architected a Django REST API backend for PhotoFish, an AI-powered facial recognition platform. Integrated AWS Rekognition for facial detection, implemented OAuth and OTP-based authentication, and designed secure, high-performance RESTful APIs. Implemented CI/CD pipelines and connected the backend to a PostgreSQL database for robust and scalable data management. Thoroughly tested all endpoints using Postman and documented the API with Swagger for seamless developer collaboration',
  },
  {
    title: 'Software Developer Intern',
    company: 'N-OMS Consultancy Pvt Ltd',
    period: 'Apr 2024 - Sep 2024',
    description:
      'Developed dynamic and responsive web applications using React and TypeScript. Spearheaded the development of the Pune Keeraleeya Samaj platform from the ground up, delivering a clean and scalable architecture. Contributed a robust, feature-rich Calendar Component to a large-scale Office Management System, integrating it seamlessly with backend APIs for real-time data interaction and improved user engagement',
  }
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
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="bg-darker py-16 md:py-20">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold mb-10 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Work Experience
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl shadow-lg bg-gray-900/80 border border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-primary hover:bg-gray-800/90"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gray-800">
                  <Briefcase size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-gray-400 text-sm">{exp.company}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-primary font-medium mb-2">{exp.period}</p>
              <p className="text-gray-300 text-sm sm:text-base">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
