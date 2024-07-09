import React from 'react';
import grid1 from '../assets/images/grid1.jpg';
import grid2 from '../assets/images/grid2.jpg';
import grid3 from '../assets/images/grid3.jpg';
import { MdStars } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaHome, FaStar } from "react-icons/fa";


function Grid() {
  return (
    <>
    <h1 className='pl-8 mb-[1rem] mt-[6rem] flex gap-2 items-center text-black'>
            ABOUT US
            <FaStar className='animate-pulse' style={{ color: '#FFBF00' }} />
          </h1>
    <div className="  h-[70rem] pb-[4rem]   md:justify-center md:items-center  mb-[15rem] lg:mb-[5rem]  lg:h-[40rem] pt-[2rem] flex lg:flex-row flex-col gap-[2rem]  px-5 lg:px-[2rem] rounded-lg">
        
      <div className="text-2xl  flex flex-col lg:pl-[3rem] h-full text-gray-800 rounded-lg w-full ">
        <h2 className="text-3xl font-semibold rounded-lg">OUR WAY <br /> THE CLEAN WAY</h2>
        <div>
          <p className='lg:w-[80%] mt-2 text-[1.3rem] '>
            Where cleanliness meets professionalism. We are dedicated to providing exceptional cleaning 
            services tailored to meet your needs. We stand for:
            <br />
            <div className='flex items-center mt-5 gap-2'><FaCheckCircle style={{color:'#1A5319'}} /> <h1>Excellence</h1></div>
            <div className='flex items-center mt-5 gap-2'><FaCheckCircle style={{color:'#1A5319'}} /> <h1>Professionalism</h1></div>
            <div className='flex items-center mt-5 gap-2'><FaCheckCircle style={{color:'#1A5319'}} /> <h1>Commitment</h1></div>
          </p>
          <button className='bg-orange-500 py-2 px-[1rem] flex text-white mt-[2rem] rounded-lg'>
              Read More
          </button>
        </div>
      </div>

      <div className="flex  md:justify-center md:h-[60rem] lg:mt-[25rem]   w-full relative">
  <div className="flex flex-col ">
    <div    className="w-[15rem]  h-[20rem] md:w-[20rem]  rounded-xl m-4 bg-cover bg-center"  style={{ backgroundImage: `url(${grid1})` }} >

    </div>
    <div   className="lg:w-[13rem] lg:h-[14.5rem] w-[10rem] h-[12rem] ml-4 md:ml-[1rem] border-[#EEF7FF] border-[13px]   bg-cover bg-center rounded-lg " style={{ backgroundImage: `url(${grid2})` }}></div>
  </div>
  <div className="flex flex-col ">
    <div className="lg:w-32 w-[6rem]  h-32 flex flex-col  bg-[#219C90] md:ml-1  lg:ml-1 mt-[6rem] rounded-lg ">
        <span className='text-3xl lg:text-5xl font-semibold text-white text-center'> 20+</span> <br />
        <h1 className='text-center text-white font-mono'>Customer</h1>
        <h1 className='text-center text-white font-mono'>Service</h1>
    </div>
    <div data-aos="fade-left"  className="lg:w-[18rem] md:w-[18rem] w-[14rem]  absolute h-[20rem] rounded-lg bg-cover bg-center border-[#EEF7FF] border-[13px] top-[50%]   md:left-[46%]  lg:left-[46%]   left-[43%]  lg:top-[28%]"style={{ backgroundImage: `url(${grid3})` }}></div>
  </div>
</div>
{/* data-aos="fade-right" */}

    </div>
    </>
  );
}

export default Grid;



