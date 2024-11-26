import React, { useState } from 'react';
import ibmThumbnail from '../assets/ibm-ios-and-android-mobile-app-developer-thumbnail.jpeg';
import metaThumbnail from '../assets/meta-react-native-thumbnail.jpeg';
import pythonThumbnail from '../assets/python-for-everybody-thumbnail.jpeg';

const certifications = [
    {
        title: 'IBM iOS and Android Mobile App Developer',
        issuer: 'IBM',
        thumbnail: ibmThumbnail,
        fullImage: ibmThumbnail,
    },
    {
        title: 'Meta React Native Certification',
        issuer: 'Meta',
        thumbnail: metaThumbnail,
        fullImage: metaThumbnail,
    },
    {
        title: 'Python for Everybody',
        issuer: 'University of Michigan',
        thumbnail: pythonThumbnail,
        fullImage: pythonThumbnail,
    },
];

const Certifications: React.FC = () => {
    const [modalImage, setModalImage] = useState<string | null>(null);

    return (
        <section id="certifications" className="py-16 px-4 bg-gray-800 text-gray-300">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-white mb-6">
                    Certifications
                </h2>

                {/* Divider */}
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="p-6 border border-gray-700 rounded-lg shadow-md bg-gray-900 flex items-center"
                        >
                            {/* Thumbnail */}
                            <img
                                src={cert.thumbnail}
                                alt={`${cert.title} thumbnail`}
                                className="w-20 h-20 mr-4 rounded-sm object-cover shadow-lg cursor-pointer"
                                onClick={() => setModalImage(cert.fullImage)}
                            />

                            {/* Certification Details */}
                            <div>
                                <h3
                                    className="text-xl font-semibold text-white cursor-pointer hover:underline"
                                    onClick={() => setModalImage(cert.fullImage)}
                                >
                                    {cert.title}
                                </h3>
                                <p
                                    className="text-gray-400 mt-1 cursor-pointer hover:underline"
                                    onClick={() => setModalImage(cert.fullImage)}
                                >
                                    Issued by: {cert.issuer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Full-Sized Image */}
            {modalImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setModalImage(null)}
                >
                    <div className="relative">
                        <img
                            src={modalImage}
                            alt="Full-size certification"
                            className="max-w-full max-h-full rounded-lg shadow-lg"
                        />
                        <button
                            className="absolute top-2 right-2 text-white bg-gray-900 bg-opacity-75 rounded-full p-2"
                            onClick={() => setModalImage(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;
