import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaQuoteRight } from 'react-icons/fa';
import { FaPhoneVolume } from "react-icons/fa6";
import phone from '../assets/images/phone.png';
import gmail from '../assets/images/gmail.png';

import win from '../assets/images/win.jpg';
import off from '../assets/images/off.webp';
import janitor from '../assets/images/janitor.jpg';
import event from '../assets/images/eve.webp';
import construct from '../assets/images/construct.jpg';
import move from '../assets/images/move.jpg';
import serviceback from '../assets/images/serviceback.jpg';
import grid4 from '../assets/images/grid4.jpg'

import { MdWindow } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiBroom } from "react-icons/gi";
import { MdEvent } from "react-icons/md";
import { MdLocalLaundryService } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import arrow from '../assets/images/arrow.png'
import { AiOutlineDoubleRight } from "react-icons/ai";
import process from '../assets/images/process-bg-1.jpg'
import { FaList } from "react-icons/fa";
import { RiHomeGearLine } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiChat3Line } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiFeedbackLine } from "react-icons/ri";
import { RiKey2Line } from "react-icons/ri";








const service = [
    {
        name: 'Window Cleaning',
        img: win,
        content: 'Our window cleaning service ensures streak-free and sparkling windows that enhance the beauty of your home or office. We use professional techniques and tools to achieve spotless results.',
        icon: <MdWindow/>
    },
    {
        name: 'Office Cleaning',
        img: off,
        content: 'Our comprehensive office cleaning services create a clean and organized workspace, promoting a healthy and productive environment. We handle everything from dusting to disinfecting high-touch areas.',
        icon: <HiBuildingOffice2 />
        
    },
    {
        name: 'Janitorial Services',
        img: janitor,
        content: 'Our janitorial services provide consistent and thorough cleaning for commercial properties, including restrooms, break rooms, and common areas. We tailor our services to meet your specific needs.',
        icon: <GiBroom/>
    },
    {
        name: 'Event Cleaning',
        img: event,
        content: 'We offer specialized event cleaning services to ensure your venue is spotless before and after your event. Our team handles everything from trash removal to deep cleaning, leaving the space immaculate.',
        icon: <MdEvent/>
    },
    {
        name: 'Commercial Laundry',
        img: construct,
        content: 'Our commercial laundry services cater to businesses that require regular and reliable laundering of uniforms, linens, and other fabrics. We ensure your items are clean, fresh, and professionally handled.',
        icon: <MdLocalLaundryService/>
    },
    {
        name: 'Relocation',
        img: move,
        content: 'Our relocation cleaning services provide a thorough clean for your old and new spaces, ensuring a smooth transition. We handle deep cleaning of kitchens, bathrooms, and living areas for a fresh start.',
        icon:<FaTruck />

    },
    {
        name: 'Full House Cleaning',
        img: serviceback,
        content: 'Our full house cleaning service covers every corner of your home, from top to bottom. We provide detailed cleaning for all rooms, including dusting, vacuuming, mopping, and sanitizing surfaces.',
        icon: <IoHomeOutline />

    }
];

function Header() {
  return (
    <header className="bg-[#F5EFE6] shadow-md py-4 px-8 flex justify-around items-center">
      <div className="flex items-start w-full justify-start">
        <h1 className="text-xl font-bold text-gray-800">LOGO</h1>
      </div>
     
      <div className="flex py-4 items-center justify-around w-full">
        <div className='flex justify-start font-bold gap-4 w-full'>
          <img className='h-[33px] w-[33px]' src={phone} alt="" />
          <div>
            <div>Call Us</div>
            <div>0234786271</div>
          </div>
        </div>
        <div className='flex justify-start font-bold gap-4 w-full'>
          <img className='h-[33px] w-[33px]' src={gmail} alt="" />
          <div>
            <div>Email Us</div>
            <div>purgato.com</div>
          </div>
        </div>
        <div className='flex justify-start w-full'>
          <button className='px-4 text-white py-4 rounded-full bg-[#116D6E]'>
            Click for Quote
          </button>
        </div>
      </div>
    </header>
  );
}

