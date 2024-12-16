import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaTwitter, FaLinkedinIn, FaBehance, FaDribbble } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import developerImage from '../assets/OIP.jpeg';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isDarkMode } = useTheme();

  const socialLinks = [
    { icon: <FaGithub size={24} />, href: "#" },
    { icon: <FaTwitter size={24} />, href: "#" },
    { icon: <FaLinkedinIn size={24} />, href: "#" },
    { icon: <FaBehance size={24} />, href: "#" },
    { icon: <FaDribbble size={24} />, href: "#" },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`transition-colors ${
                      isDarkMode ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-blue-500'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Main Content */}
              <div>
                <motion.h1 
                  className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Welcome to MESH TECH DIGITAL
                </motion.h1>
                <motion.p 
                  className={`text-lg mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  I'm a developer with extensive experience for over 3 years. 
                  My expertise is to create and develop websites, backend systems, 
                  and databases and digital marketing.
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors">
                    View Projects
                  </button>
                  <button className={`border px-8 py-3 rounded-full transition-colors ${
                    isDarkMode 
                      ? 'border-blue-500 hover:bg-blue-500/10 text-white' 
                      : 'border-blue-500 hover:bg-blue-500/10 text-gray-800'
                  }`}>
                    Contact Me
                  </button>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src={developerImage}
                  alt="Developer coding"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover h-[400px]"
                />
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 blur-3xl"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={ref} className={`py-20 border-t ${
        isDarkMode ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-500">My Skills</h2>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Technologies I work with
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`p-6 rounded-xl backdrop-blur-sm border ${
                  isDarkMode 
                    ? 'bg-gray-900/50 border-gray-800' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <h3 className={`text-lg font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "Python", level: 80 },
  { name: "MongoDB", level: 85 },
  { name: "SQL", level: 80 },
  { name: "AWS", level: 75 },
  { name: "Docker", level: 70 },
];

export default Home;