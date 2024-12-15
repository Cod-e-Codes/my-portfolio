import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';
import { GitBranch, Star, Coffee, Award, Code, Zap, Github } from 'lucide-react';

type GitHubStats = {
    contributions: number;
    languages: { name: string; size: number; color: string }[];
    public_repos: number;
    stars: number;
};

const Stats: React.FC = () => {
    const [gitHubStats, setGitHubStats] = useState<GitHubStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

    useEffect(() => {
        const fetchGitHubStats = async () => {
            const GITHUB_API = "https://api.github.com/graphql";

            try {
                const response = await fetch(GITHUB_API, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${TOKEN}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        query: `
                        query {
                            user(login: "Cod-e-Codes") {
                                contributionsCollection {
                                    contributionCalendar {
                                        totalContributions
                                    }
                                }
                                repositories(first: 50) {
                                    nodes {
                                        stargazerCount
                                        languages(first: 5) {
                                            edges {
                                                size
                                                node {
                                                    name
                                                    color
                                                }
                                            }
                                        }
                                    }
                                }
                                public_repos: repositories {
                                    totalCount
                                }
                            }
                        }
                        `,
                    }),
                });

                const { data } = await response.json();

                const contributions = data.user.contributionsCollection.contributionCalendar.totalContributions;
                const public_repos = data.user.public_repos.totalCount;

                const languageMap: { [key: string]: { size: number; color: string } } = {};
                let totalStars = 0;

                data.user.repositories.nodes.forEach((repo: any) => {
                    totalStars += repo.stargazerCount;
                    repo.languages.edges.forEach((lang: any) => {
                        const { name, color } = lang.node;
                        const size = lang.size;
                        if (languageMap[name]) {
                            languageMap[name].size += size;
                        } else {
                            languageMap[name] = { size, color };
                        }
                    });
                });

                const languages = Object.entries(languageMap)
                    .map(([name, data]) => ({ name, size: data.size, color: data.color }))
                    .sort((a, b) => b.size - a.size)
                    .slice(0, 5);

                setGitHubStats({
                    contributions,
                    languages,
                    public_repos,
                    stars: totalStars,
                });
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching GitHub stats:", error);
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
        },
        {
            label: 'Certifications Earned',
            value: 10,
            icon: <Award className="text-green-400" size={40} />,
        },
        {
            label: 'Years of Experience',
            value: 3,
            icon: <Coffee className="text-purple-400" size={40} />,
        },
        {
            label: 'Technologies Mastered',
            value: 66,
            icon: <Zap className="text-yellow-400" size={40} />,
        },
    ];

    const githubStats = [
        {
            label: 'Public Repos',
            value: isLoading ? <Skeleton width={50} /> : gitHubStats?.public_repos || 'N/A',
            icon: <GitBranch className="text-blue-500" size={32} />,
        },
        {
            label: 'Total Stars',
            value: isLoading ? <Skeleton width={50} /> : gitHubStats?.stars || 'N/A',
            icon: <Star className="text-yellow-500" size={32} />,
        },
        {
            label: 'Contributions in 2024',
            value: isLoading ? <Skeleton width={50} /> : gitHubStats?.contributions || 'N/A',
            icon: <Github className="text-white" size={32} />,
        },
    ];

    return (
        <motion.section
            id="stats"
            className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-gray-300 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-5xl mx-auto relative">
                <motion.h2
                    className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Developer Journey
                </motion.h2>

                <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {generalStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition-transform flex flex-col items-center"
                        >
                            <div className="mb-4">{stat.icon}</div>
                            <span className="text-4xl font-bold text-white">{stat.value}</span>
                            <span className="text-gray-400">{stat.label}</span>
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

                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {githubStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 text-center flex flex-col items-center hover:scale-105 transition-transform"
                        >
                            <div className="mb-4">{stat.icon}</div>
                            <span className="text-4xl font-bold text-white">{stat.value}</span>
                            <span className="text-gray-400">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.h3 className="text-3xl font-bold text-white text-center mb-6">Top Languages</motion.h3>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {isLoading
                        ? Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="bg-gray-800/70 border border-gray-700 rounded-xl p-6">
                                <Skeleton height={30} />
                            </div>
                        ))
                        : gitHubStats?.languages.map((lang, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 flex items-center justify-between hover:scale-105 transition-transform"
                            >
                                <div>
                                    <span
                                        className="inline-block w-4 h-4 rounded-full mr-2"
                                        style={{ backgroundColor: lang.color }}
                                    ></span>
                                    <span className="text-white text-lg font-semibold">{lang.name}</span>
                                </div>
                                <span className="text-gray-400">{(lang.size / 1024).toFixed(2)} KB</span>
                            </motion.div>
                        ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Stats;
