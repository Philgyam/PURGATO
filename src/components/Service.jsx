import React from 'react';
import serviceback from '../assets/images/serviceback.jpg';
import grid3 from '../assets/images/grid3.jpg';
import win from '../assets/images/win.jpg';
import carpet from '../assets/images/carpet.jpg';
import off from '../assets/images/off.webp';
import janitor from '../assets/images/janitor.jpg';
import move from '../assets/images/move.jpg';
import event from '../assets/images/eve.webp';
import construct from '../assets/images/construct.jpg';
import { FaHome, FaStar } from "react-icons/fa";
import { MdOutlineWindow, MdCleanHands, MdOutlineEvent } from "react-icons/md";
import { ImOffice, ImTruck } from "react-icons/im";
import { GiRolledCloth } from "react-icons/gi";
import { IoConstructOutline } from "react-icons/io5";

function Service() {
  return (
    <div className='h-[230rem] lg:h-[100rem] w-full relative' style={{ backgroundImage: `url(${serviceback})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className='absolute inset-0 bg-[#164B60] opacity-80 z-10'></div>
      <div className='relative z-20 flex w-full h-full'>

        <div className='w-full h-full'>
          <h1 className='pl-8 mb-[1rem] flex gap-2 items-center text-white'>
            OUR SERVICES 
            <FaStar className='animate-pulse' style={{ color: '#FFBF00' }} />
          </h1>
          <div className='mb-[3rem] text-4xl line pl-8 text-white font-mono font-bold'>
            CLEAN UP YOUR SPACE WITH PURGATO. <br />
          </div>

          <div className='flex flex-col h-[160rem] mx-4 lg:px-[3rem] px-[1rem] lg:h-[50rem] justify-around'>

            {/* Div1 */}
            <div className='flex flex-col gap-3 mb-[5rem] justify-around h-full w-full'>

              <h1 className='text-2xl lg:text-3xl text-[#bb931d] mb-4'>Residential Cleaning</h1>

              <div className='flex flex-col lg:flex-row gap-10 lg:gap-3 lg:h-[20rem] justify-around h-full w-full'>
                <div className='w-full h-full group rounded-xl'>
                  <div
                    style={{
                      backgroundImage: `url(${grid3})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      position: 'relative',
                      height: '300px',
                      borderRadius: '20px',
                    }}
                    className='w-full h-full rounded-xl'
                  >
                    <div className='w-full text-2xl h-[5rem] flex gap-5 transition-all duration-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg group-hover:h-[8rem]'>
                      <FaHome
                        className='rounded-full bg-[#FFD93D] h-10 w-10 p-2 group-hover:text-white group-hover:bg-green-300 text-gray-800 transition-all mt-[-1.6rem] duration-500'
                      />
                      Full House Cleaning
                    </div>
                    <h1 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-center text-[.8rem]'>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus mauris,
                    </h1>
                  </div>
                </div>

                <div className='w-full h-full group rounded-xl'>
                  <div
                    style={{
                      backgroundImage: `url(${win})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      position: 'relative',
                      height: '300px',
                      borderRadius: '20px',
                    }}
                    className='w-full h-full rounded-xl'
                  >
                    <div className='w-full text-2xl h-[5rem] flex gap-5 transition-all duration-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg group-hover:h-[8rem]'>
                      <MdOutlineWindow
                        className='rounded-full bg-[#FFD93D] h-10 w-10 p-2 group-hover:text-white group-hover:bg-green-300 text-gray-800 transition-all mt-[-1.6rem] duration-500'
                      />
                      Window Cleaning
                    </div>
                    <h1 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-center text-[.8rem]'>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus mauris,
                    </h1>
                  </div>
                </div>

                <div className='w-full h-full group rounded-xl'>
                  <div
                    style={{
                      backgroundImage: `url(${carpet})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      position: 'relative',
                      height: '300px',
                      borderRadius: '20px',
                    }}
                    className='w-full h-full rounded-xl'
                  >
                    <div className='w-full text-2xl h-[5rem] flex gap-5 transition-all duration-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg group-hover:h-[8rem]'>
                      <GiRolledCloth
                        className='rounded-full bg-[#FFD93D] h-10 w-10 p-2 group-hover:text-white group-hover:bg-green-300 text-gray-800 transition-all mt-[-1.6rem] duration-500'
                      />
                      Carpet Cleaning
                    </div>
                    <h1 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-center text-[.8rem]'>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus mauris,
                    </h1>
                  </div>
                </div>
              </div>

            </div>

            {/* Div2 */}
            <div className='justify-around h-full w-full lg:mb-[5rem] mb-[8rem]'>
              <h1 className='text-2xl lg:text-3xl text-[#bb931d] mb-4'>Commercial Cleaning</h1>

              <div className='flex flex-col lg:flex-row gap-10 lg:gap-3 lg:h-[20rem] justify-around h-full w-full'>
                <div className='w-full h-full group rounded-xl'>
                  <div
                    style={{
                      backgroundImage: `url(${off})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      position: 'relative',
                      height: '300px',
                      borderRadius: '20px',
                    }}
                    className='w-full h-full rounded-xl'
                  >
                    <div className='w-full text-2xl h-[5rem] flex gap-5 transition-all duration-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg group-hover:h-[8rem]'>
                      <ImOffice
                        className='rounded-full bg-[#FFD93D] h-10 w-10 p-2 group-hover:text-white group-hover:bg-green-300 text-gray-800 transition-all mt-[-1.6rem] duration-500'
                      />
                      Office Cleaning
                    </div>
                    <h1 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-center text-[.8rem]'>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus mauris,
                    </h1>
                  </div>
                </div>

                <div className='w-full h-full group rounded-xl'>
                  <div
                    style={{
                      backgroundImage: `url(${janitor})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      position: 'relative',
                      height: '300px',
                      borderRadius: '20px',
                    }}
                    className='w-full h-full rounded-xl'
                  >
                    <div className='w-full text-2xl h-[5rem] flex gap-5 transition-all duration-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg group-hover:h-[8rem]'>
                      <MdCleanHands
                        className='rounded-full bg-[#FFD93D] h-10 w-10 p-2 group-hover:text-white group-hover:bg-green-300 text-gray-800 transition-all mt-[-1.6rem] duration-500'
                      />
                      Janitorial Services
                    </div>
                    <h1 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-center text-[.8rem]'>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus mauris,
                    </h1>
                  </div>
                </div>

                <div className='w-full h-full group rounded-xl'>
                  <div
                    style={{
                      backgroundImage: `url(${move})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      position: 'relative',
                      height: '300px',
                      borderRadius: '20px',
                    }}
                    className='w-full h-full rounded-xl'
                  >
                    <div className='w-full text-2xl h-[5rem] flex gap-5 transition-all duration-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg group-hover:h-[8rem]'>
                      <ImTruck
                        className='rounded-full bg-[#FFD93D] h-10 w-10 p-2 group-hover:text-white group-hover:bg-green-300 text-gray-800 transition-all mt-[-1.6rem] duration-500'
                      />
                      Moving Services
                    </div>
                    <h1 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-center text-[.8rem]'>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus mauris,
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Div3 */}
            <div className='justify-around h-full w-full lg:mb-[5rem] mb-[8rem]'>
              <h1 className='text-2xl lg:text-3xl text-[#bb931d] mb-4'>Specialized Cleaning</h1>

              <div className='flex flex-col lg:flex-row gap-10 lg:gap-3 lg:h-[20rem] justify-around h-full w-full'>
                <div className='w-full h-full group rounded-xl'>
                  <div
                    style={{
                      backgroundImage: `url(${event})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      position: 'relative',
                      height: '300px',
                      borderRadius: '20px',
                    }}
                    className='w-full h-full rounded-xl'
                  >
                    <div className='w-full text-2xl h-[5rem] flex gap-5 transition-all duration-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg group-hover:h-[8rem]'>
                      <MdOutlineEvent
                        className='rounded-full bg-[#FFD93D] h-10 w-10 p-2 group-hover:text-white group-hover:bg-green-300 text-gray-800 transition-all mt-[-1.6rem] duration-500'
                      />
                      Event Cleaning
                    </div>
                    <h1 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-center text-[.8rem]'>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus mauris,
                    </h1>
                  </div>
                </div>

                <div className='w-full h-full group rounded-xl'>
                  <div
                    style={{
                      backgroundImage: `url(${construct})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      position: 'relative',
                      height: '300px',
                      borderRadius: '20px',
                    }}
                    className='w-full h-full rounded-xl'
                  >
                    <div className='w-full text-2xl h-[5rem] flex gap-5 transition-all duration-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg group-hover:h-[8rem]'>
                      <IoConstructOutline
                        className='rounded-full bg-[#FFD93D] h-10 w-10 p-2 group-hover:text-white group-hover:bg-green-300 text-gray-800 transition-all mt-[-1.6rem] duration-500'
                      />
                      Construction Cleaning
                    </div>
                    <h1 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-center text-[.8rem]'>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus mauris,
                    </h1>
                  </div>
                </div>

                <div className='w-full h-full group rounded-xl'>
                  <div
                    style={{
                      backgroundImage: `url(${off})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      position: 'relative',
                      height: '300px',
                      borderRadius: '20px',
                    }}
                    className='w-full h-full rounded-xl'
                  >
                    <div className='w-full text-2xl h-[5rem] flex gap-5 transition-all duration-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg group-hover:h-[8rem]'>
                      <ImOffice
                        className='rounded-full bg-[#FFD93D] h-10 w-10 p-2 group-hover:text-white group-hover:bg-green-300 text-gray-800 transition-all mt-[-1.6rem] duration-500'
                      />
                      Office Cleaning
                    </div>
                    <h1 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-center text-[.8rem]'>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus mauris,
                    </h1>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
