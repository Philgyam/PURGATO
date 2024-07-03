import React from 'react';
import icon1 from '../assets/images/icon-1.png';
import icon2 from '../assets/images/icon1.png';
import icon3 from '../assets/images/icon-3.png';
import circleimg from '../assets/images/circleimg.png';

function Booking() {
  return (
    <div className='h-[45rem] w-full'>
      <h1 className="text-xl font-bold">You're just a Booking away</h1>

      <div className='flex flex-col lg:flex-row justify-around'>
        <div className="h-96 w-full p-4 flex justify-center items-center relative">
          <div className="absolute h-[14rem] bg-[#EEF7FF] border-2 border-gray-400 rounded-full lg:w-[16rem] lg:h-[16rem] w-[14rem]">
            <img className='h-full w-full object-cover' src={circleimg} alt="" />
          </div>

          <div className="grid grid-cols-2 lg:gap-[10rem] gap-[8rem]">
            <div className="flex justify-center items-center border-2 border-gray-400 rounded-full h-16 w-16">
              <img className='h-12 w-12 object-contain' src={icon3} alt="" />
            </div>
            <div className="flex justify-center items-center border-2 border-gray-400 rounded-full h-16 w-16">
              <img className='h-12 w-12 object-contain' src={icon2} alt="" />
            </div>
            <div className="flex justify-center items-center border-2 border-gray-400 rounded-full h-16 w-16">
              <img className='h-12 w-12 object-contain' src={icon1} alt="" />
            </div>
            <div className="flex justify-center items-center border-2 border-gray-400 rounded-full h-16 w-16">
              <img className='h-12 w-12 object-contain' src={icon3} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-gray-300 h-[38rem] lg:w-[70%] mx-3 lg:mr-10 p-4">
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
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
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
    </div>
  );
}

export default Booking;
