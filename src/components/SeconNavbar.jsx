import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';
import { MdArrowDropUp } from 'react-icons/md';

const SecondNavbar = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [navcolor, setNavColor] = useState(false);

  const handleNavcolor = () => {
    if (
      location.pathname === '/adult-birthday' ||
      location.pathname === '/anniversary-decoration' ||
      location.pathname === '/baby-shower' ||
      location.pathname === '/kids-birthday' ||
      location.pathname === '/banquet-hall' ||
      location.pathname === '/just-married' ||
      location.pathname === '/room-decoration'
    ) {
      setNavColor(true);
    } else {
      if (
        location.pathname === '/our-gallery' ||
        location.pathname === '/contact' ||
        location.pathname === '/about'
      ) {
        setNavColor(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 300) {
        setShowNavbar(true);
      } else if (scrollY <= 80) {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`transition-all duration-300 fixed top-0 left-0 right-0 z-50 bg-white shadow-lg px-4 md:px-6 py-4 md:py-2 flex items-center justify-between ${
        showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      {/* Left - Hamburger */}
      <div
        className='text-2xl md:hidden cursor-pointer z-20'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars className='text-black' />
      </div>

      <div className='hidden  md:flex flex-col items-center'>
        <img
          src='/nav-image/navlog.png'
          alt='nav-log'
          className='w-38 h-20'
        />
      </div>

      {/* Center - Nav Links (desktop only) */}

      <div className='hidden lg:flex gap-16 font-semibold text-black text-lg'>
        <Link
          onMouseEnter={handleNavcolor}
          to='/'
          className={
            location.pathname === '/'
              ? 'text-pink-500 underline underline-offset-4'
              :  'hover:text-pink-500 hover:underline underline-offset-4'
          }
        >
          Home
        </Link>
        <Link
          onMouseEnter={handleNavcolor}
          to='/about'
          className={
            location.pathname === '/about'
              ? 'text-pink-500 underline underline-offset-4'
              :  'hover:text-pink-500 hover:underline underline-offset-4'
          }
        >
          About
        </Link>

        {/* Activities Dropdown */}

        <div className='relative group'>
          <button className='text-lg font-semibold text-black'>
            <Link className={navcolor ? 'text-pink-400' : 'text-black hover:text-pink-500'}>
              Decoration
            </Link>
          </button>
          <div
            onMouseEnter={handleNavcolor}
            className='absolute top-full left-0 mt-2 py-4 bg-white shadow-lg rounded-md w-60 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 invisible group-hover:visible'
          >
            <Link
              to='/birthday-decoration'
              className='block px-4  text-black py-4 hover:text-white hover:bg-purple-500 text-sm'
            >
              Birthday Decoration
            </Link>
            <Link
              to='/anniversary-decoration'
              className='block px-4  text-black py-4 hover:text-white hover:bg-purple-500 text-sm'
            >
              Anniversary Decoration
            </Link>
            <Link
              to='/baby-shower'
              className='block px-4  text-black py-4 hover:text-white hover:bg-purple-500 text-sm'
            >
              Baby Shower Decoration
            </Link>

            <Link
              to='/banquet-hall'
              className='block px-4  text-black py-4 hover:text-white hover:bg-purple-500 text-sm'
            >
              Banquet Hall Decoration
            </Link>
          </div>
        </div>

        <Link
          onMouseEnter={handleNavcolor}
          to='/gallery'
          className={
            location.pathname === '/gallery'
              ? 'text-pink-500 underline underline-offset-6'
              : 'hover:text-pink-500 hover:underline underline-offset-6'
          }
        >
          Gallery
        </Link>
        <Link
          onMouseEnter={handleNavcolor}
          to='/contact'
          className={
            location.pathname === '/contact'
              ? 'text-pink-500 underline underline-offset-4'
              : 'hover:text-pink-500 hover:underline underline-offset-4'
          }
        >
          Contact
        </Link>
      </div>

      {/* Right - Contact & Button */}
      <div className='flex items-center gap-10'>
        <div className='hidden md:flex items-center gap-3'>
          <div className='bg-purple-700 p-3 rounded-full'>
            <FaPhone className='text-white' />
          </div>
          <div className='text-sm leading-tight'>
            <div className='text-gray-800'>PHONE:</div>
            <a
              href='tel:+9220586324'
              className='text-zince-800 font-semibold text-lg'
            >
              +91 9220586324
            </a>
          </div>
        </div>

        <Link to='/contact'>
          <button className='bg-purple-600 text-sm text-white py-2 px-2 md:px-6 md:py-3 rounded-sm font-medium hover:bg-purple-800 transition'>
            Contact us
          </button>
        </Link>
      </div>

      {/* Mobile Overlay */}

      {menuOpen && (
        <div
          className='fixed inset-0 bg-black/60 z-10 md:hidden'
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0  w-80 bg-white shadow-lg z-30 flex flex-col gap-3 pb-20 transition-transform duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close (cross) button */}
        <div className='flex  justify-between px-4 bg-white'>
          <Link to='/'>
           <div className='flex flex-col items-center py-1'>
             <img
              src='/nav-image/navlog.png'
              alt=''
              className='w-30 h-12'
            />
           </div>
          </Link>
          <button
            className='text-lg text-black font-bold'
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Mobile Links */}
        <div className='px-4 flex flex-col gap-y-2'>
          <Link
            to='/'
            className='text-black text-md font-bold'
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <hr className='' />
          <Link
            to='/about'
            className='text-black text-md font-bold'
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
        <hr className='mx-4' />

        {/* Expandable Activities Submenu */}

        <div className='flex flex-col gap-2 px-4'>
          <button
            className='text-black text-md flex justify-between items-center font-bold'
            onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
          >
            Decoration
            <span>
              {mobileSubmenuOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </span>
          </button>
          {mobileSubmenuOpen && (
            <div className='ml-2 flex flex-col gap-2'>
              <Link
                to='/birthday-decoration'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4'
                onClick={() => setMenuOpen(false)}
              >
                Birthday Decoration
              </Link>
              <Link
                to='anniversary-decoration'
                className='text-sm text-gray-900 bg-zinc-100 py-2 px-4'
                onClick={() => setMenuOpen(false)}
              >
                Anniversary Decoration
              </Link>
              <Link
                to='/baby-shower'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4'
                onClick={() => setMenuOpen(false)}
              >
                Baby Shower Decoration
              </Link>

              <Link
                to='/banquet-hall'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4'
                onClick={() => setMenuOpen(false)}
              >
                Banquet Hall Decoration
              </Link>
            </div>
          )}
        </div>
        <hr className='mx-4' />

        <div className='px-4 flex flex-col gap-y-4'>
          <Link
            to='/gallery'
            className='text-black text-md font-bold'
            onClick={() => setMenuOpen(false)}
          >
            Our Gallery
          </Link>
          <hr />
          <Link
            to='/contact'
            className='text-black text-md font-bold'
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SecondNavbar;
