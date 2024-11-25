import React, { useState } from 'react';

const skillsByCategory = [
    {
        category: 'Front-End',
        skills: [
            'JavaScript',
            'TypeScript',
            'React',
            'Three.js',
            'TailwindCSS',
            'HTML5',
            'CSS3',
            'SCSS/SASS',
            'LESS',
            'jQuery',
            'Bootstrap',
            'Material-UI',
            'Next.js',
            'Vue.js',
            'Redux',
            'Webpack',
            'Vite',
        ],
    },
    {
        category: 'Back-End',
        skills: [
            'Node.js',
            'MySQL',
            'RESTful APIs',
            'PHP',
            'C#',
            'PostgreSQL',
            'MongoDB',
            'SQLite',
            'Firebase',
            'MariaDB',
            'FastAPI',
            'Flask',
            'Django',
            'GraphQL',
        ],
    },
    {
        category: 'Design',
        skills: [
            'Figma',
            'Adobe XD',
            'Blender',
            'Photoshop',
            'Canva',
            'Adobe After Effects',
            'Lottie',
            'GSAP',
        ],
    },
    {
        category: 'Programming Languages',
        skills: [
            'Python',
            'C++',
            'Java',
            'Kotlin',
            'Swift',
            'C',
            'Dart',
        ],
    },
    {
        category: 'Frameworks',
        skills: [
            'Flutter',
            'React Native',
            'Express.js',
            'Angular',
            'Nuxt.js',
        ],
    },
    {
        category: 'Version Control',
        skills: [
            'Git',
            'GitHub',
            'GitLab',
            'GitKraken',
        ],
    },
    {
        category: 'AI & Machine Learning',
        skills: [
            'TensorFlow',
            'PyTorch',
            'Keras',
            'Scikit-Learn',
            'OpenCV',
            'NLTK (Natural Language Toolkit)',
            'SpaCy',
            'Hugging Face Transformers',
            'ONNX (Open Neural Network Exchange)',
            'Google AI Platform',
            'MATLAB (for ML)',
        ],
    },
];

const Skills: React.FC = () => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const toggleCategory = (category: string) => {
        setExpandedCategory(expandedCategory === category ? null : category);
    };

    return (
        <section id="skills" className="py-16 px-4 bg-gray-900 text-gray-300">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-white mb-6">
                    Technical Skills
                </h2>

                {/* Divider */}
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

                {/* Skills Accordion */}
                <div className="space-y-4">
                    {skillsByCategory.map((category, index) => (
                        <div
                            key={index}
                            className="border border-gray-700 rounded-lg bg-gray-800"
                        >
                            {/* Category Header */}
                            <button
                                className="w-full text-left px-4 py-3 text-lg font-semibold text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-t-lg flex justify-between items-center"
                                onClick={() => toggleCategory(category.category)}
                            >
                                <span>{category.category}</span>
                                <span>
                                    {expandedCategory === category.category ? '-' : '+'}
                                </span>
                            </button>

                            {/* Skills List */}
                            {expandedCategory === category.category && (
                                <div className="px-4 py-2 bg-gray-800">
                                    <div className="flex flex-wrap">
                                        {category.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="bg-gray-700 text-gray-300 rounded-full px-4 py-2 m-2 text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;