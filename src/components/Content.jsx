import React, { useState } from 'react';
import { RiTeamLine } from "react-icons/ri";
import { MdDiscount } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import grid1 from '../assets/images/grid1.jpg';
import grid2 from '../assets/images/grid2.jpg';
import grid3 from '../assets/images/grid3.jpg';










import { MdStars } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";


function Content() {
  const [activeTab, setActiveTab] = useState(0); // State to manage active tab index
  const [linePosition, setLinePosition] = useState(0); // State to manage line position

  const sections = ['About Us', 'Our mission', 'Our Services'];

  const handleTabClick = (index) => {
    setActiveTab(index); // Set the clicked tab index as active
    // Update line position based on clicked tab index
    setLinePosition(index * 1); // Adjust the multiplier to fit your design
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
            onMouseEnter={() => setLinePosition(index * 1)} // Adjust the multiplier to fit your design
          >
            {el}
          </button>
        ))}
      </div>

      <div className='flex flex-col lg:flex-row h-auto lg:h-[15rem] w-full justify-around lg:gap-5 gap-[3rem]  px-4 mt-[3rem]'>
        <div data-aos="fade-up" data-aos-duration="2000" className='flex  lg:flex-col items-center lg:items-start gap-4 w-full transform transition-transform duration-300 hover:-translate-y-2 rounded-lg overflow-hidden'>
          <RiTeamLine className='lg:mx-auto rounded-lg'
            style={{
              height: '5rem',
              width: '5rem',
              color: "#153448"
            }} />
          <h1 className='text-[1.3rem] rounded-lg'>
            <span className='text-2xl text-[#bb931d] font-bold rounded-lg'>
              Expert Team
            </span>
            <br />
            for quality services. No matter the size of the job we have a team for all
          </h1>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className='flex lg:flex-col items-center lg:items-start gap-4 w-full transform transition-transform duration-300 hover:-translate-y-2 rounded-lg overflow-hidden'>
          <FaHandshake className='lg:mx-auto rounded-lg'
            style={{
              height: '5rem',
              width: '5rem',
              color: "#153448"
            }} />
          <h1 className='text-[1.3rem] rounded-lg'>
            <span className='text-2xl text-[#bb931d] font-bold rounded-lg'>
              Trustworthy
            </span>
            <br />
            for quality services. No matter the size of the job we have a team for all
          </h1>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className='flex lg:flex-col items-center lg:items-start gap-4 w-full transform transition-transform duration-300 hover:-translate-y-2 rounded-lg overflow-hidden'>
          <MdDiscount className='lg:mx-auto rounded-lg'
            style={{
              height: '5rem',
              width: '5rem',
              color: "#153448"
            }} />
          <h1 className='text-[1.3rem] rounded-lg'>
            <span className='text-2xl text-[#bb931d] font-bold rounded-lg'>
              Affordable Pricing
            </span>
            <br />
            for quality services. No matter the size of the job we have a team for all
          </h1>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className='flex lg:flex-col items-center lg:items-start gap-4 w-full transform transition-transform duration-300 hover:-translate-y-2 rounded-lg overflow-hidden'>
          <GiWashingMachine className='lg:mx-auto rounded-lg'
            style={{
              height: '5rem',
              width: '5rem',
              color: "#153448"
            }} />
          <h1 className='text-[1.3rem] rounded-lg'>
            <span className='text-2xl text-[#bb931d] font-bold rounded-lg'>
              Advanced Equipment
            </span>
            <br /> for quality services. No matter the size of the job we have a team for all
          </h1>
        </div>
      </div>

      <div className="mt-[6rem] h-[60rem] mb-[25rem] lg:mb-[5rem] lg:h-[40rem] pt-[2rem]  flex lg:flex-row flex-col gap-[2rem] xl:w-[80]%  px-5  lg:px-[2rem] rounded-lg">
        <div className="text-2xl flex flex-col lg:pl-[3rem] h-full  text-gray-800 rounded-lg w-full lg:w-[50%]">
          <h2 className="text-3xl font-semibold rounded-lg">Welcome to Purgato</h2>
          <div>
            <p className='lg:w-[80%] mt-2 text-[1.3rem] '>
              Where cleanliness meets professionalism. We are dedicated to providing exceptional cleaning 
              services tailored to meet your needs. We stand for:
              <br />
              <div className='flex items-center mt-5 gap-2'><FaCheckCircle style={{color:'#1A5319'}} /> <h1>Excellence</h1></div>
              <div className='flex items-center mt-5 gap-2'><FaCheckCircle style={{color:'#1A5319'}} /> <h1>Professionalism</h1></div>
              <div className='flex items-center mt-5 gap-2'><FaCheckCircle style={{color:'#1A5319'}} /> <h1>Commitment</h1></div>


              
            </p>
            <button className='bg-orange-500 py-2 px-[1rem]  flex text-white mt-[2rem] rounded-lg'>
                Read More
            </button>
          </div>
        </div>

        <div className="w-full  lg:w-[50%] flex justify-center rounded-lg">
          <div className="grid grid-cols-2 w-full h-[20rem] lg:h-[25rem] relative rounded-lg">
            <div  className="absolute w-[50%] rounded-[1rem] h-[17rem] lg:w-[15rem] left-[0] ">
                <img src={grid1} className='rounded-[1rem] w-[100%]  lg:w-[100%] h-[19rem] lg:h-[22rem] ' alt="" />
            </div>
            <div className="absolute  rounded-[1rem]    h-[10rem] w-[7rem] lg:w-[10rem] lg:left-[48%]  left-[65%] z-50 top-[20%] lg:top-[20%] ">
                <h1 className='text-center pt-10 font-semibold text-black'> <span className='text-2xl'>50+</span>  satisfied <br />
                <h1 className='flex items-center justify-center text-center  gap-2'>customers  <MdStars style={{
                    color: "#F49D1A"
                }} /></h1></h1>
               
            </div>
            <div   style={{
                backgroundImage:`url(${grid3})`,
                backgroundPosition:'center',
                backgroundSize:'cover'
            }} className="absolute rounded-[1rem] bg-red-400   h-[10rem] w-[10rem] lg:w-[10rem] top-[100%] lg:top-[95%] ">

            </div>
            <div   className="absolute rounded-[1rem] border-white border-[1rem] w-[65%] h-[20rem] lg:w-[15rem] top-[60%] lg:left-[35%] left-[38%]  ">
                <img src={grid2} className='rounded-[1rem]' alt="" />
            </div>
          </div>
        </div>
      </div>

    
     

 


    </div>
  );
}

export default Content;
