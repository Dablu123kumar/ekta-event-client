import React from 'react';
import { Link } from 'react-router-dom';
import { ourGalleryData, stats } from '../data';

function Ourgallery() {
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
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>Our Gallery</h1>
              <p className='text-sm md:text-base'>
                <span className='hover:underline cursor-pointer mr-6 font-bold'>
                  <Link to='/'>Home</Link>
                </span>
                <span className='mx-2 font-bold'>Our Gallery</span>
              </p>
            </div>
          </div>
        </hero>

        {/* ************       Section 1        *********** */}

        <section className='w-full px-4 py-8 bg-white'>
          <h2 className='text-4xl font-semibold text-center my-16'>
            Our{' '}
            <span className='text-purple-700 border-b-2 border-orange-purple-800 pb-1'>
              Gallery
            </span>
          </h2>

          <div className='flex justify-center flex-wrap gap-8'>
            {ourGalleryData.map((item) => (
              <div
                key={item.id}
                className='w-[350px] md:w-[300px] h-[400px] overflow-hidden rounded-md shadow-md transition-transform duration-1000 hover:scale-110'
              >
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </div>
        </section>

        {/* *************      2nd Section       ************* */}

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

export default Ourgallery;
