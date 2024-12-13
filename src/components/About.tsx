import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Smartphone,
    Server,
} from 'lucide-react';

const About: React.FC = () => {
    const [activeSkill, setActiveSkill] = useState<string | null>(null);

    const skills = [
        {
            icon: Code,
            title: 'Front-End Development',
            description: 'Crafting responsive and interactive user interfaces using React, Next.js, and modern web technologies.'
        },
        {
            icon: Smartphone,
            title: 'Mobile Development',
            description: 'Building cross-platform mobile applications with React Native and Flutter, ensuring smooth user experiences.'
        },
        {
            icon: Server,
            title: 'Back-End Solutions',
            description: 'Developing scalable backend systems with Node.js, Express, and databases like MongoDB and PostgreSQL.'
        }
    ];

    return (
        <section
            id="about"
            className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-gray-300 overflow-hidden"
        >
            {/* Animated Background Pattern */}
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
                    className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    About Me
                </motion.h2>

                {/* Personal Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 mb-12"
                >
                    <p className="text-xl leading-relaxed text-center mb-6">
                        Hello, I'm <span className="text-blue-400 font-bold">Cody Marsengill</span>, a dedicated full-stack web and mobile developer with 3 years of experience crafting robust, scalable, and user-friendly solutions.
                    </p>
                    <p className="text-xl leading-relaxed text-center">
                        I thrive on tackling complex challenges, transforming innovative ideas into impactful digital experiences that solve real-world problems.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2
                            }}
                            onHoverStart={() => setActiveSkill(skill.title)}
                            onHoverEnd={() => setActiveSkill(null)}
                            className={`
                                relative p-6 rounded-xl border-2 text-center transition-all duration-300 ${activeSkill === skill.title
                                    ? 'bg-blue-900/50 border-blue-500 scale-105'
                                    : 'bg-white/10 border-white/20 hover:bg-white/20'}
                            `}
                        >
                            <div className="flex justify-center mb-4">
                                <skill.icon
                                    className={`
                                        w-16 h-16 ${activeSkill === skill.title
                                            ? 'text-blue-400'
                                            : 'text-gray-400'}
                                    `}
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">
                                {skill.title}
                            </h3>
                            {activeSkill === skill.title && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-sm text-gray-300"
                                >
                                    {skill.description}
                                </motion.p>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;