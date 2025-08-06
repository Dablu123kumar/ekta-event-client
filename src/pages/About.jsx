import React from 'react';
import { Link } from 'react-router-dom';
import { eventSections, stats } from '../data';
import { FaPhone } from 'react-icons/fa6';

function About() {
  return (
    <>
      <div>
        <hero>
          <div
            className='w-full h-[265px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center'
            style={{
              backgroundImage: "url('/ourgallery/ourgalleryhero.jpg')",
            }}
          >
            <div className='relative z-10 text-center text-white'>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>About Us</h1>
              <p className='text-sm md:text-base'>
                <span className='hover:underline cursor-pointer mr-6 font-bold'>
                  <Link to='/'>Home</Link>
                </span>
                <span className='mx-2 font-bold'>About Us</span>
              </p>
            </div>
          </div>
        </hero>

        {/* ************       Section 1        *********** */}

        <section className='px-2 lg:px-16 py-10 bg-white'>
          {eventSections.map((item) => (
            <div
              key={item.id}
              className='flex flex-col lg:flex-row justify-between lg:gap-30 mt-4 mb-16 bg-no-repeat '
              style={{
                backgroundImage: "url('/about-image/aboutbg.png')",
                backgroundPosition: 'left center',
                backgroundSize: '60% 80%',
              }}
            >
              {/* Left Image */}
              <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
                <img
                  src={item.image}
                  alt={item.titleHighlight}
                  className=' w-full shadow-lg md:h-[350px] lg:h-[550px] object-cover'
                />
              </div>

              {/* Right Text */}

              <div className='w-full lg:w-1/2 md:pl-12 lg:text-left'>
                <h4 className='text-purple-700 tracking-widest text-xl font-bold uppercase my-8 md:mb-6 text-center md:text-left'>
                  {item.subtitle}
                </h4>
                <h2 className='text-2xl md:text-5xl lg:text-4xl mb-4 pl-2 md:pl-0 leading-tight'>
                  <span className='font font-semibold'>{item.heading}</span>{' '}
                  <span className='text-black font-black'>
                    {item.titleHighlight}
                  </span>{' '}
                  Experience.
                </h2>
                <p className='text-gray-600 px-3 text-md md:text-[16px] leading-relaxed mb-6'>
                  {item.description}
                </p>
                <p className='text-black font-semibold text-lg px-2'>
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* *************       2nd  Section */}

        <section className="relative bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/home-image/hero8.jpg')]">
          {/* Overlay */}
          <div className='absolute inset-0 bg-black/70 z-0' />

          {/* Content */}
          <div className='relative h-[500px] z-10 flex flex-col items-center justify-center px-4 text-white text-center'>
            <h1 className='text-lg md:text-5xl font-bold leading-snug mb-6'>
              We Provide Affordable Services
              <br />
              Save Time & Save Money.111
            </h1>

            {/* Button and Contact */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
              {/* Contact Button */}
              <div>
                <Link to='/contact'>
                <button className='bg-purple-700 hover:bg-blue-600 transition duration-1000 text-white px-14 py-[22px] rounded font-bold shadow'>
                  CONTACT US
                </button>
                </Link>
              </div>

              {/* Phone Button */}
             <a href="tel:+91  9220586324">
               <div className='flex items-center bg-white text-black px-4 py-3 rounded shadow gap-2'>
                <div className='bg-purple-700 text-white p-3 rounded-full text-xl'>
                  <FaPhone />
                </div>
                <span className='text-lg font-semibold'>+91  9220586324</span>
              </div>
             </a>
            </div>
          </div>
        </section>

        {/* *******      3rd  Section    ******* */}

        <section className='bg-gray-50 pt-10 mt-10 pb-16 flex w-full justify-center'>
          <div className='max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-y-20  text-center w-full'>
            {stats.map((stat, index) => (
              <div key={index} className='relative'>
                {/* Line + Dot */}
                <div className='flex flex-col items-center'>
                  <div className='w-1 h-16 bg-purple-700 mb-1'></div>
                  <div className='w-3 h-3 bg-purple-700 rounded-full mb-4'></div>
                </div>

                {/* Number */}
                <h2 className='text-purple-600 text-4xl font-bold relative inline-block'>
                  {stat.value}
                </h2>

                {/* Label */}
                <p className='text-sm md:text-lg mt-3 text-zinc-500'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
