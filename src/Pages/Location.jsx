import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiNavigation } from 'react-icons/fi';
import { MdDirectionsCar, MdTrain, MdFlight, MdSchool, MdLocalHospital } from 'react-icons/md';
import { CONNECTIVITY, LANDMARKS, PROJECT_INFO } from '../data/constants';

const Location = () => {
    return (
        <section id="location" className="py-12 bg-gradient-to-b from-[#f0fdf4] to-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center mb-4">
                        <div className="w-12 h-1 bg-[#4A7C59] rounded-full mr-4" />
                        <span className="text-[#4A7C59] font-semibold tracking-widest uppercase">
                            Location
                        </span>
                        <div className="w-12 h-1 bg-[#4A7C59] rounded-full ml-4" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Prime Location Advantage
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Strategically located for easy access to major landmarks
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden shadow-xl h-96 lg:h-[500px]"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2233093687044!2d77.49939!3d28.4594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzMzLjgiTiA3N8KwMjknNTcuOCJF!5e0!3m2!1sen!2sin!4v1609459200000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Godrej Arden Location"
                        />

                        {/* Location Badge */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-lg">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-[#4A7C59]/10 rounded-xl flex items-center justify-center">
                                    <FiMapPin className="text-[#4A7C59] text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{PROJECT_INFO.name}</h4>
                                    <p className="text-gray-600 text-sm">{PROJECT_INFO.location}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connectivity Details */}
                    <div className="space-y-8">
                        {/* Quick Connectivity */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <FiNavigation className="text-[#4A7C59] mr-3" />
                                Quick Connectivity
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {CONNECTIVITY.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-center space-x-3 mb-2">
                                            <span className="text-xl">{item.icon}</span>
                                            <span className="text-2xl font-bold text-[#4A7C59]">{item.time}</span>
                                        </div>
                                        <p className="text-gray-600 text-sm">{item.place}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Nearby Landmarks */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <MdDirectionsCar className="text-[#4A7C59] mr-3 text-2xl" />
                                Nearby Landmarks
                            </h3>
                            <div className="space-y-3">
                                {LANDMARKS.map((landmark, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                                    >
                                        <span className="text-gray-700">{landmark.name}</span>
                                        <span className="font-semibold text-[#4A7C59]">{landmark.distance}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Categories */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-4 gap-4"
                        >
                            {[
                                { icon: <MdSchool />, label: "Schools" },
                                { icon: <MdLocalHospital />, label: "Hospitals" },
                                { icon: <MdTrain />, label: "Metro" },
                                { icon: <MdFlight />, label: "Airport" }
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-12 h-12 bg-[#4A7C59]/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                                        <div className="text-2xl text-[#4A7C59]">{item.icon}</div>
                                    </div>
                                    <span className="text-sm text-gray-600">{item.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
