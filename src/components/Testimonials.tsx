import React from 'react';

const testimonials = [
    {
        quote: "Cody transformed our vision into reality with the Splinterhead Forge & Timber website. His attention to detail and expertise ensured a stunning and functional design that exceeded our expectations!",
        name: "Chris Crooks",
        position: "Owner, Splinterhead Forge & Timber",
    },
    {
        quote: "The Magi Ministries App has been a game-changer for our organization. Cody's ability to integrate API functionalities and create an intuitive interface made it easy for our community to stay connected.",
        name: "Bruce Smith",
        position: "Magi Ministries",
    },
    {
        quote: "The Disc Golf Advisor app is a fantastic tool for players. Cody's understanding of both the sport and technology created a personalized and engaging experience that our users love.",
        name: "Garett Kelly",
        position: "Founder, Disc Golf Community",
    },
    {
        quote: "The Empathy Experience brought our vision of fostering connection to life in the most creative way. Cody’s 3D interactive designs and React expertise delivered a breathtaking application.",
        name: "Crystal Ryals",
        position: "Creative Director, Empathy Lab",
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
