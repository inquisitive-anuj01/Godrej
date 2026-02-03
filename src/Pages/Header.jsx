import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

const Header = ({ scrollToSection, openModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: "overview", label: "Overview" },
        { id: "highlights", label: "Highlights" },
        { id: "amenities", label: "Amenities" },
        { id: "price-list", label: "Price List" },
        { id: "floor-plan", label: "Floor Plan" },
        { id: "gallery", label: "Gallery" },
        { id: "location", label: "Location" },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-lg shadow-lg"
                    : "bg-white/30 backdrop-blur-sm"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#4A7C59] to-[#3D6B4A] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">G</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-gray-900">Godrej Arden</h1>
                            <p className="text-xs text-gray-600">Greater Noida</p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-gray-700 hover:text-[#4A7C59] font-medium transition-colors cursor-pointer text-sm"
                            >
                                {item.label}
                            </motion.button>
                        ))}

                        {/* Call Now */}
                        <motion.a
                            href="tel:+919876543210"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center bg-gradient-to-r from-[#4A7C59] to-[#3D6B4A] text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all"
                        >
                            <FiPhone className="mr-2" />
                            <span className="font-medium">Call Now</span>
                        </motion.a>

                        {/* Book Site Visit */}
                        <motion.button
                            onClick={() => openModal("siteVisit")}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-900 text-white px-5 py-2.5 rounded-full shadow-lg font-medium cursor-pointer hover:bg-gray-800 transition-all"
                        >
                            Book Site Visit
                        </motion.button>
                    </nav>

                    {/* Mobile Buttons */}
                    <div className="flex lg:hidden items-center space-x-3">
                        <a
                            href="tel:+919876543210"
                            className="flex items-center bg-[#4A7C59] text-white p-2.5 rounded-full shadow"
                        >
                            <FiPhone size={18} />
                        </a>

                        <button
                            onClick={() => openModal("siteVisit")}
                            className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm shadow font-medium cursor-pointer"
                        >
                            Enquire Now
                        </button>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
