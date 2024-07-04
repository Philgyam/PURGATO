import React from 'react';

function Dropdown() {
  return (
    <div className="fixed top-[5rem] inset-0 z-50 overflow-hidden bg-gray-900 flex justify-center items-center">
      <div className="absolute inset-y-0 left-0 w-64 bg-white shadow-xl transform -translate-x-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Menu</h2>
        </div>
        <nav className="py-4">
          <ul className="space-y-2">
            <li>
              <a href="#home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Home</a>
            </li>
            <li>
              <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Services</a>
            </li>
            <li>
              <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Dropdown;
