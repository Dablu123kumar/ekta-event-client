import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';
import SecondNavbar from './SeconNavbar';
import { MdArrowDropDown } from 'react-icons/md';
import { MdArrowDropUp } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [decorationOpen, setDecorationOpen] = useState(false);
  const location = useLocation();
  const [subMenu, setSubmenue] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Decoration',
      subMenu: [
        { name: 'Birthday', path: '/Birthday-decoration' },
        { name: 'Anniversary', path: '/Anniversary-decoration' },
        { name: 'Baby Shower', path: '/Baby-Shower' },
        { name: 'Banquet Hall', path: '/banquet-hall' },
      ],
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Trends', path: '/trends' },
    { name: 'Contact', path: '/contact' },
  ];


  return (
    <nav className='bg-white shadow-md w-full'>
      {/* Top bar */}
      <div className='bg-[#6c3cac] text-white flex items-center justify-between px-4 gap-2 py-4 md:px-20'>
        <div className='flex gap-2 text-white text-sm'>
          <Link className='p-1 flex items-center lg:p-3 rounded-xs bg-white'>
            <FaFacebookF className='text-purple-900'/>
          </Link>
          <Link className='p-1 flex items-center lg:p-3 rounded-xs bg-white'>
            <IoLogoTwitter className='text-purple-900'/>
          </Link>
          <Link className='p-1 flex items-center lg:p-3 rounded-xs bg-white'>
            <IoLogoYoutube className='text-purple-900'/>
          </Link>
        </div>
        <div className='md:flex lg:gap-x-12 md:font-bold'>
          <Link
            to='tel:+919220586324'
            className='flex items-center lg:justify-center gap-2'
          >
            <FaPhoneAlt className='text-xs lg:text-xl'/>
            <p className='text-sm md:text-lg'>+91 9220586324</p>
          </Link>
          <span className='flex items-center justify-center gap-2 lg:text-lg cursor-pointer'>
            <MdEmail className='text-xs lg:text-2xl'/>
            <p className='text-sm md:text-lg'>info@ektadecoration.com</p>
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <div className='max-w-8xl px-2 md:px-8 mx-auto py-4 md:py-0 flex justify-between items-center'>
        <div className='hidden md:flex flex-col items-center justify-center my-4'>
          <Link to='/'>
            <img
              src='/nav-image/navlog.png'
              alt='nav-log'
              className='w-38 h-20'
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-16'>
          {navLinks.map((link, i) =>
            !link.subMenu ? (
              <li key={i}>
                <Link
                  to={link.path}
                  className={`text-lg font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-pink-700 border-b-2 border-pink-600'
                      : 'text-gray-800 hover:text-pink-600'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ) : (
              <li key={i} className='relative group'>
                <span className='text-lg font-medium text-gray-800 cursor-pointer hover:text-pink-600'>
                  {link.name}
                </span>
                <ul className='absolute top-8 left-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50'>
                  {link.subMenu.map((sub, idx) => (
                    <li key={idx}>
                      <Link
                        to={sub.path}
                        className='block px-4 py-2 text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition'
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>

        {/* Hamburger Icon */}
        <div className='md:hidden text-xl cursor-pointer' onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <Link to='/contact'>
          <button className='bg-purple-700 text-white font-bold py-3 px-6 rounded-sm hover:bg-purple-500 transition'>
            Contac us
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className='md:hidden flex flex-col px-6 pb-4 shadow-lg'>
          {navLinks.map((link, i) =>
            !link.subMenu ? (
              <li key={i} className='py-2'>
                <Link
                  to={link.path}
                  onClick={toggleMenu}
                  className={`block text-lg font-medium ${
                    location.pathname === link.path
                      ? 'text-pink-600'
                      : 'text-gray-700 hover:text-pink-600'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ) : (
              <li key={i} className='py-2'>
                <button
                  onClick={() => setDecorationOpen(!decorationOpen)}
                  className='block text-lg font-medium text-gray-700 hover:text-pink-600 w-full text-left'
                >
                  <div
                    className='flex items-center'
                    onClick={() => setSubmenue(!subMenu)}
                  >
                    {link.name}
                    <span className='pt-1'>
                      {subMenu ? <MdArrowDropUp /> : <MdArrowDropDown />}
                    </span>
                  </div>
                </button>
                {decorationOpen && (
                  <ul className='pl-4 pt-2'>
                    {link.subMenu.map((sub, idx) => (
                      <li key={idx}>
                        <Link
                          to={sub.path}
                          onClick={toggleMenu}
                          className='block py-1 text-gray-600 hover:text-pink-600 transition'
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          )}
        </ul>
      )}

      <SecondNavbar />
    </nav>
  );
};

export default Navbar;
