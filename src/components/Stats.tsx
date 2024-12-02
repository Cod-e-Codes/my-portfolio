import React from 'react';

const stats = [
    { label: 'Projects Completed', value: 20 }, // Set the actual number here
    { label: 'Certifications Earned', value: 7 },
    { label: 'Years of Experience', value: 3 },
    { label: 'Technologies Mastered', value: 66 },
];

const Stats: React.FC = () => {
    return (
        <section id="stats" className="py-16 px-4 bg-gray-800 text-gray-300">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-white mb-6">
                    Developer Stats
                </h2>

                {/* Divider */}
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <span className="text-4xl font-bold text-blue-400">
                                {stat.label === 'Projects Completed' && stat.value >= 20
                                    ? '20+'
                                    : stat.value}
                            </span>
                            <span className="text-gray-300 mt-2">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
