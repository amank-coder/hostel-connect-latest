import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../components/variants';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className=''>
      <nav className='flex justify-between mt-1 bg-white mb-4 py-1 mx-4 items-center top-2 px-4 bg-opacity-80 sticky z-20 rounded-lg'>
        <div>
          <img src='/logo.png' className='w-28'/>
        </div>
        <div>
          <a href='/login'><button className='bg-blue-400 hover:bg-blue-500 text-white p-2 px-4 rounded-md'>Login</button></a>
        </div>
      </nav>

      <div className='flex flex-col bg-gray-200 pb-8'>
        <div className='mx-4 md:flex md:justify-between md:mx-16'>
          <div className='p-4 md:order-2'>
            <img src='/banner.jpg' className='rounded-xl w-72 mx-auto md:w-96'/>
          </div>
          <div>
          <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.7}} className='flex justify-center items-center md:mt-12'>
           <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4 bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent'>
           Empowering Hostel Management
           </p>
         </motion.div>
         <motion.p initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.8,
           delay: 0.5,
           ease: [0, 0.71, 0.2, 1.01]
         }} className='md:text-2xl text-xl font-bold text-gray-600 text-center'>Connect, Streamline, and Thrive with HostelConnect!</motion.p>
          </div>
        </div>
      </div>

     <div className='w-full bg-white py-16 px-4'>
       <div className='max-w-[1240px] mx-16 flex justify-between'>
         {/* <img className='w-[500px] mx-auto my-4 rounded-lg' src='https://img.freepik.com/free-photo/front-view-young-people-hostel_23-2150446780.jpg?size=626&ext=jpg&ga=GA1.2.902889763.1677655584&semt=sph' alt='/' /> */}
         <div className='flex flex-col justify-center'>
          <h1 initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-sky-500 text-center'>About Us</h1>
          <p className='text-black mt-6 text-center'>
          At HostelConnect, we are dedicated to revolutionizing the way college hostels are managed. With our comprehensive hostel management solution, we empower administrators to streamline operations, enhance services, and effectively address student complaints. 
          </p>
          <p className='text-black mt-2 text-center'>
          By leveraging cutting-edge technology and data analytics, we ensure a seamless hostel experience for both students and staff. Join us and experience the future of hostel management with HostelConnect.
          </p>
        </div>
      </div>
    </div>

    <Footer />
    
    </div>
  )
}

export default Home