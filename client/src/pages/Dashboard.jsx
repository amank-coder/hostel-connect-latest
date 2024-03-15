import React from 'react'
import Layout from '../components/layout/Layout'
import { useSelector } from 'react-redux';

const Dashboard = () => {
  
  const { user } = useSelector(state=>state.auth);
  return (
    <Layout>
      <div className='p-4'>
        <h1 className='text-3xl'>Welcome, <span className='text-blue-600'>{user?.name}</span> !</h1>
      </div>
    </Layout>
  )
}

export default Dashboard