import React from 'react';
import { Link } from 'react-router-dom';
import Twitter from './svg/Twitter.svg'
import Facebook from './svg/Facebook.svg'
import Youtube from './svg/Youtube.svg'
import Logo from '../routes/images/logo.png'

const Footer = () => {
  return (
    <div className='custom-footer bg-black'>
      <footer className="max-w-[1250px] mx-auto py-[1rem] lg:py-[5rem]">
        <div className="py-4">
          <div className="flex flex-wrap justify-center lg:justify-between gap-5">
            <div className="w-auto px-4">
              <Link to='/' className='bg-black'><img src={Logo} alt="Logo" className='w-[8rem] bg-black mb-3' /></Link>
              <ul className='flex flex-row gap-4 justify-center lg:justify-start'>
                <Link to='#' className="text-white hover:text-primary"><img src={Twitter} alt="Twitter" className='w-[30px] lg:w-[30px]' /></Link>
                <Link to='#' className="text-white hover:text-primary"><img src={Facebook} alt="Facebook" className='w-[30px] lg:w-[30px]' /></Link>
                <Link to='#' className="text-white hover:text-primary"><img src={Youtube} alt="Youtube" className='w-[30px] lg:w-[30px]' /></Link>
              </ul>
            </div>
            <div className="w-full md:w-1/3 px-4 gap-5 flex flex-col">
              <ul className='flex gap-5 justify-center lg:justify-center'>
                <Link to='/anime/upcoming' className="text-white opacity-[.6] hover:underline hover:text-white text-lg">New</Link>
                <Link to='/anime/trending-anime' className="text-white opacity-[.6] hover:underline hover:text-white text-lg">Top</Link>
                <Link to='#' className="text-white opacity-[.6] hover:underline hover:text-white text-lg">Collections</Link>
              </ul>
              <ul className='flex gap-5 justify-center lg:justify-center'>
                <Link to='#' className='text-white opacity-[.6] hover:text-white hover:underline text-lg'>Terms of services</Link>
                <Link to='#' className='text-white opacity-[.6] hover:text-white hover:underline text-lg'>Contacts</Link>
                <Link to='https://myanimelist.net/' target='_blank' className='text-white opacity-[.6] hover:text-white hover:underline text-lg'>MAL</Link>
              </ul>
            </div>
            <div className='flex items-center'>
              <p className='text-xs text-white opacity-[.6] mt-7 md:mt-2 px-4'>2023@ All rights reserved</p>
            </div>
            {/* <div className="w-full md:w-1/3 px-4">
              <ul>
                <Link to='#' className="text-gray-400 hover:text-white" href="#">Link 1</Link>
                <Link to='#' className="text-gray-400 hover:text-white" href="#">Link 2</Link>
                <Link to='#' className="text-gray-400 hover:text-white" href="#">Link 3</Link>
              </ul>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
