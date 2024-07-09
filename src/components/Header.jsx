import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../style.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MenuButton } from './MenuButton';
import Dropdown from './Dropdown';
import { Navbar2 } from './Navbar2';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Modal from './Modal'; // Import the Modal component

import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';
import hero3 from '../assets/images/hero3.jpg';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const progressCircle = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // State to track active slide index
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility of content

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSlideChange = () => {
    setIsVisible(true); // Show content when slide changes
  };

  const handleSlideTransitionEnd = () => {
    setIsVisible(false); // Hide content after slide transition ends
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-[20rem] w-full lg:h-[35rem] relative">
      {/* Mobile Menu Button */}
      <div className="lg:hidden absolute top-5 right-4 z-10">
        <MenuButton toggleDropdown={toggleDropdown} />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex absolute top-4 left-0 w-full justify-center gap-[10rem] right-0 z-10">
        <div className='flex'>
          <Navbar2 />
        </div>
      </div>

      {/* Dropdown */}
      {dropdownOpen && (
        <div className="lg:hidden w-full flex absolute top-16 z-10">
          <Dropdown isMenuOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
        </div>
      )}

      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          effect="fade"
          speed={800}
          onAutoplayTimeLeft={(swiper, time, progress) => {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
          }}
          className="mySwiper"
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            handleSlideChange();
          }}
          onSlideTransitionEnd={handleSlideTransitionEnd}
        >
          <SwiperSlide className="h-[30rem] text-white lg:h-[35rem] rounded-b-[1rem] relative">
            <img src={hero1} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#254336] bg-opacity-60 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 80 }} // Initial state before animation
                animate={activeIndex === 0 && isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate when isVisible is true and activeIndex matches slide index
                transition={{ duration: 0.8, delay: 0.2 }} // Animation duration for text (adjust duration here)
                className="text-center w-[90%] lg:w-[80%] text-white"
              >
                <h1 className="lg:text-3xl text-[1.5rem]">
                  At Purgato, we understand the importance of a clean and healthy environment.
                </h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }} // Initial state before animation
                  animate={activeIndex === 0 && isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} // Animate when isVisible is true and activeIndex matches slide index
                  transition={{ duration: 0.3, delay: 1.0 }} // Animation duration for button (adjust duration here)
                  className="mt-5"
                >
                  <button onClick={openModal} className="bg-orange-500 hover:bg-orange-600 rounded-full text-white py-2 px-4 transition-transform transform hover:scale-105">
                    Book us Now
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[30rem] text-white lg:h-[35rem] rounded-b-[1rem] relative">
            <img src={hero2} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#254336] bg-opacity-60 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Initial state before animation
                animate={activeIndex === 1 && isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate when isVisible is true and activeIndex matches slide index
                transition={{ duration: 0.5, delay: 0.2 }} // Animation duration for text (adjust duration here)
                className="text-center w-[90%] lg:w-[80%] text-white"
              >
                <h1 className="lg:text-3xl text-[1.5rem]">
                  At Purgato, we understand the importance of a clean and healthy environment.
                </h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }} // Initial state before animation
                  animate={activeIndex === 1 && isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} // Animate when isVisible is true and activeIndex matches slide index
                  transition={{ duration: 0.3, delay: 1.0 }} // Animation duration for button (adjust duration here)
                  className="mt-5"
                >
                  <button onClick={openModal} className="bg-orange-500 hover:bg-orange-600 rounded-full text-white py-2 px-4 transition-transform transform hover:scale-105">
                    Book us Now
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[30rem] text-white lg:h-[35rem] rounded-b-[1rem] relative">
            <img src={hero3} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#254336] bg-opacity-60 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Initial state before animation
                animate={activeIndex === 2 && isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate when isVisible is true and activeIndex matches slide index
                transition={{ duration: 0.5, delay: 0.2 }} // Animation duration for text (adjust duration here)
                className="text-center w-[90%] lg:w-[80%] text-white"
              >
                <h1 className="lg:text-3xl text-[1.5rem]">
                  At Purgato, we understand the importance of a clean and healthy environment.
                </h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }} // Initial state before animation
                  animate={activeIndex === 2 && isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} // Animate when isVisible is true and activeIndex matches slide index
                  transition={{ duration: 0.3, delay: 1.0 }} // Animation duration for button (adjust duration here)
                  className="mt-5"
                >
                  <button onClick={openModal} className="bg-orange-500 hover:bg-orange-600 rounded-full text-white py-2 px-4 transition-transform transform hover:scale-105">
                    Book us Now
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>

          {/* Autoplay progress */}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="23" cy="23" r="10" className="stroke-current text-white"></circle>
            </svg>
          </div>
        </Swiper>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Header;
