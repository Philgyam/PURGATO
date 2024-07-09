import React, { useState } from 'react';
import { RiTeamLine } from "react-icons/ri";
import { MdDiscount } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";

import 'react-lazy-load-image-component/src/effects/blur.css';
import Grid from './Grid';

function Content() {
  const [activeTab, setActiveTab] = useState(0); // State to manage active tab index

  const sections = ['About Us', 'Our Mission', 'Our Services'];

  const handleTabClick = (index) => {
    setActiveTab(index); // Set the clicked tab index as active
  };

  return (
    <div className="h-auto w-full relative">
      {/* Line element */}
      <div className="hidden lg:flex w-full text-white justify-center gap-[4rem] mt-[2rem]">
        {sections.map((el, index) => (
          <button
            key={index}
            className={`text-2xl ${activeTab === index ? 'bg-orange-500 py-2 px-[1rem] rounded-lg' : 'text-black'}`}
            onClick={() => handleTabClick(index)}
          >
            {el}
          </button>
        ))}
      </div>

      <div className='flex flex-col lg:flex-row h-auto lg:h-[15rem] w-full lg:mt-[3rem] justify-around lg:gap-5 gap-[3rem] px-4 mt-[12rem]'>
        <div data-aos="fade-up" data-aos-duration="1000" className='flex lg:flex-col items-center lg:items-start gap-4 w-full transform transition-transform duration-300 hover:-translate-y-2 rounded-lg overflow-hidden'>
          <RiTeamLine className='lg:mx-auto rounded-lg' style={{ height: '5rem', width: '5rem', color: "#153448" }} />
          <h1 className='text-[1.3rem] rounded-lg'>
            <span className='text-2xl text-[#bb931d] font-bold rounded-lg'>
              Expert Team
            </span>
            <br />
            for quality services. No matter the size of the job we have a team for all
          </h1>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className='flex lg:flex-col items-center lg:items-start gap-4 w-full transform transition-transform duration-300 hover:-translate-y-2 rounded-lg overflow-hidden'>
          <FaHandshake className='lg:mx-auto rounded-lg' style={{ height: '5rem', width: '5rem', color: "#153448" }} />
          <h1 className='text-[1.3rem] rounded-lg'>
            <span className='text-2xl text-[#bb931d] font-bold rounded-lg'>
              Trustworthy
            </span>
            <br />
            for quality services. No matter the size of the job we have a team for all
          </h1>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className='flex lg:flex-col items-center lg:items-start gap-4 w-full transform transition-transform duration-300 hover:-translate-y-2 rounded-lg overflow-hidden'>
          <MdDiscount className='lg:mx-auto rounded-lg' style={{ height: '5rem', width: '5rem', color: "#153448" }} />
          <h1 className='text-[1.3rem] rounded-lg'>
            <span className='text-2xl text-[#bb931d] font-bold rounded-lg'>
              Affordable Pricing
            </span>
            <br />
            for quality services. No matter the size of the job we have a team for all
          </h1>
        </div>

        <div data-aos="fade-up" data-aos-duration="4000" className='flex lg:flex-col items-center lg:items-start gap-4 w-full transform transition-transform duration-300 hover:-translate-y-2 rounded-lg overflow-hidden'>
          <GiWashingMachine className='lg:mx-auto rounded-lg' style={{ height: '5rem', width: '5rem', color: "#153448" }} />
          <h1 className='text-[1.3rem] rounded-lg'>
            <span className='text-2xl text-[#bb931d] font-bold rounded-lg'>
              Advanced Equipment
            </span>
            <br /> for quality services. No matter the size of the job we have a team for all
          </h1>
        </div>
      </div>
{/* <Grid/> */}
    
    </div>
  );
}

export default Content;
