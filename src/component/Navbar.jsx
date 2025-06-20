import React from 'react';

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-pink-100 py-4 px-8 flex justify-between items-center shadow-md">
        {/* Left: Brand Name */}
        <div className="text-pink-600 text-3xl font-bold tracking-wider py-10 px-5">
          DIPPIN' DONUTS
        </div>

        {/* Right: Menu Items */}
        <ul className="flex space-x-8 text-pink-800 font-bold text-sm uppercase pr-250 gap-20">
          <li className="hover:text-pink-500 cursor-pointer">About Us</li>
          <li className="hover:text-pink-500 cursor-pointer">Order Online</li>
          <li className="hover:text-pink-500 cursor-pointer">Menu</li>
          <li className="hover:text-pink-500 cursor-pointer">Locations</li>
          <li className="hover:text-pink-500 cursor-pointer">Contact Us</li>
        </ul>
      </nav>

      {/* Simple Body Section */}
      <div className="bg-pink-50 px-8 py-50 flex flex-col md:flex-row items-center justify-between">
        
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-pink-600 mb-4 px-15">
            DIPPIN' DONUTS
          </h1>
          <p className="text-gray-700 mb-6 text-lg px-15 py-5">
            Dive into our world of deliciously dipped creations.
          </p>
          <button className="bg-pink-500 my-10 mx-15 text-white px-15 py-2 rounded-full hover:bg-pink-600 transition duration-300">
            Start Dippin’
          </button>
        </div>

        
        <div className="md:w-1/2 flex justify-center pl-80 h-70">
          <img
            src="https://i.pinimg.com/736x/19/af/94/19af9402d9f8ddf594c4108855e791ac.jpg"
            alt="Donut"
            className="w-64 h-auto "
          />
        </div>
        <div className ="bg-pink-600 rounded-3xl ">

        </div>
      </div>
    </>
  );
};

export default Navbar;
