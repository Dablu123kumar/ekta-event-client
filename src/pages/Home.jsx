import React, { useState, useRef } from 'react';
import {
  homeHeroSection,
  homefirstSection,
  eventSections,
  featuresSection,
  republicDaySection,
  adultBarthdaysection,
  anniversarySection,
  babbyShowerSection,
  kidsBarthdaySection,
  banquetHallsSection,
  justMarriedSection,
  roomDecorationSection,
  reviews,
  services,
  faqData,
} from '../data';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPhone } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Home = () => {
  const form = useRef();
  const [current, setCurrent] = useState(0);
  const links = [
    { icon: <FaFacebookF />, label: 'Facebook' },
    { icon: <FaTwitter />, label: 'Twitter' },
    { icon: <FaInstagram />, label: 'Instagram' },
    { icon: <FaYoutube />, label: 'Youtube' },
  ];

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Birthday Decoration', link: '/birthday-decoration' },
    { name: 'Anniversary Decoration', link: '/anniversary-decoration' },
    { name: 'Baby Shower', link: '/baby-shower' },
    { name: 'Banquet Hall', link: '/banquet-hall' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Contact', link: '/contact' },
  ];

   const [formData, setFormData] = useState({
     firstName: '',
     lastName: '',
     phone: '',
     email: '',
     message: '',
   });
 
   const handleChange = (e) => {
     setFormData({
       ...formData,
       [e.target.name]: e.target.value,
     });
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
 
     const { firstName, lastName, phone, email, message } = formData;
 
  
     const whatsappMessage =
       `Name: ${firstName} ${lastName}\n` +
       `Phone: ${phone}\n` +
       `Email: ${email}\n` +
       `Message: ${message}`;
 
     const encodedMessage = encodeURIComponent(whatsappMessage);
 
    
     const yourPhoneNumber = '919220586324';
 
     const whatsappURL = `https://wa.me/${yourPhoneNumber}?text=${encodedMessage}`;
 
     window.open(whatsappURL, '_blank');
   };

  return (
    // *******  Top Banner       ***************

    <div className='w-full mb-20 mt-1 bg-white'>
      {/*  1st  Hero Section */}

      <div className='px-2 md:px-6  md:pt-6'>
        <section className='w-full flex items-center justify-center mt-2 shadow-gray-700 rounded-sm'>
          <div className='w-full rounded-sm'>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                1024: { slidesPerView: 2 },
              }}
              loop={true}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {homeHeroSection.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className='h-full rounded-sm'>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='w-full h-[180px] md:h-[350px] lg:h-[400px] object-fit md:rounded-sm'
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* 2rd Section Cards */}

        {/* <section className='px-2 lg:px-16 py-10 bg-white'>
          {homefirstSection.map((item) => (
            <div
              key={item.id}
              className='flex flex-col lg:flex-row justify-between lg:gap-30 mt-4 mb-16 bg-no-repeat '
              style={{
                backgroundImage: "url('/about-image/aboutbg.png')",
                backgroundPosition: 'left center',
                backgroundSize: '60% 80%',
              }}
            >
             
              <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
                <img
                  src={item.image}
                  alt={item.titleHighlight}
                  className=' w-full shadow-lg md:h-[350px] lg:h-[550px] object-cover rounded-md'
                />
              </div>

        

              <div className='w-full lg:w-1/2 md:pl-12 lg:text-left'>
                <h4 className='text-purple-800 tracking-widest text-lg md:text-xl font-bold uppercase my-8 md:mb-6 text-center md:text-left'>
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
        </section> */}

        {/*  ***********       3rd  section     **********  */}

        {/* <section className="relative bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/home-image/married4.jpg')]">
         
          <div className='absolute inset-0 bg-black/50 z-0' />

       
          <div className='relative h-[500px] z-10 flex flex-col items-center justify-center px-4 text-white md:text-center'>
            <h1 className='text-lg md:text-5xl font-bold leading-snug mb-20'>
              Ekta Events Provide Affordable Services
              <br className='hidden md:block' />
              Save Time & Save Money.
            </h1>

         
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
           
              <div>
                <Link to='/contact'>
                  <button className='bg-purple-800 hover:bg-black transition duration-1000 text-white px-14 py-[22px] rounded font-bold shadow'>
                    CONTACT US
                  </button>
                </Link>
              </div>

              <a href='tel:+91 8709338363'>
                <div className='flex items-center bg-white text-black px-4 py-3 rounded shadow gap-2'>
                  <div className='bg-purple-800 text-white p-3 rounded-full text-xl'>
                    <FaPhone />
                  </div>
                  <span className='text-lg font-semibold'>+91 9220586324</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/*  ***********       2nd  section     **********  */}

        <section className='mt-14 mb-8 bg-white md:px-8'>
          <h2 className='text-2xl md:text-3xl font-semibold'>
            Features Products
          </h2>
          <hr className='mb-6 mt-2' />
          <Swiper
            spaceBetween={24}
            breakpoint={{
              // 640: { spaceBetween: 10 },
            }}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div className=' mt-4'>
              {featuresSection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4'>
                  <div className='transition-transform duration-300 hover:scale-110'>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='w-[420px] md:w-[450px] h-[220px] md:h-[450px] object-fit object-center'
                    />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>

        {/* <section>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {homefirstSection.map((card, index) => (
              <SwiperSlide key={index}>
                <div className='bg-zinc-100 h-[300px] mt-10 md:mt-20 rounded-t-sm pt-1 px-1 hover:bg-[#ED52DA]'>
                  <div className='flex flex-col h-full w-full justify-end items-center rounded-t-lg'>
                    <div className='rounded-t-lg mb-4'>
                      <img
                        src={card.image.src}
                        alt={card.title}
                        className='w-[120px] h-[120px] object-cover mb-10 rounded-full'
                      />
                    </div>
                    <h3 className='text-center w-full hover:bg-white bg-[#ED52DA] mt-2 py-5 font-semibold'>
                      {card.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section> */}

        {/*  *******    3rd Section     ************ */}

        <section className='pb-6 md:px-8'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Happy Republic Day
          </h2>
          <hr className='mb-12' />
          {/* <div className='mt-4 mb-8'>
            <img src='/home-image/republicday.jpg' alt='' />
          </div> */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {republicDaySection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>
                  <p className='text-center text-zinc-600 mt-4'>{card.title}</p>
                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='tel:+91  9220586324'>
                        <FaPhone className='text-purple-700 text-2xl mt-[5px]' />
                      </a>
                    </span>
                    <span>
                      <a href='tel:+91  9220586324'>
                        <FaWhatsapp className='text-purple-700 text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>

        {/* ****************       7th Sectin         ******************  */}

        <section className='pb-6 md:px-8'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Birthday Decoration
          </h2>
          <hr className='mb-8' />
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{
              delay: 2300,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {adultBarthdaysection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>

                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='tel:+91  9220586324'>
                        <FaPhone className='text-purple-700 text-2xl mt-[5px]' />
                      </a>
                    </span>
                    <span>
                      <a href='tel:+91  9220586324'>
                        <FaWhatsapp className='text-purple-700 text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>
        {/* ****************       5th Sectin         ******************  */}

        <section className='pb-6 md:px-8'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Anniversary Decoration
          </h2>
          <hr className='mb-8' />
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {anniversarySection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>
                  <p className='text-center text-zinc-600 mt-4'>{card.title}</p>
                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='to:+91  9220586324'>
                        {' '}
                        <FaWhatsapp className='text-purple-700 text-3xl mt-[5px]' />
                      </a>
                    </span>
                    <span>
                      <a href='tel:+91  9220586324'>
                        <FaWhatsapp className='text-purple-700 text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>

        {/* ****************       6th Sectin         ******************  */}

        <section className='pb-6 md:px-8'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Baby Shower and Welcome Baby
          </h2>
          <hr className='mb-8' />
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {babbyShowerSection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>
                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='tel:+91  9220586324'>
                        <FaPhone className='text-purple-700 text-2xl mt-[5px]' />
                      </a>
                    </span>
                    <span>
                      <a href='tel:+91  9220586324'>
                        <FaWhatsapp className='text-purple-700 text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>

        {/* ****************       7th Sectin         ******************  */}

        <section className='pb-6 md:px-8'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Kids Birthday
          </h2>
          <hr className='mb-8' />
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {kidsBarthdaySection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>
                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='tel:+91 9220586324'>
                        <FaPhone className='text-purple-700 text-2xl mt-[5px]' />
                      </a>
                    </span>
                    <span>
                      <a href='tel:+91  9220586324'>
                        {' '}
                        <FaWhatsapp className='text-purple-700 text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>

        {/* ****************       8th Sectin         ******************  */}

        <section className='pb-6 md:px-8'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Banquet Halls
          </h2>
          <hr className='mb-8' />
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {banquetHallsSection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>
                  <p className='text-center text-zinc-600 mt-4'>{card.title}</p>
                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='tel:+91 9220586324'>
                        {' '}
                        <FaPhone className='text-purple-700 text-2xl mt-[5px]' />
                      </a>
                    </span>
                    <span>
                      <a href='tel:+91 9220586324'>
                        <FaWhatsapp className='text-purple-700 text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>
        {/* ****************       10th Sectin         ******************  */}

        <section className='pb-6 md:px-8'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Just Married
          </h2>
          <hr className='mb-8' />
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {justMarriedSection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>
                  <p className='text-center text-zinc-600 mt-4'>{card.title}</p>
                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='tel:+91  9220586324'>
                        {' '}
                        <FaPhone className='text-purple-700 text-2xl mt-[5px]' />
                      </a>
                    </span>
                    <span>
                      <a href='tel:+91  9220586324'>
                        {' '}
                        <FaWhatsapp className='text-purple-700 text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>

        {/* ****************       11th Sectin         ******************  */}

        <section className='pb-6 md:px-8'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Room Decoration
          </h2>
          <hr className='mb-8' />
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {roomDecorationSection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>
                  <p className='text-center text-zinc-600 mt-4'>{card.title}</p>
                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='tel:+91 9220586324'></a>
                      <FaPhone className='text-purple-700 text-2xl mt-[5px]' />
                    </span>
                    <span>
                      <a href='tel:+91 9220586324'>
                        <FaWhatsapp className='text-purple-700 text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>
      </div>

      {/* **************         12th Section         ********** */}

      <section className="relative bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/home-image/oneclickbanner.jpeg')]">
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/60 z-0' />

        {/* Content */}
        <div className='relative h-[500px] z-10 flex flex-col items-center justify-center px-4 text-white text-center'>
          <h1 className='text-lg md:text-5xl font-bold leading-snug mb-6'>
            We Provide Affordable Services
            <br />
            Save Time & Save Money.
          </h1>

          {/* Button and Contact */}
          <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
            {/* Contact Button */}
            <div>
              <Link to='/contact'>
                <button className='bg-purple-800 hover:bg-purple-500 transition duration-1000 text-white px-14 py-[22px] rounded font-bold shadow'>
                  CONTACT US
                </button>
              </Link>
            </div>

            {/* Phone Button */}
            <a href='tel:+91   9220586324'>
              <div className='flex items-center bg-white text-black px-4 py-3 rounded shadow gap-2'>
                <div className='bg-purple-800 text-white p-3 rounded-full text-xl'>
                  <FaPhone />
                </div>
                <span className='text-lg font-semibold'>+91 9220586324</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/*  ****************      13th Section        ************* */}

      <section className=''>
        <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-30  md:px-6 lg:px-16 py-12'>
          {/* Left Side: Image */}
          <div className=''>
            <img
              src={reviews[current].image}
              alt='Review'
              className='rounded-lg px-2 shadow-2xl lg:w-[500px] w-full h-[300px] lg:h-[600px]'
            />
          </div>

          {/* ***********      Right Side: Text Content        ************* */}

          <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <h4 className='text-purple-800 uppercase tracking-wider font-bold text-xl mb-10 lg:mb-10 text-center lg:text-left'>
              Client Review
            </h4>
            <h2 className='text-3xl md:text-5xl text-zinc-800 font-bold'>
              What Our Client Say
            </h2>
            <hr className='mt-4 mb-8 lg:mb-12' />

            <div className='text-zinc-500 relative pl-4 md:pl-10 mb-4 md:mb-6 h-[100px]'>
              <FaQuoteLeft className='absolute left-0 top-1 text-pink-200 text-xs md:text-3xl' />
              <p className='md:text-lg text-md ' style={{ wordSpacing: '5px' }}>
                {' '}
                {reviews[current].text}
              </p>
            </div>

            <h5 className='text-lg md:text-3xl pt-10 md:pt-0 font-semibold'>
              {reviews[current].name}
            </h5>

            {/* Navigation Dots */}
            <div className='mt-4 md:mt-8 flex space-x-3 ml-28 lg:mt-20'>
              {reviews.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 w-8 rounded-full cursor-pointer transition-all duration-300 ${
                    current === index ? 'bg-purple-800' : 'bg-black'
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* *****************          14 Section  Welcome Section            ***************** */}

      {/* <section className='border mx-2 rounded-md lg:mx-30 my-10'>
        <div className='text-center my-6'>
          <h2 className='text-2xl font-semibold md:text-4xl mb-4'>
            Welcome to Ekta Events
          </h2>
          <p className='text-sm'>
           When choosing a point for balloon decoration, there are several factors to consider to ensure the best outcome. Here's a list of some key points to consider:
          </p>
        </div>

        <div className='px-4 md:px-10 pb-10'>
          {services.map((service, index) => (
            <div key={index} className=''>
              <h2 className='text-xl font-semibold pt-5 pb-2'>
                {service.title}
              </h2>
              {service.points ? (
                <ul className='list-disc pl-8 pt-6 md:pt-2 space-y-1'>
                  {service.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{service.description}</p>
              )}
            </div>
          ))}
        </div>
      </section> */}

      {/* <section>
        <div className='border mx-32 rounded-md mt-12 mb-16'>
          <div className='p-4 text-gray-800'>
            <h2 className='text-2xl font-bold mb-8 text-center text-purple-700'>
              Birthday Balloon Decoration Near Gurugram
            </h2>

            <ul className='space-y-4 list-disc px-6'>
              <li>
                <strong>Professional Setup for All Ages:</strong> Whether you're
                planning a first birthday, a teen celebration, or a 50th
                surprise party, balloon decorators near Gurugram offer a wide
                variety of themes and styles to suit every age. From cartoon
                characters for kids to elegant pastel designs for adults, the
                setups are thoughtfully planned. They include arches, backdrops,
                balloon walls, and more. Decorators use premium balloons and
                creative arrangements to bring your vision to life and make the
                space feel festive and personalized.
              </li>

              <li>
                <strong>Customization and At-Home Services:</strong> Many
                decorators now offer home setup services, making celebrations
                easier and more personal. You can choose custom colors,
                messages, LED balloons, and even name initials. From minimalist
                garlands to over-the-top ceiling installations, everything can
                be tailored to your event’s mood. Services are available for
                homes, cafes, banquets, rooftops, and gardens, so no matter your
                venue, your decor will stand out beautifully and
                Instagram-ready.
              </li>

              <li>
                <strong>Affordable and Accessible in Gurugram:</strong> The best
                part about birthday balloon decoration near Gurugram is the
                accessibility and value for money. Most vendors offer packages
                for every budget without compromising on quality. Whether it's a
                small celebration or a grand birthday bash, local decorators
                provide timely service, clean setups, and a hassle-free
                experience. Booking is easy via WhatsApp or local listing sites,
                making it super convenient for families in the city.
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* *********      Frequently asked Q. Section      ********** */}

      <section>
        <div className='mx-2 lg:mx-30 border p-6 rounded-xl mt-10 bg-white shadow'>
          <h2 className='text-3xl font-semibold text-center mb-6 text-purple-700'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-6'>
            {faqData.map((data, index) => (
              <details key={index} className='border-b border-gray-300 pb-2'>
                <summary className='cursor-pointer text-md md:text-lg font-medium'>
                  {index + 1}. {data.question}
                </summary>
                <div className='mt-2 text-gray-600 pl-2 md:pl-4'>
                  {/* Placeholder answer - update if you have real answers */}
                  {data.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-2 gap-30 items-start'>
          {/* Google Map */}

          <div>
            <iframe
              title='Gurgaon Map'
              src='https://www.google.com/maps?q=Spaze+I+Tech+Park,+Tower+B4,+Sector+49,+Gurugram&output=embed'
              width='100%'
              height='400'
              allowFullScreen=''
              loading='lazy'
              className='rounded-xl border'
            ></iframe>
          </div>

          {/* Contact Form */}

          <div>
            <h2 className='text-3xl md:text-3xl font-bold mb-8 text-center'>
              Get In <span className='text-purple-800 underline'>Touch</span>{' '}
              With Us
            </h2>
             <form
              onSubmit={handleSubmit}
              className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'
            >
              <input
              required
                name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                type='text'
                placeholder='Enter First name*'
                className='w-full border-b border-gray-300 focus:outline-none py-2 px-4'
              />
              <input
              required
                name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                type='text'
                placeholder='Enter Last Name*'
                className='w-full border-b border-gray-300 focus:outline-none py-2 px-4'
              />
              <input
              required
                name='email'
                  value={formData.email}
                  onChange={handleChange}
                type='email'
                placeholder='Enter your Email*'
                className='w-full border-b border-gray-300 focus:outline-none py-2 px-4'
              />
              <input
                name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                required
                type='tel'
                placeholder='Enter your Phone*'
                className='w-full border-b border-gray-300 focus:outline-none py-2 px-4'
              />
              <textarea
                name='message'
                 value={formData.message}
                  onChange={handleChange}
                required
                rows='4'
                placeholder='Enter Your Message*'
                className='col-span-1 md:col-span-2 w-full border-b border-gray-300 focus:outline-none py-2 resize-none px-4'
              />
              <button
                type='submit'
                className='col-span-1 md:col-span-2 bg-purple-800 hover:bgpurple-600 cursor-pointer text-white py-2 font-semibold rounded transition'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Statistics */}
        <div className='grid grid-cols-3 text-center gap-6 mt-30'>
          <div>
            <h3 className='text-3xl font-bold text-purple-700'>2350+</h3>
            <p className='text-gray-600'>Happy Clients</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold text-purple-700'>2500+</h3>
            <p className='text-gray-600'>Completed Events</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold text-purple-700'>300+</h3>
            <p className='text-gray-600'>Theme Collection</p>
          </div>
        </div>
      </section>

      <section>
        <div className='w-full max-w-6xl mx-auto pt-10 flex flex-wrap gap-10 justify-between items-center text-gray-600 text-sm'>
          {links.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center gap-2 px-4 ${
                index !== links.length - 1 ? 'border-r border-gray-400' : ''
              }`}
            >
              <Link to='#'>
                <span className='text-purple-800 text-lg'>{item.icon}</span>
              </Link>
              <Link to='#'>
                <span>{item.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
