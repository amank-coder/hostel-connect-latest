import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Swal from "sweetalert2";
import Filter from '../components/Filter';

const ComplaintList = () => {

  const { user } = useSelector(state=>state.auth);
  
  const [complaint, setComplaint] = useState([]);
  const getComplaints = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/complaint`, {
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
    
  },[user,complaint])

  const handleClick = (id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You want to close the complaint!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, close it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        
        const res = await axios.patch(`${import.meta.env.VITE_API_URL}/api/complaint/${id}`,{
          status:true
        },{
          headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        console.log(res)
        Swal.fire({
          title: "Closed!",
          text: "The complaint has been closed.",
          icon: "success"
        });

      }
    });
  }
  
  return (
    <Layout>
      <div>
      <h2 className='text-3xl font-semibold my-4 text-gray-700'>Complaints</h2>
      <Filter />
      <div className='overflow-x-auto rounded-lg shadow mr-4'>
      <table className='w-full'>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Room No.</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Type</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Timing</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100'>            
            {complaint.length>0 ? complaint.map((item)=>(
              <tr className='bg-white' key={item?._id}>
              <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.roomno}</td>
              <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.category}</td>
              <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.timing}</td>
              <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.status ? <button className=' bg-green-50 hover:bg-green-100 text-green-500 p-2 px-4 rounded-md'>Closed</button> : <button className='bg-red-50 text-red-500 hover:bg-red-100 p-2 px-4 rounded-md' onClick={()=>handleClick(item?._id)}>Open</button>}</td>
            </tr>
            )): <p>No complaints</p>}
           
          </tbody>
        </table>
      </div>
        
      </div>
    </Layout>
  )
}

export default ComplaintList