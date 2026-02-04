import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import { MdSquareFoot, MdKingBed } from 'react-icons/md';
import { UNIT_TYPES } from '../data/constants';
import PriceBg from '../assets/pricelist-bg.png';

const PriceList = ({ openModal }) => {
    return (
        <section
            id="price-list"
            className="py-20 relative"
            style={{
                backgroundImage: `url(${PriceBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Light overlay for better readability */}
            <div className="absolute inset-0 bg-white/20" />

            {/* Green accent top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4A7C59] to-transparent" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        <span className="border-b-4 border-[#4A7C59] pb-1">Price List</span>
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Luxury Apartments Designed for Comfort — Explore Pricing Below
                    </p>
                </motion.div>

                {/* Price Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {UNIT_TYPES.slice(0, 3).map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                        >
                            {/* Green Header */}
                            <div className="bg-[#4A7C59] text-white text-center py-3 px-4">
                                <h3 className="text-lg font-bold">{plan.type}</h3>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
                                    <span className="font-medium">Area : {plan.size}</span>
                                </div>

                                <div className="mb-6">
                                    <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-500 text-sm ml-1">Onwards</span>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => openModal('price-breakup')}
                                    className="bg-[#4A7C59] text-white px-8 py-2.5 rounded font-medium hover:bg-[#3D6B4A] transition-all cursor-pointer"
                                >
                                    View Details
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-gray-500 text-sm">
                        * Prices are indicative and subject to change. T&C apply.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PriceList;
