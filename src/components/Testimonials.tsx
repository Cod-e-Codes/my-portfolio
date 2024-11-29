import React from 'react';

const testimonials = [
    {
        quote: "Cody did an amazing job on our Splinterhead Forge & Timber website. It looks professional, works perfectly, and really captures the spirit of our business. Our customers love it!",
        name: "Chris Crooks",
        position: "Owner, Splinterhead Forge & Timber",
    },
    {
        quote: "The Magi Ministries App has been a huge help for our church. It’s easy to use and has made it so much simpler to organize events and communicate with our members. Cody really listened to what we needed.",
        name: "Bruce Smith",
        position: "Magi Ministries",
    },
    {
        quote: "The Disc Golf Advisor has been a hit with our players. It’s straightforward to use and gives great advice. Cody’s work really made a difference for our community.",
        name: "Garett Kelly",
        position: "Founder, Disc Golf Community",
    },
    {
        quote: "KitJinn is incredible! Cody turned our idea for a hands-free kitchen assistant into a reality. It’s intuitive, helpful, and makes meal planning and organizing so much easier. We couldn’t be happier with how it turned out.",
        name: "Crystal Ryals",
        position: "Creative Director, KitJinn Team",
    },
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-16 px-4 bg-gray-800 text-gray-300">
            <div className="max-w-4xl mx-auto"> {/* Match the width of Projects */}
                <h2 className="text-4xl font-bold text-center text-white mb-6">
                    Testimonials
                </h2>

                {/* Divider */}
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gray-900 border border-gray-700 rounded-lg shadow-md flex flex-col justify-between"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500">
                                    <i className="fas fa-user text-white text-2xl"></i> {/* Font Awesome account icon */}
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                                </div>
                            </div>
                            <blockquote className="text-gray-400 italic">
                                "{testimonial.quote}"
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
