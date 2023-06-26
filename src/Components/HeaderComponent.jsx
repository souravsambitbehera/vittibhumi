import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth < 768) {
      setOpen(!open);
    }
  };

  let Links = [
    { name: 'HOME', link: '/' },
    { name: 'ABOUT US', link: 'about' },
    { name: 'CONTACT', link: 'contact' },
    { name: 'GALLERY', link: 'gallery' },
    { name: 'PROJECT', link: 'project' },
  ];

  const headerStyle = {
    backgroundImage: "url('aboutImage.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
  };

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="md:flex justify-between py-4 md:px-10 px-7" style={headerStyle}>
        <div className="font-bold text-2xl cursor-pointer flex font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <img src="LOGO (1).png" alt="" />
          </span>
        </div>

        <div
          onClick={toggleMenu}
          className="md:hidden text-3xl absolute right-8 top-6 cursor-pointer"
        >
          {open ? <GrClose className="text-gray-800" /> : <GiHamburgerMenu className="text-gray-800" />}
        </div>

        <ul
          className={`md:flex md:pb-0 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0 bg-gray-900'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
