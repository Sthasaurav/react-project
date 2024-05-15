import React, { useState } from 'react';

const Navbar = ({ onSignInButtonClick }) => { // Accept onSignInButtonClick prop
  return (
    <nav className="bg-gray-800 py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-white text-xl font-bold mr-6">My Website</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <button onClick={onSignInButtonClick} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 mr-4">Sign In</button>
        <button className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
