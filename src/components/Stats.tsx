import React, { useEffect, useState } from 'react';

type GitHubStats = {
    public_repos: number;
    stars: number;
    contributions: number;
    [key: string]: any;
};

const Stats: React.FC = () => {
    const [gitHubStats, setGitHubStats] = useState<GitHubStats | null>(null);

    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                // Fetch repositories to calculate stars
                const reposResponse = await fetch('https://api.github.com/users/Cod-e-Codes/repos');
                const reposData = await reposResponse.json();

                // Calculate total stars across repositories
                const stars = reposData.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0);

                // Hardcoded contributions count for demonstration (replace with actual contributions data)
                const contributions = 368; // Replace with GraphQL API or manual input

                // Fetch user profile data
                const profileResponse = await fetch('https://api.github.com/users/Cod-e-Codes');
                const profileData = await profileResponse.json();

                setGitHubStats({
                    public_repos: profileData.public_repos,
                    stars,
                    contributions,
                });
            } catch (error) {
                console.error('Error fetching GitHub stats:', error);
            }
        };

        fetchGitHubStats();
    }, []);

    const generalStats = [
        { label: 'Projects Completed', value: 20 },
        { label: 'Certifications Earned', value: 9 },
        { label: 'Years of Experience', value: 3 },
        { label: 'Technologies Mastered', value: 66 },
    ];

    const githubStats = [
        { label: 'Public Repos', value: gitHubStats?.public_repos || 'Loading...' },
        { label: 'Total Stars', value: gitHubStats?.stars || 'Loading...' },
        { label: 'Contributions in 2024', value: gitHubStats?.contributions || 'Loading...' },
    ];

    return (
        <section id="stats" className="py-16 px-4 bg-gray-800 text-gray-300">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-white mb-6">
                    Developer Stats
                </h2>

                {/* Divider */}
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

                {/* General Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {generalStats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <span className="text-4xl font-bold text-blue-400">
                                {typeof stat.value === 'number' && stat.label === 'Projects Completed' && stat.value >= 20
                                    ? '20+'
                                    : stat.value}
                            </span>
                            <span className="text-gray-300 mt-2">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Divider Between Sections */}
                <div className="w-full h-1 bg-gray-700 mb-8"></div>

                {/* GitHub Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {githubStats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gray-700 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
                        >
                            <span className="text-4xl font-bold text-green-400">
                                {stat.value}
                            </span>
                            <span className="block text-gray-300 mt-2">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
