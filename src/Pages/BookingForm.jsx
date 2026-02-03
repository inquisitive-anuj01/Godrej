import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiCheckCircle } from "react-icons/fi";

const BookingForm = ({ title = "Get in Touch" }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const downloadPDF = () => {
        const link = document.createElement("a");
        // Main brochure PDF - Google Drive direct download URL
        link.href = "https://drive.google.com/uc?export=download&id=1aqeJ-0ub8XWx1oaxMDUMuNeJrOD1RUhG";
        link.download = "Godrej-Arden-Brochure.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            // TODO: Update with actual backend URL
            const response = await fetch(
                "https://jk-backend-aj.vercel.app/api/submit-form",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...formData,
                        formType: "site-visit",
                        timestamp: new Date().toISOString(),
                        source: "hero-form",
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                window.history.pushState({}, "", "/thankyou");
                downloadPDF();
                setIsSubmitted(true);

                setTimeout(() => {
                    setFormData({ name: "", email: "", phone: "" });
                    setIsSubmitted(false);
                    window.history.pushState({}, "", "/");
                }, 3000);
            } else {
                throw new Error(data.error || "Submission failed");
            }
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.");
            console.error("Form submission error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Phone validation: only digits, max 10
        if (name === "phone") {
            if (!/^\d*$/.test(value)) return;
            if (value.length > 10) return;
        }

        // Name validation: no digits
        if (name === "name") {
            if (/\d/.test(value)) return;
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        >
            <div className="p-6 sm:p-8">
                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#4A7C59] to-[#3D6B4A] rounded-full flex items-center justify-center mx-auto mb-6">
                            <FiCheckCircle className="text-white text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                        <p className="text-gray-600 mb-6">
                            Your request has been submitted successfully. Our team will contact you shortly.
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                            <p className="text-green-700 text-sm">
                                ✓ We'll contact you within 24 hours
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            {title}
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="relative">
                                <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Name"
                                    required
                                    disabled={isSubmitting}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4A7C59] focus:ring-2 focus:ring-[#4A7C59]/20 transition-all disabled:opacity-50"
                                />
                            </div>

                            <div className="relative">
                                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Email"
                                    required
                                    disabled={isSubmitting}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4A7C59] focus:ring-2 focus:ring-[#4A7C59]/20 transition-all disabled:opacity-50"
                                />
                            </div>

                            <div className="relative">
                                <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter Mobile No."
                                    required
                                    disabled={isSubmitting}
                                    maxLength={10}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4A7C59] focus:ring-2 focus:ring-[#4A7C59]/20 transition-all disabled:opacity-50"
                                />
                            </div>

                            {error && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                                    <p className="text-red-600 text-sm">{error}</p>
                                </div>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-[#4A7C59] to-[#3D6B4A] text-white py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg
                                            className="animate-spin h-5 w-5 mr-3 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    "Submit Now"
                                )}
                            </motion.button>
                        </form>

                        <p className="text-sm text-gray-500 mt-6 text-center">
                            We respect your privacy. No spam, ever.
                        </p>
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default BookingForm;