function Services() {
  const [selectedService, setSelectedService] = useState(service[0]);

  return (
    <div className='h-full w-full' style={{ backgroundImage: `url(${process})`}}>
      <Header />
      <div className="p-8">
        <div className='lg:flex-row flex flex-col lg:h-[30rem] h-[60rem] lg:gap-[0rem] mt-[0rem] w-full '>
          
          {/* First BOX */}
          <div className='w-full flex flex-col items-center h-[30rem]'>
            <div className='bg-blue-300 h-[20rem] rounded-2xl w-[90%] flex items-center justify-center sticky-top-small'>
              <img src={selectedService.img} alt={selectedService.name} className="h-full w-full object-cover rounded-2xl" />
            </div>
            <div className="mt-4 text-black lg:text-2xl text-center px-4">
              {selectedService.content}
            </div>
          </div>

          <div className='w-full h-[30rem] flex flex-col items-center'>
            {service.map((el, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedService(el)}
                className='mb-4  lg:w-1/2 w-full  px-6 py-4 bg-[#d8f6f7] text-black rounded-lg shadow-md hover:bg-[#01352C] hover:text-white transition duration-300 flex items-center'
              >
                <span className='mr-2'>{el.icon}</span>
                {el.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CIRCLES */}
      <div className='text-4xl hidden lg:block mb-[2rem] font-bold pl-[3rem]'>
        <h1>Process Purgato</h1>
      </div>

      <div className='h-[15rem] hidden justify-start px-[2rem] lg:flex w-full'>
        <div className='flex w-[100%] px-[2rem]'>
          <div className='flex relative group gap-5 w-full items-center'>
            <div data-aos="fade-right" data-aos-duration="1500" className='w-[10rem] rounded-full h-[10rem]'>
              <img className='w-[10rem] rounded-full h-[10rem]' src={win} alt="" />
              <button className='absolute top-2 group-hover:bg-[#FF5722] bg-[#01352C] h-[2.5rem] transition-transform duration-300 text-white text-2xl w-[2.5rem] rounded-full'>
                1
              </button>
            </div>
            <div>
              <AiOutlineDoubleRight className='animate-move' style={{ height: "3rem", width: "3rem" }} />
            </div>
          </div>
          <div className='flex relative group gap-5 w-full items-center'>
            <div data-aos="fade-right" className='w-[10rem] rounded-full h-[10rem]'>
              <img className='w-[10rem] rounded-full h-[10rem]' src={win} alt="" />
              <button className='absolute top-2 group-hover:bg-[#FF5722] bg-[#01352C] h-[2.5rem] transition-transform duration-300 text-white text-2xl w-[2.5rem] rounded-full'>
                1
              </button>
            </div>
            <div>
              <AiOutlineDoubleRight className='animate-move' style={{ height: "3rem", width: "3rem" }} />
            </div>
          </div>
          <div className='flex relative group gap-5 w-full items-center'>
            <div data-aos="fade-right" className='w-[10rem] rounded-full h-[10rem]'>
              <img className='w-[10rem] rounded-full h-[10rem]' src={win} alt="" />
              <button className='absolute top-2 group-hover:bg-[#FF5722] bg-[#01352C] h-[2.5rem] transition-transform duration-300 text-white text-2xl w-[2.5rem] rounded-full'>
                1
              </button>
            </div>
            <div>
              <AiOutlineDoubleRight className='animate-move' style={{ height: "3rem", width: "3rem" }} />
            </div>
          </div>
          <div className='flex relative group gap-5 w-full items-center'>
            <div data-aos="fade-right" className='w-[10rem] rounded-full h-[10rem]'>
              <img className='w-[10rem] rounded-full h-[10rem]' src={win} alt="" />
              <button className='absolute top-2 group-hover:bg-[#FF5722] bg-[#01352C] h-[2.5rem] transition-transform duration-300 text-white text-2xl w-[2.5rem] rounded-full'>
                1
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:flex w-[100%] h-[5rem] hidden   justify-around   xl:pl-[2rem]'>
        <div className='text-left text-2xl font-bold  w-full'> SERVICE REQUEST </div>
        <div className='text-left text-2xl  font-bold w-full'>TEAM PURGATO</div>
        <div className='text- font-bold text-2xl xl:ml-[-1rem] w-full'>TRANSFORMATION</div>
        <div className='text-left font-bold text-2xl  w-full'>SATISFACTION</div>
      </div>

      <div>
        <h1 className='text-5xl mt-[5rem] pl-[3rem] font-bold mb-[5rem]'>Purgato Essentials</h1>
        <div className='h-[50rem] w-full px-[5rem] gap-2 justify-around flex flex-col lg:flex-row '>
    <div className='w-full h-[40rem] gap-2 flex flex-col justify-around '>

        <div className='h-full w-full flex flex-col justify-around bg-pink-200'>
            <div className='flex w-full gap-5 items-center justify-start'>
                <div><RiHomeGearLine style={{ height:'3rem', width:'3rem', color: '#FF69B4' }}/></div>
                <div className='text-2xl font-bold'> Prepare Your Space: </div>
            </div>
            <div>
                Depending on the service booked (e.g., home cleaning), tidy up any personal items or clutter to allow the cleaners to work efficiently.
            </div>
        </div>
        
        <div className='h-full w-full flex flex-col justify-around bg-blue-200'>
            <div className='flex w-full gap-5 items-center justify-start'>
                <div><AiOutlineSafetyCertificate style={{ height:'3rem', width:'3rem', color: '#1E90FF' }}/></div>
                <div className='text-2xl font-bold'> Secure Valuables: </div>
            </div>
            <div>
                Put away or secure any valuables or sensitive items that you prefer not to be handled during the cleaning process.
            </div>
        </div>
       
        <div className='h-full w-full flex flex-col justify-around bg-pink-200'>
            <div className='flex w-full gap-5 items-center justify-start'>
                <div><RiChat3Line style={{ height:'3rem', width:'3rem', color: '#004225' }}/></div>
                <div className='text-2xl font-bold'> Communicate Special Instructions </div>
            </div>
            <div>
                If there are specific areas or tasks you want the cleaners to focus on or avoid, communicate these clearly before they start.
            </div>
        </div>
    </div>

    <div className='w-full h-[40rem] flex flex-col gap-2 justify-around '>
        <div className='h-full w-full flex flex-col justify-around '>
            <div className='flex w-full gap-5 items-center justify-start'>
                <div><AiOutlineDollarCircle style={{ height:'3rem', width:'3rem', color: '#D6D46D' }}/></div>
                <div className='text-2xl font-bold'> Payment Arrangements: </div>
            </div>
            <div>
                Ensure that payment arrangements are clear and settled according to the terms agreed upon with the cleaning service.
            </div>
        </div>

        <div className='h-full w-full flex flex-col justify-around '>
            <div className='flex w-full gap-5 items-center justify-start'>
                <div><RiFeedbackLine style={{ height:'3rem', width:'3rem', color: '#C40C0C' }}/></div>
                <div className='text-2xl font-bold'> Feedback and Follow-Up: </div>
            </div>
            <div>
                After the cleaning session, provide feedback to the cleaning service if necessary. If you are satisfied, consider scheduling regular cleanings or provide referrals if you were pleased with the service.
            </div>
        </div>
    </div>

    {/* Last div */}
    <div className='w-full h-[40rem] flex flex-col'>
        <div className='h-[33.33%] '>
            <div className='h-full w-full flex flex-col justify-around '>
                <div className='flex w-full gap-5 items-center justify-start'>
                    <div><RiKey2Line style={{ height:'3rem', width:'3rem', color: '#E42F45' }}/></div>
                    <div className='text-2xl font-bold'> Provide Access: </div>
                </div>
                <div>
                    Ensure that cleaners have access to the areas that need cleaning, including keys, access codes, or any specific instructions for entry.
                </div>
            </div>
        </div>
        <div className='h-[66.66%] rounded-3xl w-full relative bg-center bg-cover' style={{ backgroundImage: `url(${grid4})`}}>
    <div className="absolute inset-0 rounded-3xl bg-blue-600 opacity-60"></div>
   <h1>Hello there</h1>
   <div>Would you like to talk to customer service about your package or how to prepare</div>
</div>
    </div>
</div>


        
      </div>

     
    </div>
  );
}

export default Services;
