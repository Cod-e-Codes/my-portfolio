import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-center">
            {/* Animated Title */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
            >
                404
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                className="text-lg text-gray-300 mb-6"
            >
                Oops! The page you're looking for doesn't exist.
            </motion.p>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            >
                <Link
                    to="/"
                    className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-transform transform hover:scale-105 shadow-lg"
                >
                    Go Back Home
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
