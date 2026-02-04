import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiDollarSign, FiHome, FiNavigation, FiClock, FiCheckCircle } from 'react-icons/fi';
import { HIGHLIGHTS } from '../data/constants';

// Leaf SVG for decoration
const LeafSVG = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 5 C20 20, 10 50, 50 95 C90 50, 80 20, 50 5 Z" />
    </svg>
);

const Highlights = () => {
    const iconMap = {
        trending: <FiTrendingUp className="text-3xl" />,
        capital: <FiDollarSign className="text-3xl" />,
        rental: <FiHome className="text-3xl" />,
        airport: <FiNavigation className="text-3xl" />,
        payment: <FiClock className="text-3xl" />,
        eoi: <FiCheckCircle className="text-3xl" />
    };

    return (
        <section id="highlights" className="py-20 bg-gradient-to-b from-gray-300 via-white to-[#f0fdf4] relative overflow-hidden">
            {/* Animated decorative leaves */}
            <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 left-20 w-24 h-24 text-[#4A7C59]/10"
            >
                <LeafSVG />
            </motion.div>
            <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-20 right-16 w-20 h-20 text-[#4A7C59]/10"
            >
                <LeafSVG />
            </motion.div>
            <motion.div
                animate={{ y: [0, 8, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 right-8 w-16 h-16 text-[#4A7C59]/8"
            >
                <LeafSVG />
            </motion.div>

            {/* Enhanced green glow orbs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#4A7C59]/8 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4A7C59]/8 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4A7C59]/5 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center mb-4">
                        <div className="w-12 h-1 bg-[#4A7C59] rounded-full mr-4" />
                        <span className="text-[#4A7C59] font-semibold tracking-widest uppercase">
                            Why Invest
                        </span>
                        <div className="w-12 h-1 bg-[#4A7C59] rounded-full ml-4" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Investment Highlights
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover why Godrej Arden is the smartest investment choice in Greater Noida
                    </p>
                </motion.div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {HIGHLIGHTS.map((highlight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-[#4A7C59]/10 hover:border-[#4A7C59]/30 transition-all group"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#4A7C59]/10 to-[#4A7C59]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#4A7C59] group-hover:to-[#3D6B4A] transition-all">
                                <div className="text-[#4A7C59] group-hover:text-white transition-colors">
                                    {iconMap[highlight.icon]}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {highlight.title}
                            </h3>
                            <p className="text-gray-600">
                                {highlight.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-[#4A7C59] to-[#3D6B4A] rounded-3xl p-8 md:p-12"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
                        {[
                            { value: "9", label: "Towers" },
                            { value: "958", label: "Apartments" },
                            // { value: "9", label: "Acres" },
                            { value: "45K+", label: "Sq.ft Clubhouse" },
                            { value: "29 Dec 2030", label: "Possession Date" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                <div className="text-2xl md:text-4xl font-semibold mb-2">{stat.value}</div>
                                <div className="text-white/70">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Highlights;
