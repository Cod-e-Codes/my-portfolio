import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Send, Mail, MessageCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

import networkPattern from '../assets/network-pattern.png';

const Contact: React.FC = () => {
    const [fromEmail, setFromEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [snackbar, setSnackbar] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formFocus, setFormFocus] = useState<'email' | 'subject' | 'message' | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (message.length > 1000) {
            setSnackbar({
                message: 'Message is too long. Maximum 1000 characters allowed.',
                type: 'error',
            });
            setTimeout(() => setSnackbar(null), 4000);
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await axios.post('https://www.cod-e-codes.com/sendEmail.php', {
                fromEmail,
                subject,
                message,
            });

            // Reset form fields
            setFromEmail('');
            setSubject('');
            setMessage('');

            // Show success snackbar
            setSnackbar({ message: res.data.message, type: 'success' });
        } catch (error: any) {
            // Show error snackbar
            setSnackbar({
                message: error.response?.data?.message || 'An error occurred. Please try again.',
                type: 'error',
            });
        } finally {
            setIsSubmitting(false);
        }

        setTimeout(() => setSnackbar(null), 4000);
    };

    return (
        <section
            id="contact"
            className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 text-gray-300 overflow-hidden"
        >
            {/* Animated Background Overlay */}
            <motion.div
                initial={{ opacity: 0.1 }}
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0"
            >
                <img
                    src={networkPattern}
                    alt="Network Pattern"
                    className="w-full h-full object-cover opacity-20 pointer-events-none"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative max-w-4xl mx-auto"
            >
                {/* Section Header */}
                <motion.h2
                    className="text-5xl font-extrabold text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Get in Touch
                    </span>
                </motion.h2>

                {/* Decorative Divider */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '6rem' }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="h-1 bg-blue-500 mx-auto mb-12"
                />

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="max-w-lg mx-auto space-y-6"
                >
                    {/* Email Input */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <div className="relative translate-z-0">
                            <Mail
                                className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 will-change-transform ${formFocus === 'email' ? 'text-blue-500' : 'text-gray-500'} 
                    transition-colors duration-300`}
                            />
                            <input
                                type="email"
                                value={fromEmail}
                                onChange={(e) => setFromEmail(e.target.value)}
                                onFocus={() => setFormFocus('email')}
                                onBlur={() => setFormFocus(null)}
                                placeholder="Your Email"
                                required
                                className="w-full pl-12 pr-4 py-4 bg-gray-800 bg-opacity-80 text-white rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                    transition duration-300"
                            />
                        </div>
                    </motion.div>

                    {/* Subject Input */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <div className="relative translate-z-0">
                            <MessageCircle
                                className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 will-change-transform ${formFocus === 'subject' ? 'text-blue-500' : 'text-gray-500'} 
                    transition-colors duration-300`}
                            />
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                onFocus={() => setFormFocus('subject')}
                                onBlur={() => setFormFocus(null)}
                                placeholder="Subject"
                                required
                                className="w-full pl-12 pr-4 py-4 bg-gray-800 bg-opacity-80 text-white rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                    transition duration-300"
                            />
                        </div>
                    </motion.div>

                    {/* Message Textarea */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        <div className="relative translate-z-0">
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onFocus={() => setFormFocus('message')}
                                onBlur={() => setFormFocus(null)}
                                placeholder="Your Message"
                                required
                                maxLength={1000}
                                className="w-full p-4 bg-gray-800 bg-opacity-80 text-white rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                    transition duration-300 resize-none min-h-[150px]"
                            />
                            <div className="absolute bottom-2 right-4 text-gray-500 text-sm">
                                {message.length} / 1000
                            </div>
                        </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex items-center justify-center space-x-2 px-8 py-4 text-lg font-semibold rounded-xl transition duration-300 
                ${isSubmitting
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white hover:from-blue-700 hover:to-purple-800'
                                }`}
                        >
                            {isSubmitting ? (
                                <span className="animate-pulse">Sending...</span>
                            ) : (
                                <>
                                    <Send size={20} />
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>
                    </motion.div>
                </form>
            </motion.div>

            {/* Enhanced Snackbar */}
            {snackbar && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center space-x-3 
                        ${snackbar.type === 'success'
                            ? 'bg-green-600/90 backdrop-blur-md'
                            : 'bg-red-600/90 backdrop-blur-md'
                        }`}
                >
                    {snackbar.type === 'success' ? (
                        <CheckCircle2 className="text-white" />
                    ) : (
                        <AlertTriangle className="text-white" />
                    )}
                    <p className="text-white">{snackbar.message}</p>
                </motion.div>
            )}
        </section>
    );
};

export default Contact;