import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Dashboard = () => {
  const { user } = useSelector(state => state.auth);
  console.log("comp", user);
  const [complaint, setComplaint] = useState([]);

  const getComplaints = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/complaint?roomno=${user?.roomno}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("complaints", data);
      setComplaint(data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  useEffect(() => {
    if (user) {
      getComplaints();
    }
  }, [user]);

  return (
    <Layout>
      <div className='p-4'>
        <h1 className='text-3xl'>Welcome, <span className='text-blue-600'>{user?.name}</span>!</h1>
        <div className='bg-gray-100 p-2 mt-4'>
          <h2 className='font-bold'>Active requests</h2>

          {complaint.length > 0 ? (
            <table className='w-full mt-4 bg-white border-collapse'>
              <thead>
                <tr className='bg-gray-300'>
                  <th className='border p-2'>Category</th>
                  <th className='border p-2'>Timing</th>
                  <th className='border p-2'>Status</th>
                </tr>
              </thead>
              <tbody>
                {complaint.map((item) => (
                  <tr key={item._id} className='text-center border-b'>
                    <td className='border p-2'>{item?.category}</td>
                    <td className='border p-2'>{item?.timing}</td>
                    <td className='border p-2'>
                      {item?.status ? (
                        <span className='bg-green-400 text-white p-1 rounded-md'>Closed</span>
                      ) : (
                        <span className='bg-red-400 text-white p-1 rounded-md'>Open</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>
              <h1>No active complaints</h1>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
