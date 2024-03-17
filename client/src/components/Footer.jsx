import React from 'react'
import './Footer.css';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
  } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-blue-700'>
        <div className=''>
        <div className="custom-shape-divider-top-1710665462">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
    </svg>
    <div className='grid grid-cols-3 text-white mx-4 pb-8'>
        <div className='ml-8'>
            <h1 className='md:text-2xl font-bold mb-2'>Useful links</h1>
            <ul>
                <li className='py-2'>Home</li>
                <li className='py-2'>About us</li>
                <li className='py-2'>Contact us</li>
            </ul>
        </div>
        <div className='flex flex-col md:flex-row gap-16'>
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaInstagram /></span>
            <span><FaLinkedinIn /></span>
        </div>
        <div>
            <h2 className='md:text-2xl font-bold mb-4'>Contact</h2>
            <p>8th Floor, Patna One Mall, Frazer Road, Patna</p>
            <p>800001</p>  
        </div>
    </div>
</div>
        </div>
        <div><p className='text-center text-white text-sm'>© Copyrights 2023. HostelConnect. All Rights Reserved.</p></div>
    </footer>
  )
}

export default Footer