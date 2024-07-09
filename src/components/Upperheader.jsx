import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import logobg from '../assets/images/logobg.png'




function Upperheader() {

    
  return (
    <div className='w-full px-4 lg:px-[2rem] h-[5rem] flex bg-white   items-center md:flex justify-between'>
        <div className='h-[5rem]  w-[5rem]'>
            <img  src={logobg} alt="" />

        </div>
        <div className='lg:flex gap-[2rem]'>

        <div>
        <p className='flex items-center space-x-2'>
              <IoPhonePortraitOutline className="text-blue-400" />
              <span>(+233)551102707</span>
            </p>
        </div>
        <div>
        <p className=' hidden lg:flex items-center space-x-2'>
              <FaLocationDot className="text-red-400" /> 
              <span>11 Nii Boi Avenue, West Legon, Accra</span>
            </p>
        </div>
        <div>
        <p className='flex items-center space-x-2'>
              <MdOutlineEmail className="text-red-400" />
              <span>info@purgatoltd.com</span>
            </p>
        </div>

        </div>


        
    </div>
  )
}

export default Upperheader