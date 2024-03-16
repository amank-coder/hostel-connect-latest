import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { useSelector } from 'react-redux';
import axios from 'axios';

const Dashboard = () => {
  
  const { user } = useSelector(state=>state.auth);
  console.log("comp",user)
  const [complaint, setComplaint] = useState([]);
  const getComplaints = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/complaint?roomno=${user?.roomno}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("complaints", data);
      setComplaint(data); // Assuming res.data is an array of complaints
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };
  
  useEffect(()=>{
    if(user)
    {
      getComplaints();
    }
    
  },[user])
  
  return (
    <Layout>
      <div className='p-4'>
        <h1 className='text-3xl'>Welcome, <span className='text-blue-600'>{user?.name}</span> !</h1>
        <div className='bg-gray-100 p-2 mt-4'>
          <h2>Active requests</h2>

          {complaint.length> 0 ? (
            <div className='flex flex-col gap-4 mt-4'>
            {complaint.map((item)=>(
              <div key={item._id} className='flex justify-between bg-gray-200 p-2 rounded-md items-center'>
                <div>{item?.category}</div>
                <div>{item?.timing}</div>
                <div>{item?.status ? <p className='bg-green-400 text-white md:p-2 px-2 md:px-4 rounded-md'>Closed</p> : <p className='bg-red-400 text-white md:p-2 rounded-md px-2 md:px-4'>Open</p>}</div>
              </div>
            ))}
          </div>):(
            <div>
            <h1>No active complaints</h1>
          </div>
          )
          }
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard