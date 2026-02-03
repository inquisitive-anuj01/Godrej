import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { PROJECT_INFO, CONTACT_INFO } from '../data/constants';

const Footer = () => {
    const quickLinks = [
        { label: 'Overview', href: '#overview' },
        { label: 'Highlights', href: '#highlights' },
        { label: 'Amenities', href: '#amenities' },
        { label: 'Price List', href: '#price-list' },
        { label: 'Floor Plan', href: '#floor-plan' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Location', href: '#location' },
    ];

    const legalLinks = [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Disclaimer', href: '/disclaimer' },
    ];

    

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#4A7C59] to-[#3D6B4A] rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">G</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{PROJECT_INFO.name}</h3>
                                <p className="text-gray-400 text-sm">{PROJECT_INFO.location}</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Premium {PROJECT_INFO.type} by {PROJECT_INFO.developer}.
                            Experience luxury living at its finest.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#4A7C59] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <FiMapPin className="text-[#4A7C59] mt-1 flex-shrink-0" />
                                <span className="text-gray-400">{CONTACT_INFO.address}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FiPhone className="text-[#4A7C59] flex-shrink-0" />
                                <div>
                                    {CONTACT_INFO.phone.map((num, index) => (
                                        <a
                                            key={index}
                                            href={`tel:${num.replace(/\s/g, '')}`}
                                            className="text-gray-400 hover:text-[#4A7C59] transition-colors block"
                                        >
                                            {num}
                                        </a>
                                    ))}
                                </div>
                            </li>
                            
                            <li className="flex items-start space-x-3">
                                <FiClock className="text-[#4A7C59] mt-1 flex-shrink-0" />
                                <div className="text-gray-400">
                                    <p>Mon - Sat: {CONTACT_INFO.workingHours.weekdays}</p>
                                    <p>Sun: {CONTACT_INFO.workingHours.sunday}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Legal</h4>
                        <ul className="space-y-3 mb-6">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#4A7C59] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-white/5 rounded-xl p-4">
                            <p className="text-xs text-gray-500">
                                RERA No: {PROJECT_INFO.reraNumber}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} {PROJECT_INFO.name}. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm">
                            Developed by {PROJECT_INFO.developer}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
