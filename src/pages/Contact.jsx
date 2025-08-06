import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
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
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>Contact</h1>
              <p className='text-sm md:text-base'>
                <span className='hover:underline cursor-pointer mr-6 font-bold'>
                  <Link to='/'>Home</Link>
                </span>
                <span className='mx-2 font-bold'>Contact</span>
              </p>
            </div>
          </div>
        </hero>

        {/* ************       Section 1        *********** */}

        <section className='w-full bg-white pt-30 pb-16'>
          <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 md:px-16 gap-16 md:gap-10 items-start'>
            {/* Left Side: Image and Contact Box */}
            <div className='md:relative px-2'>
              <img
                src='/home-image/hero6.jpg'
                alt='Contact background'
                className='w-full md:w-[500px] md:h-[500px] lg:w-full h-full hidden md:block object-cover rounded-md'
              />

              <div
                className='md:absolute md:top-12 md:left-60 lg:left-80 bg-opacity-90 text-white p-4 lg:p-10 h-[400px] md:w-[60%]'
                style={{
                  backgroundImage:
                    "url('/contact-image/contact-bg-img.jpg')",
                }}
              >
                <h2 className='text-2xl font-bold mb-6'>Contact Details</h2>

                <div className='space-y-10'>
                  <p>
                    <span className='font-semibold'>Office Address:</span>
                    <br />
                   Spaze i Tech Park, Unit No. 413, 4th Floor, Tower B4, Sector - 49
                  </p>
                  <p>
                    <span className='font-semibold'>Mail Us:</span>
                    <br />
                   info@ektadecoration.com
                  </p>
                  <p>
                    <span className='font-semibold'>Telephone:</span>
                    <br />
                    <a href="tel:+91 9220586324">+91 9220586324</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}

            <div className='px-4 md:px-4 lg:px-20'>
              <p className='text-purple-800 uppercase tracking-wider font-semibold mb-2'>
                Get a Quote
              </p>
              <h2 className='text-2xl md:text-4xl font-bold mb-6 border-b pb-2'>
                Keep Get in Touch
              </h2>

          <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <input
                    required
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    type='text'
                    placeholder='First Name'
                    className='border border-gray-300 p-3 rounded-md w-full focus:outline-none'
                  />
                  <input
                    required
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    type='text'
                    placeholder='Last Name'
                    className='border border-gray-300 p-3 rounded-md w-full focus:outline-none'
                  />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <input
                    required
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    type='tel'
                    placeholder='Phone Number'
                    className='border border-gray-300 p-3 rounded-md w-full focus:outline-none'
                  />
                  <input
                    required
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    name='email'
                    placeholder='E-mail'
                    className='border border-gray-300 p-3 rounded-md w-full focus:outline-none'
                  />
                </div>
                <textarea
                  required
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='4'
                  placeholder='Message'
                  className='border border-gray-300 p-3 rounded-md w-full focus:outline-none '
                ></textarea>

                <button
                  type='submit'
                  className='bg-purple-500 cursor-pointer text-white hover:bg-purple-800 px-8 py-3 font-semibold rounded-md shadow-md border border-pink-500 hover:shadow-lg transition'
                >
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </section>

        <section>
          <iframe
            title='Gurugram Map'
            src='https://www.google.com/maps?q=Spaze+I+Tech+Park,+Tower+B4,+Sector+49,+Gurugram&output=embed'

            width='100%'
            height='400'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='rounded-xl'
          />
        </section>
      </div>
    </>
  );
}

export default Contact;
