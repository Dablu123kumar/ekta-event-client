import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { categories, anniversarySection, progressData } from '../data';
import { Link } from 'react-router-dom';

const Anniversary = () => {
  const [progressValues, setProgressValues] = useState(
    progressData.map(() => 0)
  );
  const [refs, setRefs] = useState([]);

  useEffect(() => {
    setRefs((refs) =>
      Array(progressData.length)
        .fill()
        .map((_, i) => refs[i] || React.createRef())
    );
  }, []);

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && progressValues[index] === 0) {
            let current = 0;
            const interval = setInterval(() => {
              current += 1;
              setProgressValues((prev) => {
                const updated = [...prev];
                updated[index] = current;
                return updated;
              });
              if (current >= progressData[index].percent) {
                clearInterval(interval);
              }
            }, 15);
          }
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [refs]);

  return (
    <div>
      {/* Banner */}
      <div
        className='w-full h-[265px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center'
        style={{ backgroundImage: "url('/adult/adult1.jpg')" }}
      >
        <div className='relative z-10 text-center text-white'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Anniversary Decoration
          </h1>
          <p className='text-sm md:text-base'>
            <span className='hover:underline cursor-pointer mr-6 font-bold'>
              <Link to='/'>Home</Link>
            </span>
            <span className='mx-2 font-bold'>Anniversary Decoration</span>
          </p>
        </div>
      </div>

      {/* Sidebar + Swiper */}
      <section className='pt-8 md:pt-16 mb-10'>
        <div className='flex flex-col md:flex-row items-start justify-between px-2 md:px-16'>
          {/* Sidebar */}
          <div className='bg-purple-700 flex flex-col text-white w-full md:w-[350px] h-[550px] p-4  mb-6 md:mb-0'>
            {categories.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className='font-semibold bg-blue-350 hover:bg-blue-500 p-4 cursor-pointer'
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Swiper */}
          <div className='w-full md:w-[1050px] px-0 md:pl-4'>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
              loop={true}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {anniversarySection.map((card, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-cover object-center md:w-[500px] md:h-[450px]'
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <h2 className='mt-14 font-bold text-2xl pl-4 md:pl-0 md:text-5xl text-zinc-800'>
             Anniversary Decoration
            </h2>
          </div>
        </div>
      </section>

      {/* Animated Progress Cards */}
      <section className='px-4 pb-10 pt-6'>
        <div className='pb-10 lg:mr-10'>
          <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-end gap-6'>
            {progressData.map((item, index) => (
              <div
                key={index}
                ref={refs[index]}
                className='w-full border-zinc-300 border max-w-[326px] flex flex-col items-center justify-center h-[300px] p-6 bg-purple-300 shadow-xl rounded-md text-center'
              >
                <h2 className='text-3xl font-bold mb-4'>
                  {progressValues[index]}%
                </h2>

                <div className='relative w-full h-2 bg-white border border-black overflow-hidden mb-4'>
                  <div
                    className='absolute top-0 left-0 h-full bg-black transition-all duration-300'
                    style={{ width: `${progressValues[index]}%` }}
                  ></div>
                </div>

                <p className='text-lg font-semibold'>{item.label}</p>
              </div>
            ))}
          </div>

          {/* Image Row */}
          <div className='flex flex-wrap md:flex-nowrap justify-center lg:justify-end gap-6 pt-10'>
            <div className='max-w-[500px] w-full'>
              <img
                src='/home-image/anniversary4.jpg'
                alt=''
                className='w-full h-auto object-cover rounded-md'
              />
            </div>
            <div className='max-w-[500px] w-full'>
              <img
                src='/home-image/anniversary1.jpg'
                alt=''
                className='w-full h-auto object-cover rounded-md'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Anniversary;
