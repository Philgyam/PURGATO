import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-[#061035] w-full  text-white py-8">
      <div className="container mx-auto flex justify-between ">
        <div className="w-full md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4 text-yellow-400">Contact Us</h4>
          <div className='h-[10rem] flex flex-col space-y-4'>
            <p className='flex items-center space-x-2'><FaLocationDot /> <span>West Legon boulevard</span></p>
            <p className='flex items-center space-x-2'><MdOutlineEmail /><span>info@purgatoltd.com</span></p>
            <p className='flex items-center space-x-2'><IoPhonePortraitOutline /><span>+233-456-7890</span></p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center mb-6 md:mb-0">

          <h4 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h4>
          <ul className='space-y-2'>
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        
      </div>
      <div className="w-full  pl-[3rem] md:w-1/3">
          <h4 className="text-xl font-bold  pl-5 mb-4 text-yellow-400">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="text-2xl text-blue-600"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com" className="text-2xl text-red-300"><i className="fab fa-instagram"></i></a>
            <a href="https://www.twitter.com" className="text-2xl text-blue-300"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com" className="text-2xl text-blue-500"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Cleaning Company. All rights reserved.</p>
      </div>
      <h1 className='text-center mt-4 text-[.6rem]'>A karis.Dev website</h1>
    </footer>
  );
}

export default Footer;
