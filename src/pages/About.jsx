import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isDarkMode } = useTheme();

  const values = [
    {
      icon: <FaLightbulb className="text-4xl text-blue-500" />,
      title: "Innovation",
      description: "We stay ahead of technological trends to deliver cutting-edge solutions.",
    },
    {
      icon: <FaHandshake className="text-4xl text-blue-500" />,
      title: "Partnership",
      description: "We build lasting relationships with our clients through trust and collaboration.",
    },
    {
      icon: <FaRocket className="text-4xl text-blue-500" />,
      title: "Excellence",
      description: "We strive for excellence in every project we undertake.",
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
            About Us
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Learn about our mission and values
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-500 mb-6">Our Story</h2>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              MESH TECH DIGITAL was founded with a vision to bridge the gap between technology and business success. We understand that in today's digital age, having a strong online presence is crucial for any business to thrive.
            </p>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Our team of experienced professionals combines creativity with technical expertise to deliver solutions that not only look great but also drive results. We take pride in our ability to understand our clients' unique needs and transform their vision into reality.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
          </div>
        </motion.div>

        <div className={`py-20 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-blue-500 mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`p-8 rounded-xl backdrop-blur-sm border ${
                  isDarkMode 
                    ? 'bg-gray-900/50 border-gray-800' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {value.title}
                </h3>
                <p className={`text-center ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;