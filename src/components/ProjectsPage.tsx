import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code,
    Github,
    ExternalLink,
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
            title: 'Splinterhead Forge & Timber',
            description: 'A website for a custom woodworking and metalworking business.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/splinterhead',
            demo: 'https://cod-e-codes.github.io/splinterhead/',
            technologies: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
        },
        {
            title: 'Foster Construction Website',
            description: 'A website for Foster Construction & Remodeling LLC to showcase their work and services.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/foster-construction',
            demo: 'https://cod-e-codes.github.io/foster-construction/',
            technologies: ['HTML', 'CSS', 'TailwindCSS'],
        },
        {
            title: 'CodēCodes Portfolio',
            description: 'A responsive portfolio showcasing my projects and skills.',
            status: 'Ongoing',
            github: 'https://github.com/Cod-e-Codes/my-portfolio',
            technologies: ['React', 'TailwindCSS', 'TypeScript'],
        },
        {
            title: 'Dat A Boi Landing Page',
            description: 'A landing page, photography portfolio, and e-commerce website for Dat A Boi Enterprises.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/dat-a-boi-landing-page',
            demo: 'https://cod-e-codes.github.io/dat-a-boi-landing-page/',
            technologies: ['React', 'TypeScript', 'TailwindCSS'],
        },
        {
            title: 'Disc Golf Advisor',
            description: 'A Flask-based web application providing personalized disc golf advice based on hole characteristics and player input.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/python-disc-golf',
            technologies: ['Flask', 'Python', 'TailwindCSS', 'JSON'],
        },
        {
            title: 'PartyDice (React)',
            description: 'A neubrutalism-inspired party game with randomized dice rolls and unique outcomes.',
            status: 'Ongoing',
            github: 'https://github.com/Cod-e-Codes/partydice-react',
            technologies: ['React', 'TypeScript', 'TailwindCSS'],
            demo: 'https://cod-e-codes.github.io/partydice-react/',
        },
        {
            title: 'Rap Lyrics Game',
            description: 'A fun quiz game built with Flutter and a graffiti-style UI.',
            status: 'Ongoing',
            github: 'https://github.com/Cod-e-Codes/rap-lyrics-game',
            technologies: ['Flutter', 'Dart', 'Animations'],
        },
        {
            title: 'Freelance Time Tracker',
            description: 'A mobile app for tracking time spent on freelance projects.',
            status: 'Ongoing',
            github: 'https://github.com/Cod-e-Codes/freelance-time-tracker',
            technologies: ['Flutter', 'Dart', 'SQLite'],
        },
        {
            "title": "Harmony Hub",
            "description": "A relationship-focused app designed to foster connection and communication between partners. Features include shared journals, gratitude boards, compromise planning, and personalized insights.",
            "status": "Prototype",
            "github": "https://github.com/Cod-e-Codes/harmony-hub",
            "demo": "https://cod-e-codes.github.io/harmony-hub/",
            "technologies": ["React", "Firebase", "TailwindCSS", "Vite"]
        },
        {
            title: 'Weather App',
            description: 'A weather app that provides real-time weather updates with a clean UI.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/weather-app',
            technologies: ['Flutter', 'Dart', 'API Integration'],
        },
        {
            title: 'Magazine App',
            description: 'An app for reading and subscribing to digital magazines.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/magazine-app',
            technologies: ['Flutter', 'Dart', 'Material Design'],
        },
        {
            title: 'Notepad App',
            description: 'A minimalistic note-taking app with categorization and search features.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/notepad-app',
            technologies: ['Flutter', 'Dart', 'SQLite'],
        },
        {
            title: 'Guitar Tabs Editor',
            description: 'An app for creating and sharing guitar tabs.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/guitar-tabs-editor',
            technologies: ['Flutter', 'Dart', 'Audio Features'],
        },
        {
            title: 'Interactive Business Card App',
            description: 'A dynamic business card app with flip card animations, QR code sharing, and modern UI design, built using Flutter.',
            status: 'Ongoing',
            github: 'https://github.com/Cod-e-Codes/business-card',
            technologies: ['Flutter', 'Dart', 'Animations', 'QR Code', 'Material 3'],
        },
        {
            title: 'KitJinn',
            description: 'A hands-free kitchen assistant app with voice commands, meal planning, pantry management, and Lottie animations.',
            status: 'Ongoing',
            github: 'https://github.com/Cod-e-Codes/KitJinn',
            technologies: ['Flutter', 'Dart', 'Voice Recognition', 'Lottie Animations', 'Material 3'],
        },
        {
            title: 'Virtual Room Builder',
            description: 'A modular Python-based project for constructing and visualizing virtual rooms with customizable components like furniture and doors.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/virtual-room-builder',
            technologies: ['Python', 'Object-Oriented Design', 'Visualization'],
        },
        {
            title: 'Memory Match Game',
            description: 'A fun memory matching game with animated transitions.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/memory-game',
            technologies: ['Flutter', 'Dart', 'Animations'],
        },
        {
            title: 'Pacman Clone',
            description: 'A clone of the classic Pacman game built as a fun project.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/pacman-clone',
            technologies: ['Flutter', 'Game Design'],
        },
        {
            title: 'Tetris Game',
            description: 'A recreation of the classic Tetris game with modern animations.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/tetris',
            technologies: ['Flutter', 'Game Design'],
        },
        {
            title: 'Minesweeper Game',
            description: 'A digital version of the classic Minesweeper game with customizable difficulty.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/minesweeper',
            technologies: ['Flutter', 'Game Design'],
        },
        {
            title: 'Tic-Tac-Toe Game',
            description: 'A two-player Tic-Tac-Toe game with animations and AI.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/tictactoe',
            technologies: ['Flutter', 'Game Design', 'AI'],
        },
        {
            title: 'PartyDice',
            description: 'A neubrutalism-inspired party game with randomized dice rolls and unique outcomes.',
            status: 'Ongoing',
            github: 'https://github.com/Cod-e-Codes/PartyDice',
            technologies: ['Flutter', 'Game Design', 'Animations'],
        },
        {
            title: 'Birthday Bash Script',
            description: 'A personalized Bash script to celebrate a programmer\'s birthday with creative ASCII art, dynamic messages, and humorous programming references.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/programmer-girlfriend',
            technologies: ['Bash', 'Shell Scripting', 'ASCII Art'],
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

const ProjectsPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const filteredProjects = activeFilter
        ? projects.filter((project) => project.technologies.includes(activeFilter))
        : projects;

    return (
        <section id="projects-page" className="py-16 px-4 bg-gray-800 text-gray-300">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
            >
                {/* Page Header */}
                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6"
                >
                    All Projects
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
                                    className="bg-gray-900 border border-gray-700 rounded-lg p-6 flex flex-col transform transition-all hover:shadow-2xl hover:scale-[1.02]"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <div className={`p-2 rounded-full bg-${statusColor}-500/20`}>
                                            <StatusIcon
                                            />
                                        </div>
                                        <span
                                            className={`text-sm font-medium text-${statusColor}-400 bg-${statusColor}-500/10 px-3 py-1 rounded-full`}
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
                                                className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-xs"
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
                                            className="text-blue-400 hover:text-blue-300 flex items-center space-x-2"
                                        >
                                            <Github size={20} />
                                            <span>GitHub</span>
                                        </motion.a>

                                        {project.demo && (
                                            <motion.a
                                                href={project.demo}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="text-green-400 hover:text-green-300 flex items-center space-x-2"
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
            </motion.div>
        </section>
    );
};

export default ProjectsPage;