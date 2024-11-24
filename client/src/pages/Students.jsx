import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout/Layout';

const Students = () => {
  const [students, setStudents] = useState([]); // State to store student data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setStudents(response.data); // Store the fetched students
        setLoading(false);
      } catch (err) {
        setError('Error fetching student data'); // Set error if fetching fails
        setLoading(false);
      }
    };

    fetchStudents();
  }, []); // Empty dependency array ensures this effect runs once on mount

  if (loading) {
    return <p className="text-center text-gray-500">Loading students...</p>; // Display loading message while data is being fetched
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>; // Display error message if any
  }

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">Students</h1>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Registration No</th>
                <th className="px-6 py-3 text-left">Block</th>
                <th className="px-6 py-3 text-left">Room No</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {students.map((student) => (
                <tr key={student._id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{student.name}</td>
                  <td className="px-6 py-4">{student.email}</td>
                  <td className="px-6 py-4">{student.regno}</td>
                  <td className="px-6 py-4">{student.block}</td>
                  <td className="px-6 py-4">{student.roomno}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Students;
