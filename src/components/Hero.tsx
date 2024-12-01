import React from 'react';
import { Typewriter } from 'react-simple-typewriter'; // Import Typewriter component
import heroImage from '../assets/hero-image.png'; // Replace with your image path
import technologyPattern from '../assets/technology-pattern.png'; // Import overlay image

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[50vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 text-center px-4 py-8 scroll-mt-16"
        >
            {/* Background Overlay */}
            <img
                src={technologyPattern}
                alt="Technology Pattern"
                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
            />

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white relative z-10">
                Welcome to CodēCodes
            </h1>

            {/* Image Section */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 z-10">
                {/* Blurred Background Inside Circle */}
                <div className="absolute inset-0 rounded-full backdrop-blur-md bg-gray-800/50"></div>

                {/* Circular Border */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-600 pointer-events-none"></div>

                {/* Hero Image */}
                <img
                    src={heroImage}
                    alt="Hero"
                    className="rounded-full object-cover w-full h-full shadow-lg relative z-10"
                />
            </div>

            {/* Slogan with Typing Animation */}
            <div className="relative z-10 px-4 py-2 bg-gray-800/75 rounded-lg backdrop-blur-md border border-gray-700">
                <p className="text-md md:text-xl text-gray-300 flex items-center justify-center">
                    <Typewriter
                        words={['Where Code Meets Creativity']}
                        loop={1} // Run only once
                        cursor
                        cursorStyle="_"
                        typeSpeed={50}
                    />
                </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col md:flex-row md:items-center mt-6 space-y-4 md:space-y-0 md:space-x-4">
                {/* View Projects Button */}
                <a
                    href="#projects"
                    className="inline-block px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-500 hover:text-white transition relative z-10"
                >
                    View Projects
                </a>

                {/* Newsletter Button */}
                <a
                    href="https://www.linkedin.com/newsletters/code-chronicles-7269023711842783232"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-500 hover:text-white transition relative z-10"
                >
                    Subscribe to Newsletter
                </a>
            </div>
        </section>
    );
};

export default Hero;
