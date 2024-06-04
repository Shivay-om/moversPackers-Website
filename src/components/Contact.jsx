import React, { useState } from 'react';
import { ConatctList, contactInfo, quickLinks } from './index.jsx';
import Footer from './Footer.jsx';
import { serviceLinks } from './index.jsx';

const Contact = () => {


  return (
    <div>
      <div className='flex flex-col justify-center items-center py-10 gap-4'>
        <h1 className='text-3xl font-bold text-black'>Contact Us</h1>
        <p className='w-[550px] text-center text-[#707070] text-[18px]'>
          Separated They Live In Bookmarksgrove Right At The Coast Of The Semantics, A Large Language Ocean.
        </p>
      </div>

      <div className='flex w-full p-8'>
        {/* for left content */}
        <div className='w-1/2 p-8'>
          <p className='text-3xl font-bold mb-6'>Contact Information</p>
          <div className='flex flex-wrap justify-between gap-4 mt-4 mb-4 items-center'>
            {ConatctList.map((card, index) => {
              const ContactComponent = card.image;
              const [isHovered, setIsHovered] = useState(false);

              const handleMouseEnter = () => {
                setIsHovered(true);
              };

              const handleMouseLeave = () => {
                setIsHovered(false);
              };

              return (
                <div
                  key={index}
                  className='flex flex-col w-[45%] p-4 text-center justify-center items-center border rounded-xl shadow-[rgba(17,17,26,0.1)_0px_4px_16px_0px_inset,rgba(17,17,26,0.05)_0px_8px_32px_0px]'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <div
                    className={`h-[80px] w-[80px] flex justify-center items-center m-3 rounded-full border transition-colors duration-300 shadow-[rgba(17,17,26,0.1)_0px_4px_16px_0px_inset,rgba(17,17,26,0.05)_0px_8px_32px_0px] ${isHovered ? 'bg-[#da0134]' : 'bg-transparent'}`}
                  >
                    <ContactComponent
                      fillColor={isHovered ? "#fff" : "#da0134"}
                      className={`icon transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#707070]'}`}
                    />
                  </div>
                  <h1 className='text-lg font-bold'>{card.title}</h1>
                  <p className='text-[#707070] w-[200px] mb-4 mt-2'>{card.Description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* for right content */}
        <div className='w-1/2 border p-10 shadow-[rgba(17,17,26,0.1)_0px_4px_16px_0px_inset,rgba(17,17,26,0.05)_0px_8px_32px_0px] rounded-lg ml-4'>
          <div>
            <p className='text-3xl font-bold mb-8'>Get In Touch</p>
            <div className='flex flex-col gap-6 '>
              <div className='flex gap-4'>
                <input className='flex-1 p-4 border rounded outline-none' type="text" placeholder='Enter Your Name' />
                <input className='flex-1 p-4 border rounded outline-none' type="email" placeholder='Enter Your Email' />
              </div>
              <div className='flex gap-4 rounded'>
                <input className='flex-1 p-4 border rounded outline-none' type="text" placeholder='Enter Your Subject' />
                <input className='flex-1 p-4 border rounded outline-none' type="text" placeholder='Enter Your Mobile No.' />
              </div>
              <textarea className='w-full h-[200px] p-4 border rounded outline-none' placeholder='Message'></textarea>
              <button className='w-[100px] p-2 bg-[#da0134] text-white rounded hover:bg-black'>Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex text-white bg-black'>
        <div className='flex mx-auto gap-3 w-[90%]'>
          <Footer
            serviceLinks={serviceLinks}
            quickLinks={quickLinks}
            contactInfo={contactInfo}
          // logoList={logoList}
          />

        </div>
      </div>
      <div className='bg-black text-center text-white'>
        <hr className='w-[90%] mx-auto text-[#707070]' />
        <p className='py-6'> © 2023 <span className='text-[#da0134]'>Move & Co</span> All Rights Reserved.</p>
      </div>
    </div>

  );
};

export default Contact;
