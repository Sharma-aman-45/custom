import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-100">{subtitle}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;