import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer className='bg-[url(/footer_img/footer-bg.png)] bg-cover bg-center bg-black text-white pt-14 lg:pb-6'>
        <div className='md:mx-12 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-40 px-6'>
          {/* Left: Logo and Info */}
          <div className=''>
            <div className='flex items-center mb-6'>
              <img
                src='/nav-image/navlog.png'
                alt='Profile'
                className='h-[100px] rounded-md'
              />
            </div>
            <p className='text-sm text-stone-300 mb-6 leading-loose'>
              For any event, balloon artists can craft stunning sculptures from
              favorite animals to themed decorations that match your
              celebration.
            </p>
            <p className='text-sm text-stone-300 flex items-center gap-2 mb-6'>
              <span>
                <IoLocationOutline className='text-white text-lg' />
              </span>{' '}
             Spaze i Tech Park, Unit No. 413, 4th Floor, Tower B4, Sector - 49
            </p>
            <Link to='tel:+91 9220586324'>
              <p className='text-sm text-stone-300 flex items-center gap-2'>
                <span>
                  <FaPhone className='text-white text-sm mt-[5px]' />
                </span>{' '}
                +919220586324
              </p>
            </Link>
            <span className='text-stone-300 flex items-center gap-2 mt-6 cursor-pointer'>
              <MdEmail className='text-white' />
              <p className=''>info@ektadecoration.com</p>
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-2xl font-bold text-zinc-100 mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-6 text-sm text-stone-300'>
              <li>
                <Link href='/' className='hover:text-yellow-300'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' className='hover:text-yellow-300'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/our-gallery' className='hover:text-yellow-300'>
                  Our Gallery
                </Link>
              </li>
              <li>
                <Link to='contact' className='hover:text-yellow-300'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Activities Section */}

          <div>
            <h3 className='text-2xl font-bold mb-4 text-zinc-100'>
              Decoration
            </h3>
            <ul className='space-y-6 text-sm text-stone-300 flex flex-col'>
              <Link to='/adult-birthday' className='hover:text-amber-300'>
                <li>BarthdayDecoration</li>
              </Link>
              <Link
                to='/anniversary-decoration'
                className='hover:text-amber-300'
              >
                <li>Anniversary Decoration</li>
              </Link>
              <Link to='/baby-shower' className='hover:text-amber-300'>
                <li>Baby Shower & Welcome Baby</li>
              </Link>
              {/* <Link to='/kids-birthday' className='hover:text-amber-300'>
                <li>Kids Birthday</li>
              </Link> */}
              <Link to='/banquet-hall' className='hover:text-amber-300'>
                <li>Banquet Halls</li>
              </Link>
              {/* <Link to='/just-married' className='hover:text-amber-300'>
                <li>Just Married</li>
              </Link>
              <Link to='/room-decoration' className='hover:text-amber-300'>
                <li>Room Decoration</li>
              </Link> */}
            </ul>
          </div>

          {/* Gallery */}
          {/* <div>
            <h3 className='text-2xl font-semibold mb-4 text-zinc-100'>Our Gallery</h3>
            <div className='grid grid-cols-2 gap-x-10 gap-y-2'>
              <img
                src='public/footer_img/footer-left1.jpg'
                alt='Gallery 1'
                className='w-full h-30 object-cover'
              />
              <img
                src='public/footer_img/footer-left2.jpg'
                alt='Gallery 2'
                className='w-full h-30 object-cover'
              />
              <img
                src='public/footer_img/footer-left3.jpg'
                alt='Gallery 3'
                className='w-full h-30 object-cover'
              />
              <img
                src='public/footer_img/footer-left4.jpg'
                alt='Gallery 4'
                className='w-full h-30 object-cover'
              />
            </div>
          </div> */}
        </div>

        <div className='text-xs text-gray-500 mt-10 border-gray-700 pt-4 px-4 pb-6 text-center'>
          © 2025 by Ekta Events All Right Reserved. {' '}
          <Link to='https://webralecon.com/' className='text-blue-500'>
             Designed By Webralecon India Pvt. Ltd.
          </Link>
        </div>
        <div className='md:hidden w-full rounded-md'>
          <div className='flex justify-between md:justify-end'>
            <span className='bg-green-500 font-semibold text-center p-4 w-full rounded-tl-md'>
              <Link to='https://wa.me/919870576497?text=Hello i am here' className='flex items-center justify-center gap-2'>
                 <FaWhatsapp className='text-white p-1 bg-green-600 rounded-full text-3xl mt-[5px]' /> Whatsapp
              </Link>
            </span>

            <span className='bg-blue-500 p-4 text-center font-semibold w-full rounded-tr-md'>
              <Link to='tel:+91 9870576497' className='flex items-center justify-center gap-2'>
                <FaPhone className='text-white bg-green-600 rounded-full p-2 text-4xl' />Call Now
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
