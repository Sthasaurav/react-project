// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <a href="/" className="text-white text-2xl font-bold">My React App</a>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
              <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
