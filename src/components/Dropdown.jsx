import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Dropdown({ isMenuOpen, toggleDropdown }) {

  return (
    <div onClick={toggleDropdown}  className={`fixed lg:hidden top-[5rem] inset-0 z-50 overflow-hidden flex justify-center items-center`}>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isMenuOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.3 }}
        className="absolute inset-y-0 left-0 w-[20rem] bg-white shadow-xl transform transition duration-300"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold w-full">Menu</h2>
        </div>
        <nav className="py-4 flex items-center w-full justify-center">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="block px-4 py-2 text-2xl text-gray-700 hover:bg-gray-200 transition duration-200">Home</Link>
            </li>
            <li>
              <Link to="/services" className="block px-4 py-2 text-2xl text-gray-700 hover:bg-gray-200 transition duration-200">Services</Link>
            </li>
            <li>
              <Link to="/about" className="block px-4 py-2 text-2xl text-gray-700 hover:bg-gray-200 transition duration-200">About</Link>
            </li>
          </ul>
        </nav>
        <div className='mt-[3rem] flex flex-col w-full items-center gap-[1rem]'>
          <p className="text-xl font-semibold">CONTACT INFO</p>
          <h1 className="text-lg">(+233)551102707</h1>
          <h1 className="text-lg">11 Nii Boi Avenue, West Legon, Accra</h1>
        </div>
      </motion.div>
    </div>
  );
}

export default Dropdown;
