import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import { useSelector } from "react-redux";
import axios from "axios";


const Complaint = () => {
  const { user } = useSelector(state=>state.auth)
  console.log(user)

  const [type, setType] = useState("Cleaning");
  const [timing, setTiming] = useState("9:00am-1:00pm");
  const [message, setMessage] = useState("");

  console.log(timing)

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/complaint`,{
          roomno: user?.roomno,
          category: type,
          timing: timing,
          regno: user.regno,
          message: message,
          block: user.block
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data)
      if(data.message=="Complaint Created")
      {
        alert("Complaint created successfully");
      }
    }catch(error)
    {
      console.log(error);
    }
  }
  
  return (
    <Layout>
    <div className='flex h-screen'>
    <div className='md:max-w-md max-w-72 w-full h-96 my-8 md:mx-auto p-6 bg-gray-100 rounded-lg shadow-md md:my-auto'>
          <h2 className='text-3xl text-center font-bold mb-6'>Complaint</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className="font-semibold mb-2 text-sm" htmlFor="type">Type</label>
              <select type="text" placeholder='Complaint type ...' className='w-full px-3 py-2 border rounded-lg bg-gray-200 focus:border-blue-500 focus:outline-none' required onChange={(e)=>{
                setType(e.target.value)
                console.log("type",type);
                }}>
                <option>Cleaning</option>
                <option>Electrical</option>
                <option>Carpentry</option>
              </select>
            </div>
            <div className='mb-4'>
              <label className="font-semibold mb-2 text-sm" htmlFor="timing">Timing</label>
              <select type="text" placeholder='Timing...' className='w-full px-3 py-2 border rounded-lg bg-gray-200 focus:border-blue-500 focus:outline-none' required onChange={(e)=>setTiming(e.target.value)}>
                <option>9:00am-1:00pm</option>
                <option>2:00pm-4:00pm</option>
                <option>6:00pm-8:00pm</option>
              </select>
            </div>
            <div className='mb-4'>
              <label className="font-semibold mb-2 text-sm" htmlFor="message">Message</label>
              <input type="text" placeholder='Type your message ...' className='w-full px-3 py-2 border rounded-lg bg-gray-200 focus:border-blue-500 focus:outline-none' required onChange={(e)=>setMessage(e.target.value)}/>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-500 px-4 py-2 rounded-lg font-semibold text-white hover:bg-blue-600 focus:outline-white">Submit</button>
            </div>
          </form>
      </div>
    </div>
        
    </Layout>
  )
}

export default Complaint
