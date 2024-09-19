import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants';
import Footer from '../components/Footer';

const Home = () => {
  // Framer Motion Animation Variants for Cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)" },
  };

  return (
    <div className=''>
      <nav className='flex justify-between mt-1 bg-white mb-4 py-1 mx-4 items-center top-2 px-4 bg-opacity-80 sticky z-20 rounded-lg'>
        <div>
          <img src='/logo.png' className='w-28' alt='HostelConnect Logo'/>
        </div>
        <div>
          <a href='/login'><button className='bg-blue-400 hover:bg-blue-500 text-white p-2 px-4 rounded-md'>Login</button></a>
        </div>
      </nav>

      <div className='flex flex-col bg-gray-200 pb-8'>
        <div className='mx-4 md:flex md:justify-between md:mx-16'>
          <div className='p-4 md:order-2'>
            <img src='/banner.jpg' className='rounded-xl w-72 mx-auto md:w-96' alt='HostelConnect Banner'/>
          </div>
          <div>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.7}} className='flex justify-center items-center md:mt-12'>
              <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4 bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent'>
                Empowering Hostel Management
              </p>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }} 
              className='md:text-2xl text-xl font-bold text-gray-600 text-center'>
                Connect, Streamline, and Thrive with HostelConnect!
            </motion.p>
            <div className='flex justify-center mt-6'>
          <a href='/login'>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.7}}
              className='text-white font-bold py-2 px-6 rounded-md bg-gradient-to-r from-blue-400 to-blue-600'>
              Get Started
            </motion.button>
          </a>
        </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-16 flex justify-between'>
          <div className='flex flex-col justify-center'>
            <h1 
              className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-sky-500 text-center'>
              About Us
            </h1>
            <p className='text-black mt-6 text-center'>
              At HostelConnect, we are dedicated to revolutionizing the way college hostels are managed. With our comprehensive hostel management solution, we empower administrators to streamline operations, enhance services, and effectively address student complaints.
            </p>
            <p className='text-black mt-2 text-center'>
              By leveraging cutting-edge technology and data analytics, we ensure a seamless hostel experience for both students and staff. Join us and experience the future of hostel management with HostelConnect.
            </p>
          </div>
        </div>
      </div>

      {/* Features (Cards) Section */}
      <div className='w-full bg-gray-100 py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8'>
          
          {/* Card 1: Enter Complaint */}
          <motion.div 
            className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform'
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
          >
            <img src='https://c8.alamy.com/comp/KMT6M8/complaints-key-showing-complaining-or-moaning-online-KMT6M8.jpg' alt='Enter Complaint' className='w-16'/>
            <h3 className='text-xl font-semibold text-center mt-4'>Enter Complaint</h3>
            <p className='text-center mt-2 text-gray-600'>
              Lodge your complaints easily through our platform. Ensure a quick response from hostel authorities.
            </p>
          </motion.div>

          {/* Card 2: Track Status */}
          <motion.div 
            className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform'
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
          >
            <img src='https://services.goaonline.gov.in/design-assets/img/TrackStatus.png' alt='Track Status' className='w-16'/>
            <h3 className='text-xl font-semibold text-center mt-4'>Track Status</h3>
            <p className='text-center mt-2 text-gray-600'>
              Keep track of your complaints and requests in real-time and stay updated with the status.
            </p>
          </motion.div>

          {/* Card 3: Give Feedback */}
          <motion.div 
            className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform'
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
          >
            <img src='data:image/jpeg;base64,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' alt='Give Feedback' className='w-16'/>
            <h3 className='text-xl font-semibold text-center mt-4'>Give Feedback</h3>
            <p className='text-center mt-2 text-gray-600'>
              Provide feedback on the services you receive to help improve the hostel experience.
            </p>
          </motion.div>

        </div>
      </div>
      {/* Blog Section */}
<div className="w-full py-16 px-4">
  <div className="max-w-[1240px] mx-auto text-center">
    <h2 className="text-3xl font-bold text-sky-500 mb-8">Latest Blog Posts</h2>
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">

      {/* Blog Post 1 */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="bg-white shadow-md rounded-lg overflow-hidden"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible">
        <img src="https://gnitcm.co.in/front_assets/img/anti-ragging.jpg" alt="Anti Ragging" className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Anti-Ragging: Ensuring Safety in Hostels</h3>
          <p className="text-gray-600 mb-4">Learn about the strict anti-ragging measures and policies in place to keep students safe in hostels.</p>
          <a href="/blog/anti-ragging" className="text-sky-500 font-semibold">Read More</a>
        </div>
      </motion.div>

      {/* Blog Post 2 */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="data:image/jpeg;base64,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" alt="Hostel Life Tips" className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Hostel Life Tips: Thriving Away from Home</h3>
          <p className="text-gray-600 mb-4">From making new friends to managing your time, here are essential tips for thriving in hostel life.</p>
          <a href="/blog/hostel-life-tips" className="text-sky-500 font-semibold">Read More</a>
        </div>
      </motion.div>

      {/* Blog Post 3 */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UAanxInWiJ0CYkRi_p2sA8hw6d1uzG00ew&s" alt="Student Well-Being" className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Student Well-Being: Maintaining Mental & Physical Health</h3>
          <p className="text-gray-600 mb-4">Explore ways to maintain mental and physical well-being while staying in a hostel environment.</p>
          <a href="/blog/student-well-being" className="text-sky-500 font-semibold">Read More</a>
        </div>
      </motion.div>

    </div>
  </div>
</div>


      <Footer />
    </div>
  );
}

export default Home;
