import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Overview from './Overview';
import Highlights from './Highlights';
import Amenities from './Amenities';
import PriceList from './PriceList';
import FloorPlan from './FloorPlan';
import Gallery from './Gallery';
import Location from './Location';
import Footer from './Footer';
import Modal from './Modal';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('brochure');

    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        window.history.pushState({}, "", "/");
        setIsModalOpen(false);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleBack = () => setIsModalOpen(false);
        window.addEventListener("popstate", handleBack);
        return () => window.removeEventListener("popstate", handleBack);
    }, []);

    return (
        <div className="min-h-screen bg-white w-full overflow-x-hidden">
            <Header scrollToSection={scrollToSection} openModal={openModal} />
            <Hero openModal={openModal} />
            <Overview openModal={openModal} />
            <Highlights />
            <Amenities />
            <PriceList openModal={openModal} />
            <FloorPlan openModal={openModal} />
            <Gallery />
            <Location />
            <Footer />

            <AnimatePresence>
                {isModalOpen && (
                    <Modal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        type={modalType}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

export default Home;
