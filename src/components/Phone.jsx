import React from 'react';
import { IoPhonePortraitOutline } from "react-icons/io5";


const StickyPhoneIcon = () => {
  return (
    <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 bg-[#005C78] text-white p-3 rounded-full shadow-lg flex items-center justify-center z-50">
      <a href="tel:+233551102707" className="flex items-center justify-center">
      <IoPhonePortraitOutline style={{height:'2rem', width:'2rem'}} />

      </a>
    </div>
  );
};

export default StickyPhoneIcon;
