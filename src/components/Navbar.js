import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-300 py-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
  
        <div className="flex items-center">
          <img src="/image.png" alt="Logo" className="w-12 h-12 rounded-full bg-white" />
        </div>


        <ul className="flex">
          <li className="mr-6">
            <button className="text-black focus:outline-none">Home</button>
          </li>
          <li className="mr-6">
            <button className="text-black focus:outline-none">Categories</button>
          </li>
          <li>
            <button className="text-black focus:outline-none">About Us</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
