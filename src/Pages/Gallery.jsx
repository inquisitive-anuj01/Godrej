import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from 'react-icons/fi';

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const galleryImages = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200",
            title: "Building Exterior",
            category: "exterior"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200",
            title: "Living Room",
            category: "interior"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200",
            title: "Bedroom",
            category: "interior"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=1200",
            title: "Swimming Pool",
            category: "amenities"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200",
            title: "Gymnasium",
            category: "amenities"
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200",
            title: "Master Bedroom",
            category: "interior"
        }
    ];

    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <section id="gallery" className="py-20 bg-gradient-to-b from-gray-200 to-white">
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
                            Gallery
                        </span>
                        <div className="w-12 h-1 bg-[#4A7C59] rounded-full ml-4" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Visual Tour
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore the elegance and sophistication of Godrej Arden
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => openLightbox(index)}
                            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                                    <p className="text-white/70 text-sm capitalize">{image.category}</p>
                                </div>
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <FiZoomIn className="text-white text-xl" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            <FiX className="text-2xl" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            <FiChevronLeft className="text-2xl" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            <FiChevronRight className="text-2xl" />
                        </button>

                        <motion.img
                            key={currentImage}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            src={galleryImages[currentImage].src}
                            alt={galleryImages[currentImage].title}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                            <h3 className="text-white font-semibold text-lg mb-1">
                                {galleryImages[currentImage].title}
                            </h3>
                            <p className="text-white/70">
                                {currentImage + 1} / {galleryImages.length}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
