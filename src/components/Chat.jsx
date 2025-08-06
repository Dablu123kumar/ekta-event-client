import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Chat = () => {
  return (
    <>
     <div className='hidden md:block fixed bottom-0 md:bottom-20 md:right-2 z-50'>
        <div className='flex md:flex-col  md:gap-y-10 md:items-end justify-between md:justify-end'>
          <span className='bg-purple-700 p-4 rounded-xl'>
            <Link to='tel:+91 9870576497'>
              <FaPhone className='text-white text-2xl mt-[5px]' />
            </Link>
          </span>

          <span className='bg-purple-700 p-4 rounded-xl text-center'>
            <Link to='tel:+91 9870576497'>
              <FaWhatsapp className='text-white text-3xl mt-[5px]' />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Chat;
