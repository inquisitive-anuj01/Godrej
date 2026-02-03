import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

// Import floor plan images
import FloorPlan2BHK from '../assets/2bhk.png';
import FloorPlan3BHK from '../assets/3bhk.png';
import FloorPlan4BHK from '../assets/4bhk.png';

const FloorPlan = ({ openModal }) => {
    const floorPlans = [
        {
            id: 1,
            type: "2 BHK",
            size: "1375 sq.ft.",
            price: "₹ 1.63 Cr*",
            image: FloorPlan2BHK
        },
        {
            id: 2,
            type: "3 BHK",
            size: "1850 - 2450 sq.ft.",
            price: "₹ 3-4 Cr*",
            image: FloorPlan3BHK
        },
        {
            id: 3,
            type: "4 BHK",
            size: "2700 sq.ft.",
            price: "₹ 4.40 Cr*",
            image: FloorPlan4BHK
        }
    ];

    return (
        <section id="floor-plan" className="py-20 bg-gradient-to-b from-[#f0fdf4] to-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        <span className="border-b-4 border-[#4A7C59] pb-1">Floor Plans</span>
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Thoughtfully Designed Layouts for Modern Living
                    </p>
                </motion.div>

                {/* Floor Plan Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {floorPlans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            onClick={() => openModal('floor-plan')}
                            className="cursor-pointer group"
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[#4A7C59]/30 transition-all duration-300">
                                {/* Image with blur overlay */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={plan.image}
                                        alt={`${plan.type} Floor Plan`}
                                        className="w-full h-full object-contain bg-gray-50 p-4 group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Blur overlay that reduces on hover */}
                                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] group-hover:bg-white/20 group-hover:backdrop-blur-[1px] transition-all duration-300 flex items-center justify-center">
                                        <div className="bg-[#4A7C59] text-white px-6 py-3 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-2">
                                            <FiDownload />
                                            <span>Get Floor Plan</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    {/* Green Header */}
                                    <div className="bg-[#4A7C59] text-white text-center py-2 px-4 rounded-lg mb-4">
                                        <h3 className="text-lg font-bold">{plan.type}</h3>
                                    </div>

                                    <div className="text-center space-y-2">
                                        <p className="text-gray-600">
                                            <span className="font-medium">Area:</span> {plan.size}
                                        </p>
                                        <p className="text-gray-900">
                                            <span className="text-xl font-bold text-[#4A7C59]">{plan.price}</span>
                                            <span className="text-gray-500 text-sm ml-1">Onwards</span>
                                        </p>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            openModal('floor-plan');
                                        }}
                                        className="w-full mt-4 bg-[#4A7C59] text-white py-3 rounded-lg font-medium hover:bg-[#3D6B4A] transition-all cursor-pointer flex items-center justify-center space-x-2"
                                    >
                                        <FiDownload />
                                        <span>Download Floor Plan</span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Info text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >
                    <p className="text-gray-500 text-sm">
                        * Click on any floor plan to download the detailed layout
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FloorPlan;
