import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code,
    Database,
    Palette,
    Cpu,
    GitBranch,
    Brain,
    Wrench,
} from 'lucide-react';

const skillsByCategory = [
    {
        category: 'Front-End',
        skills: [
            'JavaScript', 'TypeScript', 'React', 'Three.js', 'TailwindCSS',
            'HTML5', 'CSS3', 'SCSS/SASS', 'LESS', 'jQuery', 'Bootstrap',
            'Material-UI', 'Next.js', 'Vue.js', 'Redux', 'Webpack', 'Vite'
        ],
        icon: Code
    },
    {
        category: 'Back-End',
        skills: [
            'Node.js', 'MySQL', 'RESTful APIs', 'PHP', 'C#', 'PostgreSQL',
            'MongoDB', 'SQLite', 'Firebase', 'MariaDB', 'FastAPI',
            'Flask', 'Django', 'GraphQL'
        ],
        icon: Database
    },
    {
        category: 'Design',
        skills: [
            'Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD', 'Figma', 'Canva',
            'Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Animate', 'Adobe Audition'
        ],
        icon: Palette
    },
    {
        category: 'Programming Languages',
        skills: [
            'Python', 'Java', 'C++', 'C#', 'Ruby', 'Swift', 'Kotlin', 'PHP', 'Rust',
            'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS', 'JSON', 'XML', 'GraphQL',
            'C'
        ],
        icon: Cpu
    },
    {
        category: 'Tools',
        skills: [
            'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jenkins', 'Jira', 'Confluence',
            'Trello', 'Slack', 'Jira', 'Visual Studio Code', 'IntelliJ IDEA', 'PyCharm',
            'Android Studio', 'Xcode', 'Visual Studio', 'Eclipse', 'PyCharm', 'IntelliJ IDEA',
        ],
        icon: GitBranch
    },
    {
        category: 'AI/ML',
        skills: [
            'TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'Matplotlib', 'Seaborn',
            'Numpy', 'Pandas', 'OpenCV', 'Scipy', 'PyTorch', 'PyTorch Lightning',
            'HuggingFace'
        ],
        icon: Brain
    },
    {
        category: 'Frameworks',
        skills: [
            'Angular', 'Ember.js', 'Backbone.js', 'Express.js', 'Laravel', 'Symfony',
            'Flask', 'Django', 'Next.js', 'Vue.js', 'React', 'Next.js', 'React Native',
            'Flutter', 'Electron', 'Nuxt.js', 'Nest.js'
        ],
        icon: Wrench
    },
];

const Skills: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<typeof skillsByCategory[0] | null>(null);

    return (
        <section
            id="skills"
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
                    className="text-5xl font-extrabold text-center mb-8 
                               bg-clip-text text-transparent 
                               bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    Technical Skills
                </motion.h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsByCategory.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                            className="relative"
                        >
                            <div
                                className={`
                                    p-6 rounded-xl border-2 
                                    transition-all duration-300 
                                    ${selectedCategory === category
                                        ? 'bg-blue-900/50 border-blue-500 scale-105'
                                        : 'bg-white/10 border-white/20 hover:bg-white/20'}
                                `}
                            >
                                <div className="flex items-center mb-4">
                                    <category.icon
                                        className={`
                                            w-12 h-12 mr-4
                                            ${selectedCategory === category
                                                ? 'text-blue-400'
                                                : 'text-gray-400'}
                                        `}
                                    />
                                    <h3 className="text-2xl font-bold text-white">
                                        {category.category}
                                    </h3>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <button
                                        onClick={() => setSelectedCategory(category)}
                                        className="text-blue-400 hover:text-blue-300"
                                    >
                                        {category.skills.length} Skills
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Skills Details Modal */}
            <AnimatePresence>
                {selectedCategory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
                        onClick={() => setSelectedCategory(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="bg-gray-800 rounded-xl max-w-2xl w-full p-8 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                ✕
                            </button>

                            <div className="flex items-center mb-6">
                                <selectedCategory.icon
                                    className="w-16 h-16 mr-6 text-blue-400"
                                />
                                <h3 className="text-3xl font-bold text-white">
                                    {selectedCategory.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {selectedCategory.skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.05
                                        }}
                                        className="bg-blue-900/50 text-blue-300 rounded-full px-4 py-2 text-sm"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Skills;