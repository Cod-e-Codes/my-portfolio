import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Award,
    X,
} from 'lucide-react';

import ibmMobileThumbnail from '../assets/ibm-ios-and-android-mobile-app-developer-thumbnail.jpeg';
import metaReactNativeThumbnail from '../assets/meta-react-native-thumbnail.jpeg';
import pythonForEverybodyThumbnail from '../assets/python-for-everybody-thumbnail.jpeg';
import ibmAIThumbnail from '../assets/ibm-ai-developer-thumbnail.jpeg';
import googleUXThumbnail from '../assets/google-ux-design-thumbnail.jpeg';
import ibmFrontEndThumbnail from '../assets/ibm-front-end-developer-thumbnail.jpeg';
import metaFrontEndThumbnail from '../assets/meta-front-end-developer-thumbnail.jpeg';
import ibmFullStackThumbnail from '../assets/ibm-full-stack-software-developer-thumbnail.jpeg';
import ibmBackEndThumbnail from '../assets/ibm-back-end-development-thumbnail.jpeg';
import metaBackEndThumbnail from '../assets/meta-back-end-developer-thumbnail.jpeg';

const certifications = [
    {
        title: 'IBM iOS and Android Mobile App Developer',
        issuer: 'IBM',
        thumbnail: ibmMobileThumbnail,
        fullImage: ibmMobileThumbnail,
        description: 'Advanced mobile development certification focusing on cross-platform app creation.',
        skills: ['iOS', 'Android', 'Mobile Development']
    },
    {
        title: 'Meta React Native Certification',
        issuer: 'Meta',
        thumbnail: metaReactNativeThumbnail,
        fullImage: metaReactNativeThumbnail,
        description: 'Comprehensive React Native development training and certification.',
        skills: ['React Native', 'Mobile Development', 'JavaScript']
    },
    {
        title: 'Python for Everybody',
        issuer: 'University of Michigan',
        thumbnail: pythonForEverybodyThumbnail,
        fullImage: pythonForEverybodyThumbnail,
        description: 'Foundational Python programming course covering data structures and web development.',
        skills: ['Python', 'Programming', 'Data Structures']
    },
    {
        title: 'IBM AI Developer',
        issuer: 'IBM',
        thumbnail: ibmAIThumbnail,
        fullImage: ibmAIThumbnail,
        description: 'Advanced artificial intelligence and machine learning development certification.',
        skills: ['AI', 'Machine Learning', 'Deep Learning']
    },
    {
        title: 'Google UX Design',
        issuer: 'Google',
        thumbnail: googleUXThumbnail,
        fullImage: googleUXThumbnail,
        description: 'Comprehensive user experience design professional certification.',
        skills: ['UX Design', 'UI/UX', 'Design Thinking']
    },
    {
        title: 'IBM Front-End Developer',
        issuer: 'IBM',
        thumbnail: ibmFrontEndThumbnail,
        fullImage: ibmFrontEndThumbnail,
        description: 'Advanced front-end web development and modern web technologies certification.',
        skills: ['React', 'JavaScript', 'Web Development']
    },
    {
        title: 'Meta Front-End Developer',
        issuer: 'Meta',
        thumbnail: metaFrontEndThumbnail,
        fullImage: metaFrontEndThumbnail,
        description: 'Professional front-end development certification with focus on React ecosystem.',
        skills: ['React', 'Front-End', 'Web Development']
    },
    {
        title: 'IBM Full-Stack Software Developer',
        issuer: 'IBM',
        thumbnail: ibmFullStackThumbnail,
        fullImage: ibmFullStackThumbnail,
        description: 'Comprehensive full-stack development certification covering multiple technologies.',
        skills: ['Full-Stack', 'Backend', 'Frontend']
    },
    {
        title: 'IBM Back-End Development',
        issuer: 'IBM',
        thumbnail: ibmBackEndThumbnail,
        fullImage: ibmBackEndThumbnail,
        description: 'Advanced back-end development certification focusing on server-side technologies.',
        skills: ['Backend', 'Server-Side', 'Database']
    },
    {
        title: 'Meta Back-End Developer',
        issuer: 'Meta',
        thumbnail: metaBackEndThumbnail,
        fullImage: metaBackEndThumbnail,
        description: 'Professional back-end development certification with focus on server-side technologies.',
        skills: ['Python', 'Linux', 'Git', 'SQL', 'Cloud Hosting', 'APIs']
    }
];

const Certifications: React.FC = () => {
    const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

    return (
        <section
            id="certifications"
            className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-gray-300 overflow-hidden"
        >
            {/* Animated Background */}
            <motion.div
                initial={{ opacity: 0.1 }}
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    rotate: [0, 5, -5, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 pointer-events-none"
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Animated Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    <Award className="inline-block mr-4 text-blue-400" size={48} />
                    Certifications
                </motion.h2>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                            className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                            onClick={() => setSelectedCert(cert)}
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={cert.thumbnail}
                                    alt={`${cert.title} thumbnail`}
                                    className="w-16 h-16 mr-4 rounded-md object-cover shadow-lg group-hover:scale-110 transition-transform"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition">
                                        {cert.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {cert.issuer}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {cert.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2 py-1 bg-white/10 text-xs rounded-full text-gray-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certification Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white/10 backdrop-blur-xl rounded-2xl max-w-4xl w-full p-8 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 text-white hover:text-blue-400 transition"
                            >
                                <X size={32} />
                            </button>

                            <div className="flex flex-col md:flex-row items-center">
                                <img
                                    src={selectedCert.fullImage}
                                    alt={selectedCert.title}
                                    className="w-64 h-64 object-cover rounded-xl shadow-2xl mb-6 md:mb-0 md:mr-8"
                                />
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-4">
                                        {selectedCert.title}
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        {selectedCert.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedCert.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;