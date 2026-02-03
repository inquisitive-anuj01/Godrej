import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMapPin, FiChevronRight } from 'react-icons/fi';
import { MdKingBed, MdSquareFoot, MdApartment } from 'react-icons/md';
import { GiModernCity } from 'react-icons/gi';
import BookingForm from './BookingForm';
import { PROJECT_INFO } from '../data/constants';
import BgImg from "../assets/heroImg.jpg";

// Decorative Leaf SVG Component
const LeafDecoration = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 5 C20 20, 10 50, 50 95 C90 50, 80 20, 50 5 Z" opacity="0.15" />
        <path d="M50 15 C30 25, 25 45, 50 80 C75 45, 70 25, 50 15 Z" opacity="0.1" />
    </svg>
);

const Hero = ({ openModal }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundImage: `url(${BgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40 z-10" />

            {/* Green tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4A7C59]/20 via-transparent to-[#4A7C59]/10 z-10" />

            {/* Animated Decorative Leaf Elements */}
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 w-32 h-32 text-[#4A7C59] z-10 opacity-60"
            >
                <LeafDecoration />
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-40 right-20 w-24 h-24 text-[#6B9B7A] z-10 opacity-50"
            >
                <LeafDecoration />
            </motion.div>

            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-32 left-1/4 w-20 h-20 text-[#4A7C59] z-10 opacity-40"
            >
                <LeafDecoration />
            </motion.div>

            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 right-10 w-28 h-28 text-[#8BB89A] z-10 opacity-50"
            >
                <LeafDecoration />
            </motion.div>

            {/* Glowing green orbs */}
            <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-[#4A7C59]/20 rounded-full blur-[100px] z-10" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#4A7C59]/15 rounded-full blur-[120px] z-10" />

            <div className="max-w-7xl mx-auto px-4 py-24 relative z-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Location Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center space-x-2 bg-[#4A7C59]/30 backdrop-blur-sm border border-[#4A7C59]/40 px-4 py-2 rounded-full mb-6"
                        >
                            <FiMapPin className="text-[#8BB89A]" />
                            <span className="text-white font-medium">{PROJECT_INFO.location}</span>
                        </motion.div>

                        {/* Project Name */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                            {PROJECT_INFO.name}
                        </h1>

                        {/* Tagline */}
                        <h2 className="text-xl md:text-2xl font-light mb-6 text-white/80">
                            {PROJECT_INFO.tagline}
                        </h2>

                        {/* Price Badge */}
                        <div className="inline-flex items-center bg-gradient-to-r from-[#4A7C59] to-[#3D6B4A] text-white px-6 py-3 rounded-lg mb-8 shadow-lg">
                            <span className="text-sm mr-2">Price Starts From</span>
                            <span className="text-2xl font-bold">{PROJECT_INFO.priceStart}</span>
                        </div>

                        {/* Features Grid - Glassmorphism Cards */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all">
                                <div className="w-10 h-10 bg-[#4A7C59]/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                                    <MdApartment className="text-xl text-white" />
                                </div>
                                <p className="text-2xl font-bold text-white">{PROJECT_INFO.towers}</p>
                                <p className="text-xs text-white/70">Towers</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all">
                                <div className="w-10 h-10 bg-[#4A7C59]/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                                    <MdSquareFoot className="text-xl text-white" />
                                </div>
                                <p className="text-2xl font-bold text-white">{PROJECT_INFO.totalArea}</p>
                                <p className="text-xs text-white/70">Land Area</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all">
                                <div className="w-10 h-10 bg-[#4A7C59]/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                                    <GiModernCity className="text-xl text-white" />
                                </div>
                                <p className="text-2xl font-bold text-white">{PROJECT_INFO.units}</p>
                                <p className="text-xs text-white/70">Apartments</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => openModal('brochure')}
                                className="flex items-center space-x-2 bg-gradient-to-r from-[#4A7C59] to-[#3D6B4A] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all cursor-pointer"
                            >
                                <span>Download Brochure</span>
                                <FiDownload />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => openModal('enquiry')}
                                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all cursor-pointer"
                            >
                                <span>Know More</span>
                                <FiChevronRight />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:block"
                    >
                        <BookingForm title="Book A Site Visit!" />
                    </motion.div>
                </div>

                {/* Bottom Info Cards - Glassmorphism */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { label: 'Status', value: PROJECT_INFO.status },
                        { label: 'RERA No.', value: PROJECT_INFO.reraNumber },
                        { label: 'Possession', value: PROJECT_INFO.possession },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all"
                        >
                            <p className="text-sm text-white/70 mb-2">{item.label}</p>
                            <p className="text-lg font-bold text-white">{item.value}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
