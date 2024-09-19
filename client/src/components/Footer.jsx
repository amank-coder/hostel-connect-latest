import React from 'react'
import './Footer.css';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,  } from "react-icons/fa"
  import { IoLogoWhatsapp } from "react-icons/io";


const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white pb-8 custom-shape-divider-top-1710665462">
         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
    </svg>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">HostelConnect</h3>
              <p className="mb-4">Making hostel life easier for students.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400"><FaFacebook size={24} /></a>
                <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
                <a href="#" className="hover:text-blue-400"><FaInstagram size={24} /></a>
                <a href="#" className="hover:text-green-400"><IoLogoWhatsapp size={24} /></a>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Email: support@hostelconnect.com</p>
              <p className="mb-2">Phone: +91 999 999 9999</p>
              <p>Address: VIT-Vellore, Katpadi, Vellore, Tamil Nadu</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 HostelConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer