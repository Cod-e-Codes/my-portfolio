import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Send, Star } from 'lucide-react';

import heroImage from '../assets/hero-image.png';
import technologyPattern from '../assets/technology-pattern.png';

const Hero: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center 
                       bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 
                       text-center px-4 py-16 overflow-hidden"
        >
            {/* Animated Background Overlay */}
            <motion.div
                initial={{ opacity: 0.1 }}
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0"
            >
                <img
                    src={technologyPattern}
                    alt="Technology Pattern"
                    className="w-full h-full object-cover opacity-20 pointer-events-none"
                />
            </motion.div>

            {/* Hero Content Container */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-4xl mx-auto"
            >
                {/* Animated Profile Image */}
                <motion.div
                    className="relative w-56 h-56 md:w-72 md:h-72 mx-auto mb-8"
                    whileHover={{
                        scale: 1.05,
                        rotate: 3,
                        transition: { duration: 0.3 }
                    }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    {/* Dynamic Glow Effect */}
                    <motion.div
                        className={`absolute -inset-4 bg-blue-500/50 rounded-full blur-3xl transition-all duration-500 ${isHovered ? 'opacity-70' : 'opacity-30'
                            }`}
                    />

                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-md"></div>
                        <img
                            src={heroImage}
                            alt="Profile"
                            className="relative z-10 rounded-full object-cover w-full h-full border-4 border-white/20 shadow-2xl"
                        />
                    </div>
                </motion.div>

                {/* Dynamic Title */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 
                               bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    CodēCodes
                </h1>

                {/* Animated Typewriter */}
                <div className="mb-8 px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                    <p className="text-xl md:text-2xl text-gray-200 font-medium flex items-center justify-center">
                        <Typewriter
                            words={[
                                'Where Code Meets Creativity',
                                'Crafting Digital Experiences',
                                'Innovating Through Technology'
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={50}
                            deleteSpeed={30}
                        />
                    </p>
                </div>

                {/* Enhanced Call-to-Action Buttons */}
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                    <motion.a
                        href="#projects"
                        className="flex items-center justify-center px-8 py-3 
                                   bg-gradient-to-r from-green-500 to-green-600 
                                   text-white text-lg rounded-lg 
                                   hover:from-green-600 hover:to-green-700 
                                   transition transform hover:scale-105 
                                   shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Star className="mr-2" size={20} />
                        View Projects
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/newsletters/code-chronicles-7269023711842783232"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-8 py-3 
                                   bg-gradient-to-r from-blue-500 to-blue-600 
                                   text-white text-lg rounded-lg 
                                   hover:from-blue-600 hover:to-blue-700 
                                   transition transform hover:scale-105 
                                   shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Send className="mr-2" size={20} />
                        Newsletter
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;