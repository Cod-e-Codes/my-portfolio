import React, { useState } from 'react';

// Define the project type
type Project = {
    title: string;
    description: string;
    status: string;
    github: string;
    demo?: string;
    technologies: string[];
};

// Define the structure of the projects object
type Projects = {
    [category: string]: Project[];
};

const projects: Projects = {
    "Web Development": [
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
    ],
    "Mobile Development": [
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
            title: 'Harmony Hub',
            description: 'An app to control smart home devices in a unified interface.',
            status: 'Prototype',
            github: '#',
            demo: '#',
            technologies: ['Flutter', 'Dart'],
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
    ],
    "Games and Experiments": [
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
    ],
    "Scripts and Tools": [
        {
            title: 'Birthday Bash Script',
            description: 'A personalized Bash script to celebrate a programmer\'s birthday with creative ASCII art, dynamic messages, and humorous programming references.',
            status: 'Completed',
            github: 'https://github.com/Cod-e-Codes/programmer-girlfriend',
            technologies: ['Bash', 'Shell Scripting', 'ASCII Art'],
        },
        {
            title: 'Hugging Face Space for Flutter Code',
            description: 'An AI tool that generates Flutter code for developers, hosted on Hugging Face.',
            status: 'Ongoing',
            github: '#',
            demo: '#',
            technologies: ['Python', 'AI', 'Flutter'],
        },
    ],
};

const getStatusClass = (status: string) => {
    switch (status) {
        case 'Active':
            return 'bg-green-500 text-white';
        case 'Ongoing':
            return 'bg-yellow-500 text-white';
        case 'Completed':
            return 'bg-blue-500 text-white';
        case 'Prototype':
            return 'bg-purple-500 text-white';
        default:
            return 'bg-gray-500 text-white';
    }
};

const ProjectsPage: React.FC = () => {
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, type: string) => {
        e.preventDefault();
        const message =
            type === 'GitHub'
                ? 'This repository is under construction. Check back later!'
                : 'This demo is under construction. Check back later!';
        setSnackbarMessage(message);
        setShowSnackbar(true);
        setTimeout(() => setShowSnackbar(false), 4000); // Hide snackbar after 4 seconds
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);

    const allTechnologies = Array.from(
        new Set(Object.values(projects).flatMap((categoryProjects) =>
            categoryProjects.flatMap((project) => project.technologies)
        ))
    );

    const filteredProjects = Object.entries(projects).reduce((acc, [category, projectList]) => {
        if (selectedCategory && selectedCategory !== category) return acc;

        const filteredList = projectList.filter(
            (project) =>
                (!searchTerm || project.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
                (!selectedTechnology || project.technologies.includes(selectedTechnology))
        );

        if (filteredList.length > 0) {
            acc[category] = filteredList;
        }

        return acc;
    }, {} as Projects);

    return (
        <section id="all-projects" className="py-16 px-4 bg-gray-800 text-gray-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-6">All Projects</h2>

                {/* Divider */}
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                    <div className="flex-1 min-w-[200px]">
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-2 rounded bg-gray-700 border border-gray-500 text-white"
                        />
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <select
                            value={selectedCategory || ''}
                            onChange={(e) => setSelectedCategory(e.target.value || null)}
                            className="w-full p-2 rounded bg-gray-700 border border-gray-500 text-white"
                        >
                            <option value="">All Categories</option>
                            {Object.keys(projects).map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <select
                            value={selectedTechnology || ''}
                            onChange={(e) => setSelectedTechnology(e.target.value || null)}
                            className="w-full p-2 rounded bg-gray-700 border border-gray-500 text-white"
                        >
                            <option value="">All Technologies</option>
                            {allTechnologies.map((tech) => (
                                <option key={tech} value={tech}>
                                    {tech}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {Object.entries(filteredProjects).map(([category, projectList]) => (
                    <div key={category} className="mb-16">
                        <h3 className="text-3xl font-semibold text-blue-400 mb-6">{category}</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projectList.map((project, index) => (
                                <div
                                    key={index}
                                    className="p-6 border border-gray-700 rounded-lg shadow-md bg-gray-900 flex flex-col justify-between"
                                >
                                    {project.status && (
                                        <div className="mb-4">
                                            <span
                                                className={`inline-block px-3 py-1 text-sm font-semibold rounded ${getStatusClass(
                                                    project.status
                                                )}`}
                                            >
                                                {project.status}
                                            </span>
                                        </div>
                                    )}
                                    <h3 className="text-xl font-semibold mb-4 text-white">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <div className="flex-grow"></div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <a
                                            href={project.github}
                                            target="_blank" // Opens link in a new tab
                                            rel="noopener noreferrer" // Prevents security vulnerabilities
                                            onClick={(e) => project.github === '#' && handleHashLinkClick(e, 'GitHub')}
                                            className="text-blue-400 hover:underline"
                                        >
                                            GitHub
                                        </a>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank" // Opens link in a new tab
                                                rel="noopener noreferrer" // Prevents security vulnerabilities
                                                onClick={(e) => project.demo === '#' && handleHashLinkClick(e, 'Demo')}
                                                className="text-blue-400 hover:underline"
                                            >
                                                View Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Snackbar */}
            <div
                className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50 transition-all duration-500 ease-in-out ${showSnackbar
                    ? 'animate-slide-in opacity-100'
                    : 'opacity-0 pointer-events-none'
                    }`}
            >
                <i className="fas fa-tools text-blue-400"></i>
                <p>{snackbarMessage}</p>
            </div>
        </section>
    );
};

export default ProjectsPage;