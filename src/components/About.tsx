import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-16 px-4 bg-gray-900 text-gray-300">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-white mb-6">
                    About Me
                </h2>

                {/* Divider */}
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

                {/* Content */}
                <p className="text-lg leading-relaxed text-center">
                    Hello, I'm <span className="text-blue-400 font-bold">Cody Marsengill</span>, a dedicated full-stack web and mobile developer with 3 years of experience crafting robust, scalable, and user-friendly solutions. My expertise lies in bridging the gap between design and functionality, ensuring every project not only performs well but also looks and feels intuitive for users.
                </p>
                <p className="text-lg leading-relaxed text-center mt-6">
                    I thrive on tackling complex challenges, whether it's building responsive front-end interfaces, optimizing back-end systems, or developing seamless cross-platform mobile apps. Technology is my canvas, and I aim to create impactful applications that drive innovation and solve real-world problems.
                </p>
            </div>
        </section>
    );
};

export default About;
