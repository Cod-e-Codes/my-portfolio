import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Send, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Navigation Items with Icons
    const navItems = [
        { name: 'Home', href: '#hero', icon: Home },
        { name: 'About', href: '#about', icon: User },
        { name: 'Projects', href: '#projects', icon: Briefcase },
        { name: 'Contact', href: '#contact', icon: Send },
    ];

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mobile menu variants
    const menuVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.3, ease: 'easeInOut' },
        },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: { duration: 0.3, ease: 'easeInOut' },
        },
    };

    // Render navigation links
    const renderNavLinks = (isMobile = false) =>
        navItems.map((item) => {
            const isMainPage = location.pathname === '/';

            return (
                <li key={item.name} className={isMobile ? 'w-full' : ''}>
                    {isMainPage ? (
                        <a
                            href={item.href}
                            className={`
                                flex items-center gap-2 
                                text-blue-400 hover:text-white 
                                transition-all duration-300 
                                ${isMobile ? 'py-2 px-4 w-full' : ''}
                            `}
                            {...(isMobile ? { onClick: () => setIsMenuOpen(false) } : {})}
                        >
                            <item.icon size={20} />
                            {item.name}
                        </a>
                    ) : (
                        <Link
                            to={`/#${item.href.slice(1)}`}
                            className={`
                                flex items-center gap-2 
                                text-blue-400 hover:text-white 
                                transition-all duration-300 
                                ${isMobile ? 'py-2 px-4 w-full' : ''}
                            `}
                            {...(isMobile ? { onClick: () => setIsMenuOpen(false) } : {})}
                        >
                            <item.icon size={20} />
                            {item.name}
                        </Link>
                    )}
                </li>
            );
        });

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/80 backdrop-blur-md shadow-lg' : 'bg-gray-950'
                } border-b border-gray-800`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-white flex items-center gap-2"
                >
                    CodēCodes
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">{renderNavLinks()}</ul>
                </nav>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="absolute top-full left-0 w-full bg-gray-950 md:hidden"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <ul className="flex flex-col items-center space-y-4 py-4">
                                {renderNavLinks(true)}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;
