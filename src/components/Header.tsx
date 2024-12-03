import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Helper function to determine if the current route is the main page
    const isMainPage = location.pathname === '/';

    return (
        <header className="flex justify-between items-center p-4 bg-gray-950 shadow-md sticky top-0 z-50 border-b-4 border-gray-800">
            <Link to="/"><h1 className="text-2xl font-bold">CodēCodes</h1></Link>

            {/* Hamburger Icon */}
            <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isMenuOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    )}
                </svg>
            </button>

            {/* Desktop Menu */}
            <nav className="hidden md:block">
                <ul className="flex space-x-4">
                    <li>
                        {isMainPage ? (
                            <a href="#hero" className="text-blue-400 hover:text-white">
                                Home
                            </a>
                        ) : (
                            <Link to="/" className="text-blue-400 hover:text-white">
                                Home
                            </Link>
                        )}
                    </li>
                    <li>
                        {isMainPage ? (
                            <a href="#about" className="text-blue-400 hover:text-white">
                                About
                            </a>
                        ) : (
                            <Link to="/#about" className="text-blue-400 hover:text-white">
                                About
                            </Link>
                        )}
                    </li>
                    <li>
                        {isMainPage ? (
                            <a href="#projects" className="text-blue-400 hover:text-white">
                                Projects
                            </a>
                        ) : (
                            <Link to="/#projects" className="text-blue-400 hover:text-white">
                                Projects
                            </Link>
                        )}
                    </li>
                    <li>
                        {isMainPage ? (
                            <a href="#contact" className="text-blue-400 hover:text-white">
                                Contact
                            </a>
                        ) : (
                            <Link to="/#contact" className="text-blue-400 hover:text-white">
                                Contact
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`absolute top-16 left-0 w-full bg-gray-950 shadow-md overflow-hidden transition-all duration-500 md:hidden ${isMenuOpen ? 'max-h-64 py-4' : 'max-h-0'
                    }`}
            >
                <ul className="flex flex-col items-center space-y-4">
                    <li>
                        {isMainPage ? (
                            <a
                                href="#hero"
                                className="text-blue-400 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </a>
                        ) : (
                            <Link
                                to="/"
                                className="text-blue-400 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        )}
                    </li>
                    <li>
                        {isMainPage ? (
                            <a
                                href="#about"
                                className="text-blue-400 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                        ) : (
                            <Link
                                to="/#about"
                                className="text-blue-400 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        )}
                    </li>
                    <li>
                        {isMainPage ? (
                            <a
                                href="#projects"
                                className="text-blue-400 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </a>
                        ) : (
                            <Link
                                to="/#projects"
                                className="text-blue-400 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </Link>
                        )}
                    </li>
                    <li>
                        {isMainPage ? (
                            <a
                                href="#contact"
                                className="text-blue-400 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                        ) : (
                            <Link
                                to="/#contact"
                                className="text-blue-400 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
