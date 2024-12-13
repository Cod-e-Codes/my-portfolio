import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code,
    Github,
    ExternalLink,
    ChevronRight,
    CheckCircle,
    Clock,
    Star,
} from 'lucide-react';

type ProjectStatus = 'Ongoing' | 'Completed' | 'Prototype' | 'Active';

const projects: {
    title: string;
    description: string;
    status: ProjectStatus;
    github: string;
    demo?: string;
    technologies: string[];
}[] = [
        {
            title: 'Magi Ministries App',
            description: 'A Flutter web app for managing church activities with localization, API integration, PHP, and MySQL.',
            status: 'Ongoing',
            github: 'https://github.com/Cod-e-Codes/magi',
            technologies: ['Flutter Web', 'Dart', 'Localization', 'PHP', 'MySQL'],
        },
        {
            title: 'Rap Lyrics Game',
            description: 'A fun quiz game built with Flutter and a graffiti-style UI.',
            status: 'Ongoing',
            github: 'https://github.com/Cod-e-Codes/rap-lyrics-game',
            technologies: ['Flutter', 'Dart', 'Animations'],
        },
        {
            title: 'Harmony Hub',
            description: 'A relationship-focused app designed to foster connection and communication between partners.',
            status: 'Prototype',
            github: 'https://github.com/Cod-e-Codes/harmony-hub',
            demo: 'https://cod-e-codes.github.io/harmony-hub/',
            technologies: ['React', 'Firebase', 'TailwindCSS', 'Vite'],
        },
        {
            title: 'Disc Golf Advisor',
            description: 'A Flask-based web application providing personalized disc golf advice.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/python-disc-golf',
            technologies: ['Flask', 'Python', 'TailwindCSS', 'JSON'],
        },
        {
            title: 'PartyDice',
            description: 'A neubrutalism-inspired party game with randomized dice rolls and unique outcomes.',
            status: 'Ongoing',
            github: 'https://github.com/Cod-e-Codes/PartyDice',
            technologies: ['Flutter', 'Game Design', 'Animations'],
        },
        {
            title: 'KitJinn',
            description: 'A hands-free kitchen assistant app with voice commands, meal planning, pantry management, and Lottie animations.',
            status: 'Ongoing',
            github: 'https://github.com/Cod-e-Codes/KitJinn',
            technologies: ['Flutter', 'Dart', 'Voice Recognition', 'Lottie Animations', 'Material 3'],
        },
    ];

const statusIcons: Record<ProjectStatus, React.FC> = {
    Ongoing: Clock,
    Completed: CheckCircle,
    Prototype: Star,
    Active: Code,
};

const statusColors: Record<ProjectStatus, string> = {
    Ongoing: 'yellow',
    Completed: 'green',
    Prototype: 'purple',
    Active: 'blue',
};

const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const filteredProjects = activeFilter
        ? projects.filter((project) => project.technologies.includes(activeFilter))
        : projects;

    return (
        <section
            id="projects"
            className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-gray-300"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto"
            >
                {/* Section Header */}
                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-extrabold text-center 
                               bg-clip-text text-transparent 
                               bg-gradient-to-r from-blue-400 to-purple-600 mb-6"
                >
                    Featured Projects
                </motion.h2>

                {/* Technology Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {Array.from(new Set(projects.flatMap((p) => p.technologies))).map((tech) => (
                        <motion.button
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveFilter(activeFilter === tech ? null : tech)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                                ${activeFilter === tech
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`}
                        >
                            {tech}
                        </motion.button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => {
                            const StatusIcon = statusIcons[project.status];
                            const statusColor = statusColors[project.status];

                            return (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-gray-800 border border-gray-700 rounded-2xl 
                                               p-6 flex flex-col transform transition-all 
                                               hover:shadow-2xl hover:scale-[1.02]"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <div className={`p-2 rounded-full bg-${statusColor}-500/20`}>
                                            <StatusIcon
                                            />
                                        </div>
                                        <span
                                            className={`text-sm font-medium text-${statusColor}-400 
                   bg-${statusColor}-500/10 px-3 py-1 rounded-full`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-4 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-gray-700 text-gray-300 
                                                           rounded-full px-3 py-1 text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex space-x-4 mt-auto">
                                        <motion.a
                                            href={project.github}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="text-blue-400 hover:text-blue-300 
                                                       flex items-center space-x-2"
                                        >
                                            <Github size={20} />
                                            <span>GitHub</span>
                                        </motion.a>

                                        {project.demo && (
                                            <motion.a
                                                href={project.demo}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="text-green-400 hover:text-green-300 
                                                           flex items-center space-x-2"
                                            >
                                                <ExternalLink size={20} />
                                                <span>Demo</span>
                                            </motion.a>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-10"
                >
                    <motion.a
                        href="/all-projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 
                                   bg-gradient-to-r from-blue-600 to-purple-600 
                                   text-white rounded-lg 
                                   hover:from-blue-700 hover:to-purple-700 
                                   transition-all shadow-lg hover:shadow-xl"
                    >
                        View All Projects
                        <ChevronRight className="ml-2" />
                    </motion.a>
                </motion.div>
            </motion.div>

        </section>
    );
};

export default Projects;
