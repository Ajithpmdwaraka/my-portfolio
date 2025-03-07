import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Rss } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

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
    <section id="contact" className="bg-darker py-16 md:py-20">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-heading text-center text-3xl md:text-4xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6 md:space-y-8"
          >
            <motion.h3 
              className="text-xl md:text-2xl font-bold mb-4 md:mb-6"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              Contact Information
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              Feel free to reach out to me for any inquiries, project discussions, or just to say hello. I'm always open to new opportunities and collaborations.
            </motion.p>
            
            <div className="space-y-4 md:space-y-6">
              {[
                { 
                  icon: <Mail size={20} className="text-primary" />, 
                  title: 'Email', 
                  content: 'ajithpmdwaraka@gmail.com',
                  link: 'mailto:ajithpmdwaraka@gmail.com'
                },
                { 
                  icon: <Phone size={20} className="text-primary" />, 
                  title: 'Phone', 
                  content: '+91 9846494210',
                  link: 'tel:+91 9846494210'
                },
                { 
                  icon: <MapPin size={20} className="text-primary" />, 
                  title: 'Location', 
                  content: 'Dwaraka House, Palakkad, Kerala, India',
                  link: null
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3 md:gap-4"
                  variants={itemVariants}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-2 md:p-3 rounded-full bg-gray-800">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold mb-1">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm md:text-base">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-6 md:mt-10"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-base md:text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-3 md:gap-4">
                {[
                  { icon: <Github size={20} />, link: 'https://github.com/Ajithpmdwaraka' },
                  { icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/in/ajithpmdwaraka/' },
                  { icon: <Rss size={20} />, link: 'https://medium.com/@ajithpmdwaraka' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 rounded-full bg-gray-800 text-gray-300 hover:text-primary hover:neon-border transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="glass-card p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Send Me a Message</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-900/20 border border-green-500 rounded-lg p-4 text-center"
              >
                <h4 className="text-lg md:text-xl font-semibold text-green-500 mb-2">Message Sent!</h4>
                <p className="text-gray-300 text-sm md:text-base">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { 
                    name: 'name', 
                    label: 'Your Name', 
                    type: 'text', 
                    placeholder: 'John Doe' 
                  },
                  { 
                    name: 'email', 
                    label: 'Your Email', 
                    type: 'email', 
                    placeholder: 'john@example.com' 
                  },
                  { 
                    name: 'subject', 
                    label: 'Subject', 
                    type: 'text', 
                    placeholder: 'Project Inquiry' 
                  }
                ].map((field) => (
                  <div key={field.name}>
                    <label 
                      htmlFor={field.name} 
                      className="block text-xs md:text-sm font-medium text-gray-300 mb-1"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-gray-800 border text-sm md:text-base ${
                        errors[field.name] ? 'border-red-500' : 'border-gray-700'
                      } text-white focus:outline-none focus:border-primary transition-colors`}
                      placeholder={field.placeholder}
                    />
                    {errors[field.name] && (
                      <p className="mt-1 text-xs text-red-500">{errors[field.name]}</p>
                    )}
                  </div>
                ))}
                
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-xs md:text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-gray-800 border text-sm md:text-base ${
                      errors.message ? 'border-red-500' : 'border-gray-700'
                    } text-white focus:outline-none focus:border-primary transition-colors`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 md:px-6 py-2 md:py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16}  />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;