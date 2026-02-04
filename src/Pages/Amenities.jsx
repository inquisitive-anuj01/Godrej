import React from 'react';
import { motion } from 'framer-motion';
import { MdPool, MdSecurity, MdLocalParking, MdDirectionsRun } from 'react-icons/md';
import { GiGymBag, GiPartyPopper } from 'react-icons/gi';
import { FiWifi } from 'react-icons/fi';
import { GiTreeSwing } from 'react-icons/gi';
import MapBg from '../assets/map_bg.png';

const Amenities = () => {
    // Simplified amenities list for card grid
    const amenities = [
        { title: "Swimming Pool", icon: <MdPool className="text-3xl" />, green: true },
        { title: "Gymnasium", icon: <GiGymBag className="text-3xl" />, green: false },
        { title: "Car Parking", icon: <MdLocalParking className="text-3xl" />, green: true },
        { title: "Landscaped Garden", icon: <GiTreeSwing className="text-3xl" />, green: false },
        { title: "24/7 Security", icon: <MdSecurity className="text-3xl" />, green: false },
        { title: "Clubhouse", icon: <GiPartyPopper className="text-3xl" />, green: true },
        { title: "Wi-Fi Zone", icon: <FiWifi className="text-3xl" />, green: true },
        { title: "Jogging Track", icon: <MdDirectionsRun className="text-3xl" />, green: false },
    ];

    return (
        <section
            id="amenities"
            className="py-20 relative"
            style={{
                backgroundImage: `url(${MapBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-gray-100/20" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Our <span className="border-b-4 border-[#4A7C59] pb-1">Amenities</span>
                    </h2>
                    <p className="text-gray-600 mt-4">
                        World-Class Amenities Crafted for an Elevated Lifestyle
                    </p>
                </motion.div>

                {/* Amenities Grid - Alternating Green/White Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {amenities.map((amenity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02, y: -3 }}
                            className={`rounded-lg p-6 text-center cursor-pointer transition-all shadow-md ${amenity.green
                                    ? 'bg-[#4A7C59] text-white hover:bg-[#3D6B4A]'
                                    : 'bg-white text-gray-900 border border-[#4A7C59]/30 hover:border-[#4A7C59]'
                                }`}
                        >
                            <div className={`flex justify-center mb-3 ${amenity.green ? 'text-white' : 'text-[#4A7C59]'
                                }`}>
                                {amenity.icon}
                            </div>
                            <h3 className="font-semibold text-sm md:text-base">
                                {amenity.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                {/* Additional row of amenities */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {[
                        { title: "Kids Play Area", icon: "👶", green: true },
                        { title: "Indoor Games", icon: "🎮", green: false },
                        { title: "Party Lawn", icon: "🎉", green: false },
                        { title: "Yoga Deck", icon: "🧘", green: true },
                    ].map((amenity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index + 8) * 0.05 }}
                            whileHover={{ scale: 1.02, y: -3 }}
                            className={`rounded-lg p-6 text-center cursor-pointer transition-all shadow-md ${amenity.green
                                    ? 'bg-[#4A7C59] text-white hover:bg-[#3D6B4A]'
                                    : 'bg-white text-gray-900 border border-[#4A7C59]/30 hover:border-[#4A7C59]'
                                }`}
                        >
                            <div className="text-3xl mb-3">
                                {amenity.icon}
                            </div>
                            <h3 className="font-semibold text-sm md:text-base">
                                {amenity.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Features Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-[#4A7C59] rounded-xl p-6"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
                        {[
                            { value: "45K", label: "Sq.ft Clubhouse" },
                            { value: "2km", label: "Jogging Track" },
                            { value: "100%", label: "Power Backup" },
                            { value: "24/7", label: "Security" }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                                <div className="text-white/80 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Amenities;
