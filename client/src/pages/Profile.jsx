import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser) {
      setUser(storedUser);
    } else {
      console.log("User data not found in localStorage");
    }
  }, []);

  if (!user) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
      </Layout>
    );  
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">My Profile</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Name: </span>{user?.name}
            </p>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Email: </span>{user?.email}
            </p>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Registration Number: </span>{user?.regno}
            </p>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Mobile Number: </span>{user?.mobno}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Block: </span>{user?.block}
            </p>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Room Number: </span>{user?.roomno}
            </p>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Admin: </span>{user?.isAdmin ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
