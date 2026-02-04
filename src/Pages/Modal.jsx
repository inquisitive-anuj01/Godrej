import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiX,
    FiDownload,
    FiMail,
    FiChevronDown,
    FiMessageSquare,
    FiCheckCircle,
    FiUser,
    FiPhone,
} from "react-icons/fi";
import AboutImg from '../assets/aboutImg.png';

const Modal = ({ isOpen, onClose, type }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        details: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const cities = [
        "Select City",
        "Noida",
        "Greater Noida",
        "Delhi",
        "Ghaziabad",
        "Faridabad",
        "Gurgaon",
        "Other",
    ];

    const modalVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
            },
        },
        exit: {
            opacity: 0,
            y: 50,
            scale: 0.95,
            transition: {
                duration: 0.2,
            },
        },
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (error) setError("");

        if (name === "phone") {
            if (!/^\d*$/.test(value)) return;
            if (value.length > 10) return;
        }

        if (name === "name") {
            if (/\d/.test(value)) return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        if (!formData.name.trim()) return "Name is required";
        if (formData.name.trim().length < 3) return "Name must be at least 3 characters";

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!formData.email) return "Email is required";
        if (!emailRegex.test(formData.email)) return "Please enter a valid email address";

        if (!formData.phone) return "Phone number is required";
        if (formData.phone.length !== 10) return "Phone number must be exactly 10 digits";

        return null;
    };

    const downloadPDF = () => {
        // Different PDFs for different modal types
        // Floor plan PDF
        const floorPlanPdfUrl = "https://drive.google.com/uc?export=download&id=1nwtvdKZWfL7i2YRm4zQm7DrvKo0kv5jY";
        // Main brochure PDF
        const brochurePdfUrl = "https://drive.google.com/uc?export=download&id=1aqeJ-0ub8XWx1oaxMDUMuNeJrOD1RUhG";

        const isFloorPlan = type === 'floor-plan';
        const pdfUrl = isFloorPlan ? floorPlanPdfUrl : brochurePdfUrl;
        const fileName = isFloorPlan ? "Godrej-Arden-Floor-Plans.pdf" : "Godrej-Arden-Brochure.pdf";

        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = fileName;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch(
                "https://godrej-backend-blue.vercel.app/api/submit-form",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...formData,
                        formType: type,
                        timestamp: new Date().toISOString(),
                        source: "modal",
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setIsSubmitted(true);

                setTimeout(() => {
                    downloadPDF();
                }, 1000);
                window.history.pushState({}, "", "/thankyou");

                setTimeout(() => {
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        city: "",
                        details: "",
                    });
                    onClose();
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

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-50 p-4 flex items-center justify-center overflow-y-auto">
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="relative w-full max-w-4xl my-8"
                        >
                            {/* Light Theme Container */}
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                {/* Close Button */}
                                <motion.button
                                    whileHover={{ rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all cursor-pointer"
                                >
                                    <FiX className="text-xl" />
                                </motion.button>

                                <div className="grid md:grid-cols-2">
                                    {/* Left Image Section */}
                                    <div className="relative h-48 md:h-auto bg-gradient-to-br from-[#4A7C59] to-[#3D6B4A] hidden md:block">
                                        <img
                                            src={AboutImg}
                                            alt="Godrej Arden"
                                            className="w-full h-full object-cover opacity-40"
                                        />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                                                {isSubmitted ? (
                                                    <FiCheckCircle className="text-3xl" />
                                                ) : type === "brochure" ? (
                                                    <FiDownload className="text-3xl" />
                                                ) : (
                                                    <FiMail className="text-3xl" />
                                                )}
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">Godrej Arden</h3>
                                            <p className="text-white/80">Greater Noida</p>
                                            <div className="mt-6 space-y-2 text-sm text-white/70">
                                                <p>✓ 9 Towers | 958 Apartments</p>
                                                <p>✓ 2, 3 & 4 BHK Options</p>
                                                <p>✓ Starting ₹1.63 Cr*</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Form Section */}
                                    <div className="p-6 md:p-8">
                                        {isSubmitted ? (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-center py-8"
                                            >
                                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <FiCheckCircle className="text-white text-3xl" />
                                                </div>
                                                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                                                    Thank You!
                                                </h4>
                                                <p className="text-gray-600 mb-6">
                                                    Your information has been submitted successfully.
                                                    {(type === "brochure" || type === "floor-plan") &&
                                                        ` The ${type === 'floor-plan' ? 'floor plan' : 'brochure'} download will start shortly.`}
                                                </p>
                                                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                                    <p className="text-green-700 text-sm">
                                                        ✓ Our team will contact you within 24 hours
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <>
                                                {/* Header */}
                                                <div className="mb-6">
                                                    <h3 className="text-2xl font-bold text-gray-900">
                                                        {type === "brochure"
                                                            ? "Download Brochure"
                                                            : type === "floor-plan"
                                                                ? "Download Floor Plan"
                                                                : "Get More Details"}
                                                    </h3>
                                                    <p className="text-gray-500 mt-1">
                                                        Fill the form to {type === 'floor-plan' ? 'download floor plan' : type === 'brochure' ? 'download brochure' : 'get in touch'}
                                                    </p>
                                                </div>

                                                <form onSubmit={handleSubmit} className="space-y-4">
                                                    {/* Name */}
                                                    <div className="relative">
                                                        <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            placeholder="Full Name *"
                                                            required
                                                            disabled={isSubmitting}
                                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4A7C59] focus:ring-2 focus:ring-[#4A7C59]/20 transition-all disabled:opacity-50"
                                                        />
                                                    </div>

                                                    {/* Email */}
                                                    <div className="relative">
                                                        <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="Email Address *"
                                                            required
                                                            disabled={isSubmitting}
                                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4A7C59] focus:ring-2 focus:ring-[#4A7C59]/20 transition-all disabled:opacity-50"
                                                        />
                                                    </div>

                                                    {/* Phone */}
                                                    <div className="relative">
                                                        <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            placeholder="Mobile Number *"
                                                            required
                                                            disabled={isSubmitting}
                                                            maxLength={10}
                                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4A7C59] focus:ring-2 focus:ring-[#4A7C59]/20 transition-all disabled:opacity-50"
                                                        />
                                                    </div>

                                                    {/* City */}
                                                    <div className="relative">
                                                        <select
                                                            name="city"
                                                            value={formData.city}
                                                            onChange={handleChange}
                                                            disabled={isSubmitting}
                                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#4A7C59] focus:ring-2 focus:ring-[#4A7C59]/20 transition-all appearance-none disabled:opacity-50"
                                                        >
                                                            {cities.map((city, index) => (
                                                                <option
                                                                    key={index}
                                                                    value={city}
                                                                    disabled={index === 0}
                                                                >
                                                                    {city}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                                                    </div>

                                                    {/* Details */}
                                                    <div className="relative">
                                                        <textarea
                                                            name="details"
                                                            value={formData.details}
                                                            onChange={handleChange}
                                                            placeholder="Any specific requirements..."
                                                            rows="2"
                                                            disabled={isSubmitting}
                                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4A7C59] focus:ring-2 focus:ring-[#4A7C59]/20 transition-all resize-none disabled:opacity-50"
                                                        />
                                                        <FiMessageSquare className="absolute right-4 top-3 text-gray-400" />
                                                    </div>

                                                    {/* Error */}
                                                    {error && (
                                                        <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                                                            <p className="text-red-600 text-sm text-center">{error}</p>
                                                        </div>
                                                    )}

                                                    {/* Submit */}
                                                    <motion.button
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="w-full bg-gradient-to-r from-[#4A7C59] to-[#3D6B4A] text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
                                                                Processing...
                                                            </span>
                                                        ) : (
                                                            <span>
                                                                {type === "brochure"
                                                                    ? "Download Brochure Now"
                                                                    : type === "floor-plan"
                                                                        ? "Download Floor Plan Now"
                                                                        : "Submit Your Request"}
                                                            </span>
                                                        )}
                                                    </motion.button>
                                                </form>

                                                {/* Assurance */}
                                                <div className="mt-4 p-3 bg-[#4A7C59]/5 border border-[#4A7C59]/10 rounded-xl">
                                                    <p className="text-center text-gray-600 text-sm">
                                                        <span className="font-semibold text-[#4A7C59]">
                                                            ✓ Your information is secure
                                                        </span>
                                                        <br />
                                                        We'll contact you within 24 hours. No spam, guaranteed.
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;
