import React, { useState } from 'react';
import axios from 'axios';
import networkPattern from '../assets/network-pattern.png'; // Import the overlay image

const Contact: React.FC = () => {
    const [fromEmail, setFromEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [snackbar, setSnackbar] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Frontend validation for message length
        if (message.length > 1000) {
            setSnackbar({
                message: 'Message is too long. Maximum 1000 characters allowed.',
                type: 'error',
            });
            setTimeout(() => setSnackbar(null), 4000);
            return;
        }

        setIsSubmitting(true); // Disable the button while sending

        try {
            const res = await axios.post('https://www.cod-e-codes.com/sendEmail.php', {
                fromEmail,
                subject,
                message,
            });

            // Clear the form fields
            setFromEmail('');
            setSubject('');
            setMessage('');

            // Show success snackbar
            setSnackbar({ message: res.data.message, type: 'success' });
        } catch (error: any) {
            // Show error snackbar with backend message or default error
            setSnackbar({
                message: error.response?.data?.message || 'An error occurred. Please try again.',
                type: 'error',
            });
        } finally {
            setIsSubmitting(false); // Re-enable the button
        }

        // Automatically hide snackbar after 4 seconds
        setTimeout(() => setSnackbar(null), 4000);
    };

    return (
        <section
            id="contact"
            className="relative py-16 px-4 bg-gray-900 text-gray-300"
        >
            {/* Background Overlay */}
            <img
                src={networkPattern}
                alt="Network Pattern"
                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
            />

            <div className="relative max-w-4xl mx-auto">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-white mb-6">
                    Contact
                </h2>

                {/* Divider */}
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

                {/* Contact Form */}
                <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={fromEmail}
                        onChange={(e) => setFromEmail(e.target.value)}
                        placeholder="Your Email"
                        required
                        className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subject"
                        required
                        className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="relative">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Message"
                            required
                            maxLength={1000}
                            className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <div className="absolute bottom-2 right-4 text-gray-500 text-sm">
                            {message.length} / 1000
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting} // Disable the button while submitting
                        className={`w-full px-8 py-4 text-lg font-semibold rounded-lg transition ${isSubmitting
                            ? 'bg-gray-500 cursor-not-allowed'
                            : 'bg-blue-600 text-white hover:bg-blue-500'
                            }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>

            {/* Snackbar */}
            {snackbar && (
                <div
                    className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-50 text-white flex items-center space-x-2 ${snackbar.type === 'success' ? 'bg-green-600' : 'bg-red-600'
                        }`}
                >
                    <i className={`fas ${snackbar.type === 'success' ? 'fa-check-circle' : 'fa-times-circle'}`} />
                    <p>{snackbar.message}</p>
                </div>
            )}
        </section>
    );
};

export default Contact;
