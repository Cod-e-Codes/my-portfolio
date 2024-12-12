import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, UserCircle2, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
    {
        quote: "Cody did an amazing job on our Splinterhead Forge & Timber website. It looks professional, works perfectly, and really captures the spirit of our business. Our customers love it!",
        name: "Chris Crooks",
        position: "Owner, Splinterhead Forge & Timber",
        color: "bg-blue-500",
    },
    {
        quote: "The Magi Ministries App has been a huge help for our church. It's easy to use and has made it so much simpler to organize events and communicate with our members. Cody really listened to what we needed.",
        name: "Bruce Smith",
        position: "Magi Ministries",
        color: "bg-green-500",
    },
    {
        quote: "The Disc Golf Advisor has been a hit with our players. It's straightforward to use and gives great advice. Cody's work really made a difference for our community.",
        name: "Garett Kelly",
        position: "Founder, Disc Golf Community",
        color: "bg-purple-500",
    },
    {
        quote: "KitJinn is incredible! Cody turned our idea for a hands-free kitchen assistant into a reality. It's intuitive, helpful, and makes meal planning and organizing so much easier. We couldn't be happier with how it turned out.",
        name: "Crystal Ryals",
        position: "Creative Director, KitJinn Team",
        color: "bg-red-500",
    },
];

const Testimonials: React.FC = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section
            id="testimonials"
            className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 
                       text-gray-300 overflow-hidden"
        >
            {/* Animated Background Particles */}
            <motion.div
                className="absolute inset-0 opacity-10 bg-dot-pattern"
                initial={{ opacity: 0.1 }}
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.01, 1]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold text-center 
                               bg-clip-text text-transparent 
                               bg-gradient-to-r from-blue-400 to-purple-600 mb-8"
                >
                    Client Testimonials
                </motion.h2>

                {/* Navigation and Carousel Container */}
                <div className="relative">
                    {/* Testimonial Navigation */}
                    <div className="absolute -left-12 md:-left-16 top-1/2 transform -translate-y-1/2 z-20">
                        <motion.button
                            onClick={prevTestimonial}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition"
                        >
                            <ArrowLeft className="text-white" />
                        </motion.button>
                    </div>
                    <div className="absolute -right-12 md:-right-16 top-1/2 transform -translate-y-1/2 z-20">
                        <motion.button
                            onClick={nextTestimonial}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition"
                        >
                            <ArrowRight className="text-white" />
                        </motion.button>
                    </div>

                    {/* Active Testimonial */}
                    <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="bg-gray-800/60 backdrop-blur-md border border-white/10 
                                   rounded-2xl p-8 shadow-2xl relative overflow-hidden"
                    >
                        {/* Quote Icon */}
                        <Quote
                            className="absolute top-4 left-4 opacity-10 text-white"
                            size={80}
                        />

                        {/* Testimonial Content */}
                        <div className="flex flex-col md:flex-row items-center">
                            {/* Profile Section */}
                            <div className="mb-4 md:mb-0 md:mr-8 flex items-center">
                                <motion.div
                                    className={`w-20 h-20 rounded-full flex items-center justify-center 
                                                ${testimonials[currentTestimonial].color} 
                                                text-white shadow-lg`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <UserCircle2 size={50} />
                                </motion.div>
                            </div>

                            {/* Text Content */}
                            <div>
                                <blockquote className="text-xl md:text-2xl text-white mb-4 italic relative z-10">
                                    "{testimonials[currentTestimonial].quote}"
                                </blockquote>
                                <div>
                                    <h3 className="text-xl font-bold text-blue-300">
                                        {testimonials[currentTestimonial].name}
                                    </h3>
                                    <p className="text-gray-400">
                                        {testimonials[currentTestimonial].position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {testimonials.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`h-2 w-2 rounded-full transition-all duration-300 
                                            ${index === currentTestimonial
                                        ? 'bg-blue-500 w-6'
                                        : 'bg-gray-500'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;