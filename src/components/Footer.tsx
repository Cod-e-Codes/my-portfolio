import React from 'react';
import { motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    Heart
} from 'lucide-react';

const Footer: React.FC = () => {
    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/cod-e-codes",
            label: "GitHub",
            color: "text-gray-300 hover:text-white hover:bg-gray-800"
        },
        {
            icon: Linkedin,
            href: "https://linkedin.com/in/cod-e-codes",
            label: "LinkedIn",
            color: "text-blue-400 hover:text-blue-500 hover:bg-blue-900"
        },
        {
            icon: Mail,
            href: "mailto:contact@codecodes.dev",
            label: "Email",
            color: "text-red-400 hover:text-red-500 hover:bg-red-900"
        }
    ];

    return (
        <footer className="py-12 bg-gradient-to-br from-gray-950 to-gray-900 text-gray-400 relative overflow-hidden">
            {/* Animated Background Particles */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 bg-grid-white/5 pointer-events-none"
            />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Social Links with Hover Effects */}
                <motion.div
                    className="flex justify-center space-x-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, staggerChildren: 0.1 }}
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 rounded-full transition-all duration-300 
                                       ${link.color} bg-opacity-10 hover:bg-opacity-20`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={link.label}
                        >
                            <link.icon size={24} strokeWidth={1.5} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Animated Gradient Divider */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '6rem' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
                />

                {/* Footer Text with Subtle Animation */}
                <motion.p
                    className="text-sm flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    &copy; {new Date().getFullYear()}
                    <span className="mx-2 text-white font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        CodēCodes
                    </span>
                    All Rights Reserved
                    <Heart className="ml-2 text-red-500 animate-pulse" size={16} />
                </motion.p>

                {/* Additional Subtle Text */}
                <motion.p
                    className="text-xs text-gray-600 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    Crafted with passion | Powered by Innovation
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;