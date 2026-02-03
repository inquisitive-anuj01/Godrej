import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { PROJECT_INFO, CONTACT_INFO } from '../data/constants';

const Disclaimer = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <Link to="/" className="inline-flex items-center text-[#4A7C59] hover:underline">
                        <FiArrowLeft className="mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                >
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Disclaimer</h1>

                    <div className="space-y-6 text-gray-600">
                        <p>
                            This website is not the official website of the {PROJECT_INFO.developer}. This website is
                            developed, maintained and operated by an authorized channel partner for information purpose only.
                        </p>

                        <p>
                            The information displayed on this website, including but not limited to project details,
                            floor plans, specifications, dimensions, and prices are for general information purpose only
                            and does not constitute an offer and/or contract of any type between the developer or
                            channel partner and the visitor/reader.
                        </p>

                        <p>
                            The content available on this website is only for general information and personal use.
                            It is subject to changes and may be updated or changed without any prior notice at the
                            sole discretion of the developer.
                        </p>

                        <p>
                            The images used on this website are for representation purposes only and the actual product
                            may look different. The developer reserves the right to change, add or modify any building
                            design, plans, specifications, images and other details.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 pt-4">RERA Information</h2>
                        <p>
                            RERA No: {PROJECT_INFO.reraNumber}
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 pt-4">Contact Information</h2>
                        <p>
                            For any queries, please contact us at:
                            <br />
                            Phone: {CONTACT_INFO.phone[0]}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Disclaimer;
