import React from 'react';
import { FaInfoCircle, FaShoppingCart, FaListUl, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-pink-100 px-8 py-6 flex justify-between items-center shadow-md">
      <div className="text-pink-600 text-3xl font-bold tracking-wider">🍩 DIPPIN' DONUTS</div>
      <ul className="flex text-pink-800 item-center font-semibold text-sm uppercase gap-20 pr-40">
        <li className="flex items-center gap-1 hover:text-pink-500 cursor-pointer"><FaInfoCircle /> About</li>
        <li className="flex items-center gap-1 hover:text-pink-500 cursor-pointer"><FaShoppingCart /> Order</li>
        <li className="flex items-center gap-1 hover:text-pink-500 cursor-pointer"><FaListUl /> Menu</li>
        <li className="flex items-center gap-1 hover:text-pink-500 cursor-pointer"><FaMapMarkerAlt /> Location</li>
        <li className="flex items-center gap-1 hover:text-pink-500 cursor-pointer"><FaEnvelope /> Contact</li>
      </ul>
    </nav>
  );
}
