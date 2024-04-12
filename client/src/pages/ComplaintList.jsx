import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Swal from "sweetalert2";
import Filter from '../components/Filter';

const ComplaintList = () => {

  const { user } = useSelector(state=>state.auth);
  
  const [complaint, setComplaint] = useState([]);
  const [room, setRoom] = useState("");
  const [type, setType] = useState("Cleaning");

  const getComplaints = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/complaint?roomno=${room}&&category=${type}`, {
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
    
  },[user,room,type])


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
      <div className='shadow-md p-2 mr-4 mb-4 px-6'>
            <h2 className='text-2xl'>Filters</h2>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <label>Room no.</label>
                    <input type="text" className='w-24 px-3 py-1.5 border rounded-lg bg-gray-100 focus:border-blue-500 focus:outline-none' onChange={(e)=>setRoom(e.target.value)}/>
                </div>
                <div className='flex items-center gap-4'>
                    <label>Type</label>
                    <select className='w-32 px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500 focus:outline-none' 
                      onChange={(e) => {
                      console.log("Selected value:", e.target.value);
                      setType(e.target.value);
                      }} 
                      value={type}
                    >
                      <option value="Cleaning">Cleaning</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Carpentry">Carpentry</option>
                    </select>
                </div>
                <div>
                <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-11 h-6 bg-gray-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 ">Open</span>
                </label>
                </div>

            </div>
        </div>
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