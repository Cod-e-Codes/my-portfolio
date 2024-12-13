import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    GitBranch,
    Star,
    Coffee,
    Award,
    Code,
    Zap,
    Github
} from 'lucide-react';

type GitHubStats = {
    public_repos: number;
    stars: number;
    contributions: number;
    [key: string]: any;
};

const Stats: React.FC = () => {
    const [gitHubStats, setGitHubStats] = useState<GitHubStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                const reposResponse = await fetch('https://api.github.com/users/Cod-e-Codes/repos');
                const reposData = await reposResponse.json();

                const stars = reposData.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0);
                const contributions = 368;

                const profileResponse = await fetch('https://api.github.com/users/Cod-e-Codes');
                const profileData = await profileResponse.json();

                setGitHubStats({
                    public_repos: profileData.public_repos,
                    stars,
                    contributions,
                });
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching GitHub stats:', error);
                setIsLoading(false);
            }
        };

        fetchGitHubStats();
    }, []);

    const generalStats = [
        {
            label: 'Projects Completed',
            value: 20,
            icon: <Code className="text-blue-400" size={40} />,
            description: 'Innovative solutions delivered'
        },
        {
            label: 'Certifications Earned',
            value: 9,
            icon: <Award className="text-green-400" size={40} />,
            description: 'Continuing education & growth'
        },
        {
            label: 'Years of Experience',
            value: 3,
            icon: <Coffee className="text-purple-400" size={40} />,
            description: 'Professional development'
        },
        {
            label: 'Technologies Mastered',
            value: 66,
            icon: <Zap className="text-yellow-400" size={40} />,
            description: 'Tech stack expertise'
        },
    ];

    const githubStats = [
        {
            label: 'Public Repos',
            value: gitHubStats?.public_repos || 'N/A',
            icon: <GitBranch className="text-blue-500" size={32} />,
        },
        {
            label: 'Total Stars',
            value: gitHubStats?.stars || 'N/A',
            icon: <Star className="text-yellow-500" size={32} />,
        },
        {
            label: 'Contributions in 2024',
            value: gitHubStats?.contributions || 'N/A',
            icon: <Github className="text-white" size={32} />,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    return (
        <motion.section
            id="stats"
            className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-gray-300 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-5xl mx-auto relative">
                {/* Animated Background Glow */}
                <motion.div
                    className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity
                    }}
                />

                {/* Section Header */}
                <motion.h2
                    className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Developer Journey
                </motion.h2>

                {/* General Stats Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                    variants={containerVariants}
                >
                    {generalStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300 shadow-2xl"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex justify-center mb-4">
                                {stat.icon}
                            </div>
                            <span className="text-4xl font-bold text-white mb-2 block">
                                {typeof stat.value === 'number' && stat.label === 'Projects Completed'
                                    ? '20+'
                                    : stat.value}
                            </span>
                            <span className="text-gray-400 block">{stat.label}</span>
                            <span className="text-xs text-gray-500 mt-2 hidden group-hover:block">
                                {stat.description}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* GitHub CTA */}
                <motion.div
                    className="relative flex items-center justify-center mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <a
                        href="https://github.com/Cod-e-Codes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50"
                    >
                        <Github className="mr-3" size={24} />
                        Follow Me on GitHub
                    </a>
                </motion.div>

                {/* GitHub Stats Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={containerVariants}
                >
                    {githubStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-6 text-center flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-xl"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="mb-4">
                                {stat.icon}
                            </div>
                            <span className="text-4xl font-bold text-white mb-2 block">
                                {isLoading ? 'Loading...' : stat.value}
                            </span>
                            <span className="text-gray-400 block">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Stats;