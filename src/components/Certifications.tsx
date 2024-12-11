import React, { useState } from 'react';
import ibmMobileThumbnail from '../assets/ibm-ios-and-android-mobile-app-developer-thumbnail.jpeg';
import metaReactNativeThumbnail from '../assets/meta-react-native-thumbnail.jpeg';
import pythonForEverybodyThumbnail from '../assets/python-for-everybody-thumbnail.jpeg';
import ibmAIThumbnail from '../assets/ibm-ai-developer-thumbnail.jpeg';
import googleUXThumbnail from '../assets/google-ux-design-thumbnail.jpeg';
import ibmFrontEndThumbnail from '../assets/ibm-front-end-developer-thumbnail.jpeg';
import metaFrontEndThumbnail from '../assets/meta-front-end-developer-thumbnail.jpeg';
import ibmFullStackThumbnail from '../assets/ibm-full-stack-software-developer-thumbnail.jpeg';
import ibmBackEndThumbnail from '../assets/ibm-back-end-development-thumbnail.jpeg';

const certifications = [
    {
        title: 'IBM iOS and Android Mobile App Developer',
        issuer: 'IBM',
        thumbnail: ibmMobileThumbnail,
        fullImage: ibmMobileThumbnail,
    },
    {
        title: 'Meta React Native Certification',
        issuer: 'Meta',
        thumbnail: metaReactNativeThumbnail,
        fullImage: metaReactNativeThumbnail,
    },
    {
        title: 'Python for Everybody',
        issuer: 'University of Michigan',
        thumbnail: pythonForEverybodyThumbnail,
        fullImage: pythonForEverybodyThumbnail,
    },
    {
        title: 'IBM AI Developer',
        issuer: 'IBM',
        thumbnail: ibmAIThumbnail,
        fullImage: ibmAIThumbnail,
    },
    {
        title: 'Google UX Design',
        issuer: 'Google',
        thumbnail: googleUXThumbnail,
        fullImage: googleUXThumbnail,
    },
    {
        title: 'IBM Front-End Developer',
        issuer: 'IBM',
        thumbnail: ibmFrontEndThumbnail,
        fullImage: ibmFrontEndThumbnail,
    },
    {
        title: 'Meta Front-End Developer',
        issuer: 'Meta',
        thumbnail: metaFrontEndThumbnail,
        fullImage: metaFrontEndThumbnail,
    },
    {
        title: 'IBM Full-Stack Software Developer',
        issuer: 'IBM',
        thumbnail: ibmFullStackThumbnail,
        fullImage: ibmFullStackThumbnail,
    },
    {
        title: 'IBM Back-End Development',
        issuer: 'IBM',
        thumbnail: ibmBackEndThumbnail,
        fullImage: ibmBackEndThumbnail,
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

                {/* View All Accomplishments Button */}
                {/* <div className="text-center mt-10">
                    <a
                        href="/all-accomplishments"
                        className="inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-500 transition"
                    >
                        View All Accomplishments
                    </a>
                </div> */}
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
