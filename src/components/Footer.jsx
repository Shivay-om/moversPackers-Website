import React from 'react';
import { SocialIcons } from '.';
import logo from '../images/logo.png'

const Footer = ({ serviceLinks, quickLinks, contactInfo }) => {
  return (
    <footer className='flex text-white gap-3 py-8'>
      <div className=' w-1/3 p-4'>
        <img className='mb-8' src={logo} />
        <p className='mb-5'>Even the all-powerful Pointing has no control about the blind tex it is almost unorthographic life One day however.</p>
        <div className='flex gap-4'>
          {SocialIcons.map((link, index) => (
            <div key={index} className='flex justify-center items-center bg-[#da0134] w-9 h-9 rounded-full'>
              <span>{link.img}</span>
            </div>

          )
          )}
        </div>
      </div>

      {/* right side content */}
      <div className='container mx-auto flex justify-between'>
        <div className='w-1/3'>
          <h3 className='text-3xl mb-3 font-bold'>Services</h3>
          <hr className='border-t-2  w-16 border-[#da0134]' />
          <hr className='border-t-1 mb-4 w-24 border-[#da0134]' />
          
          <ul>
            {serviceLinks.map((link, index) => (
              <li key={index} className='mb-2'>
                <a href={link.url} className='hover:text-[#da0134]'>
                  <span className='mr-3'>{link.icon}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-1/3 '>
          <h3 className='text-3xl font-bold mb-3'>Quick Links</h3>
          <hr className='border-t-2  w-16 border-[#da0134]' />
          <hr className='border-t-1 mb-4 w-24 border-[#da0134]' />
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index} className='mb-2'>
                <a href={link.url} className='hover:text-[#da0134]'>
                  <span className='mr-3'>{link.icon}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-1/3'>
          <h3 className='text-3xl font-bold mb-3'>Contact Us</h3>
          <hr className='border-t-2  w-16 border-[#da0134]' />
          <hr className='border-t-1 mb-4 w-24 border-[#da0134]' />
          <ul>
            {contactInfo.map((info, index) => (
              <li key={index} className='mb-2 pr-8'>
                <span className='mr-3'>{info.icon}</span>
                {info.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
