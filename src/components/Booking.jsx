import React, { useState } from 'react';
import icon1 from '../assets/images/icon-1.png';
import icon2 from '../assets/images/icon1.png';
import icon3 from '../assets/images/icon-3.png';
import icon4 from '../assets/images/recycle.png';
import circleimg from '../assets/images/circleimg.png';
import icon5 from '../assets/images/tank.png'
import { FaHome, FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded p-4 mb-4">
      <div className="flex justify-between cursor-pointer" onClick={toggleFAQ}>
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-lg font-semibold">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="mt-2 text-base text-gray-700">{answer}</div>}
    </div>
  );
}

function FAQ() {
  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer a variety of cleaning services including residential, commercial, and specialized cleaning services.' },
    { question: 'What are your rates?', answer: 'Our rates vary depending on the type and frequency of the service. Please contact us for a detailed quote.' },
    { question: 'Are your cleaners insured?', answer: 'Yes, all our cleaners are fully insured for your peace of mind.' },
    // Add more FAQs as needed
  ];

  return (
    <div className="max-w-2xl mb-[5rem] mx-auto mt-10 px-4 h-80 overflow-y-auto w-full bg-gray-100 rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

function Booking() {
  return (
    <div className='h-auto w-full'>
<h1 className='pl-8 mb-[1rem] flex gap-2 items-center text-black '>
            MAKE A BOOKING
            <FaStar className='animate-pulse' style={{ color: '#FFBF00' }} />
          </h1>      <h1 className="text-4xl font-bold text-center mt-8">You're just a Booking <br /> away</h1>

      <div className='flex flex-col lg:flex-row justify-around mt-8'>
        <div className="h-96 w-full p-4 flex justify-center items-center relative">
          <div className="absolute h-[14rem] bg-[#EEF7FF] border-2 border-gray-400 rounded-full lg:w-[16rem] lg:h-[16rem] w-[14rem]">
            <img className='h-full w-full object-cover rounded-full' src={circleimg} alt="" />
          </div>

          <div className="grid  grid-cols-2 lg:gap-[10rem] gap-[8rem]">
            <div  className="flex justify-center items-center border-2 border-gray-400 rounded-full h-16 w-16">
              <img className='h-12 w-12 object-contain' src={icon3} alt="" />
            </div>
            <div  className="flex justify-center items-center border-2 border-gray-400 rounded-full h-16 w-16">
              <img className='h-12 w-12 object-contain' src={icon2} alt="" />
            </div>
            <div  className="flex justify-center items-center border-2 border-gray-400 rounded-full h-16 w-16">
              <img className='h-12 w-12 object-contain' src={icon5} alt="" />
            </div>
            <div   className="flex justify-center items-center border-2 border-gray-400 rounded-full h-16 w-16">
              <img className='h-12 w-12 object-contain' src={icon4} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-gray-300 h-auto lg:w-[70%] mx-3 lg:mr-10 p-4 rounded-md shadow-lg">
          <div>
            <h2 className="text-lg font-bold mb-4">Book a Service</h2>
            <form>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 h-12" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 h-12" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 h-12" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Type of Cleaning</label>
                <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 h-12">
                  <option value="option1"></option>
                  <option value="option2"> House cleaning</option>
                  <option value="option3">Office Space Cleaning</option>
                  <option value="option3">Window Cleaning</option>
                  <option value="option3">Carpet Cleaning</option>
                  <option value="option3">Laundry</option>
                  <option value="option3">Fumigation</option>
                  <option value="option3">Janitorial Services</option>
                  <option value="option3">Event Cleaning</option>
                  <option value="option3">Relocation services</option>
                  <option value="option3">Fumigation Services</option>
                  <option value="option3">Gardening and Landscaping</option>
                  <option value="option3">Bin washing</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 h-12" />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md items-center w-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 flex justify-center">
                Submit
              </button> 
            </form>
          </div>
        </div>
      </div>

      <FAQ />
    </div>
  );
}

export default Booking;
