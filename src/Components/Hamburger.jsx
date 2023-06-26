import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-0" style={{ backgroundImage: `url('your-image.jpg')` }}>
      </div>

      <nav className="relative z-10 bg-transparent">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="w-12 h-12 mr-2" src="logo.png" alt="Logo" />
              <span className="text-white text-2xl font-bold">Your Logo</span>
            </div>

            <div className="md:hidden">
              <button className="focus:outline-none" onClick={toggleMenu}>
                {isOpen ? (
                  <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M19 6L6 19M6 6l13 13" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Responsive Menu */}
          {isOpen && (
            <ul className="mt-4 md:flex md:mt-0 md:ml-auto">
              <li className="mr-6">
                <a className="text-white hover:text-gray-200" href="#home">Home</a>
              </li>
              <li className="mr-6">
                <a className="text-white hover:text-gray-200" href="#about">About</a>
              </li>
              <li className="mr-6">
                <a className="text-white hover:text-gray-200" href="#services">Services</a>
              </li>
              {/* Add more navigation links here */}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
