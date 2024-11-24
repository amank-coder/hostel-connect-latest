import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import axios from 'axios';

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState({
    total: 0,
    open: 0,
    closed: 0,
  });
  const [studentsInBlock, setStudentsInBlock] = useState(0);
  
  const fetchData = async () => {
    try {
      // Fetch the number of complaints
      const complaintsResponse = await axios.get(`${import.meta.env.VITE_API_URL}/api/complaint`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("comp response",complaintsResponse.data)
      const openComplaints = complaintsResponse.data.filter(c => c.status === false).length;
      const closedComplaints = complaintsResponse.data.filter(c => c.status === true).length;
      const totalComplaints = complaintsResponse.data.length;

      // // Fetch the number of students in the block
      // const block = 'A';  // Replace this with the current block (for example, from user data)
      // const studentsResponse = await axios.get(`${import.meta.env.VITE_API_URL}/api/students?block=${block}`);
      // const studentsCount = studentsResponse.data.length;

      setComplaints({
        total: totalComplaints,
        open: openComplaints,
        closed: closedComplaints,
      });

      // setStudentsInBlock(studentsCount);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="p-6 max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Complaints */}
          <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Complaints</h3>
            <p className="text-3xl font-bold">{complaints.total}</p>
          </div>

          {/* Open Complaints */}
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Open Complaints</h3>
            <p className="text-3xl font-bold">{complaints.open}</p>
          </div>

          {/* Closed Complaints */}
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Closed Complaints</h3>
            <p className="text-3xl font-bold">{complaints.closed}</p>
          </div>

          {/* Students in Block */}
          {/* <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md col-span-2 sm:col-span-1">
            <h3 className="text-lg font-semibold">Students in Block</h3>
            <p className="text-3xl font-bold">{studentsInBlock}</p>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
