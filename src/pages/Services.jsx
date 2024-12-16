import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaPaintBrush, FaChartLine, FaMobile, FaServer, FaSearch } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isDarkMode } = useTheme();

  const services = [
    {
      icon: <FaCode className="text-blue-500" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO-friendly Structure"],
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience and engagement.",
      features: ["User Research", "Wireframing", "Prototype Development"],
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence and reach your target audience.",
      features: ["Social Media Marketing", "Content Strategy", "Email Campaigns"],
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["Cross-platform Development", "Native Apps", "App Store Optimization"],
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Robust and scalable server-side solutions to power your applications.",
      features: ["API Development", "Database Design", "Cloud Integration"],
    },
    {
      icon: <FaSearch />,
      title: "SEO Services",
      description: "Improve your search engine rankings and increase organic traffic.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO"],
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Comprehensive digital solutions for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`p-8 rounded-xl backdrop-blur-sm border ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-800' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="text-3xl mb-6">{service.icon}</div>
              <h3 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {service.title}
              </h3>
              <p className={`mb-6 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;