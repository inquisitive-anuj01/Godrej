import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { PROJECT_INFO, CONTACT_INFO } from '../data/constants';

const Privacy = () => {
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
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                    <div className="space-y-6 text-gray-600">
                        <p>
                            We at {PROJECT_INFO.name} are committed to protecting your privacy. This Privacy Policy
                            explains how we collect, use, and safeguard your information when you visit our website.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 pt-4">Information We Collect</h2>
                        <p>
                            We collect information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Fill out a contact form or enquiry form</li>
                            <li>Request a brochure download</li>
                            <li>Schedule a site visit</li>
                            <li>Subscribe to our newsletter</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 pt-4">How We Use Your Information</h2>
                        <p>
                            The information we collect is used to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Respond to your enquiries and provide requested information</li>
                            <li>Send you project updates and promotional materials</li>
                            <li>Schedule site visits and follow-up calls</li>
                            <li>Improve our website and customer service</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 pt-4">Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect your personal information from
                            unauthorized access, alteration, disclosure, or destruction.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 pt-4">Third-Party Disclosure</h2>
                        <p>
                            We do not sell, trade, or otherwise transfer your personally identifiable information
                            to outside parties without your consent, except as required by law.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 pt-4">Your Rights</h2>
                        <p>
                            You have the right to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access your personal information we hold</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 pt-4">Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                            <br />
                            Phone: {CONTACT_INFO.phone[0]}
                        </p>

                        <p className="text-sm text-gray-500 pt-6">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;
