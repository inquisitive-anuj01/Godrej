import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { PROJECT_INFO } from '../data/constants';
import AboutImg from '../assets/aboutImg.png';
import OverView from '../assets/Overview.png';

const Overview = ({ openModal }) => {
    return (
        <section
            id="overview"
            className="py-20 relative overflow-hidden"
            style={{
                backgroundImage: `url(${AboutImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Green overlay for readability */}
            <div className="absolute inset-0 bg-[#4A7C59]/10" />

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-20 w-40 h-40 border border-white/20 rounded-full" />
                <div className="absolute bottom-20 left-10 w-60 h-60 border border-white/10 rounded-full" />
                <div className="absolute top-1/2 right-10 w-32 h-32 border border-white/15 rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Image with blur overlay */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-white p-1 rounded-lg shadow-2xl overflow-hidden">
                            <div className="relative">
                                <img
                                    src={OverView}
                                    alt="Godrej Arden Overview"
                                    className="w-full h-80 md:h-100 object-cover rounded"
                                />
                                {/* Subtle blur/overlay effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - White text on green bg */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            About {PROJECT_INFO.name}
                        </h2>

                        <div className="space-y-4 text-white/90 mb-8 text-lg leading-relaxed">
                            <p>
                                {PROJECT_INFO.developer} in {PROJECT_INFO.location}, is a premium
                                residential project with {PROJECT_INFO.towers} towers of G+30 floors offering {" "}
                                {PROJECT_INFO.type}. Possession is expected in {PROJECT_INFO.possession}.
                            </p>
                            <p>
                                The project includes a clubhouse, pools, landscaped gardens, jogging tracks,
                                kids' play zones, senior areas, and smart-home features, along with eco-friendly
                                solutions like rainwater harvesting, solar power, and EV charging.
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openModal('brochure')}
                            className="inline-flex items-center space-x-2 bg-white text-[#4A7C59] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all cursor-pointer shadow-lg"
                        >
                            <span>Download Brochure</span>
                            <FiDownload />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Overview;
