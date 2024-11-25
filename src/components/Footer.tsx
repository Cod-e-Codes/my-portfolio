import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 bg-gray-950 text-gray-400 relative z-0">
            {/* Thin Divider */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-800"></div>

            <div className="max-w-4xl mx-auto text-center">
                {/* Social Links */}
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="https://github.com/cod-e-codes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a
                        href="https://linkedin.com/in/cod-e-codes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                </div>

                {/* Divider */}
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>

                {/* Footer Text */}
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} <span className="text-white font-semibold">CodēCodes</span>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
