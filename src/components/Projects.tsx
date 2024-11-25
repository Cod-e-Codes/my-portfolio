import React, { useState } from 'react';

const projects = [
    {
        title: 'Magi Ministries App',
        description: 'A Flutter web app for managing church activities with localization, API integration, PHP, and MySQL.',
        status: 'Ongoing',
        github: '#',
        demo: '#',
        technologies: ['Flutter Web', 'Dart', 'Localization', 'PHP', 'MySQL'],
    },
    {
        title: 'CodēCodes Portfolio',
        description: 'A responsive portfolio showcasing my projects and skills.',
        status: 'Ongoing',
        technologies: ['React', 'TailwindCSS', 'TypeScript'],
        github: '#',
        demo: 'https://www.cod-e-codes.com',
    },
    {
        title: 'PartyDice',
        description: 'A neubrutalism-inspired party game with randomized dice rolls and unique outcomes.',
        status: 'Completed',
        github: '#',
        demo: '#',
        technologies: ['Flutter', 'Game Design', 'Animations'],
    },
    {
        title: 'Hugging Face Space for Flutter Code',
        description: 'An AI tool that generates Flutter code for developers, hosted on Hugging Face.',
        status: 'Ongoing',
        github: '#',
        demo: '#',
        technologies: ['Python', 'AI', 'Flutter'],
    },
];

const getStatusClass = (status: string | undefined) => {
    switch (status) {
        case 'Active':
            return 'bg-green-500 text-white';
        case 'Ongoing':
            return 'bg-yellow-500 text-white';
        case 'Completed':
            return 'bg-blue-500 text-white';
        default:
            return 'bg-gray-500 text-white';
    }
};

const Projects: React.FC = () => {
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

    return (
        <section id="projects" className="py-16 px-4 bg-gray-800 text-gray-300">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-white mb-6">
                    Featured Projects
                </h2>

                {/* Divider */}
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.slice(0, 4).map((project, index) => (
                        <div
                            key={index}
                            className="p-6 border border-gray-700 rounded-lg shadow-md bg-gray-900 flex flex-col justify-between"
                        >
                            {/* Status Tag */}
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

                            {/* Project Title */}
                            <h3 className="text-xl font-semibold mb-4 text-white">{project.title}</h3>

                            {/* Project Description */}
                            <p className="text-gray-400">{project.description}</p>

                            {/* Spacer */}
                            <div className="flex-grow"></div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.technologies?.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href={project.github}
                                    onClick={(e) => project.github === '#' && handleHashLinkClick(e, 'GitHub')}
                                    className="text-blue-400 hover:underline"
                                >
                                    GitHub
                                </a>
                                {project.demo && (
                                    <a
                                        href={project.demo}
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

                {/* View All Projects Button */}
                <div className="text-center mt-10">
                    <a
                        href="/all-projects"
                        className="inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-500 transition"
                    >
                        View All Projects
                    </a>
                </div>
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

export default Projects;
