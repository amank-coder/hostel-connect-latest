import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import axios from 'axios';

const Suggestions = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/suggestions`, formData);
      setMessage('Suggestion submitted successfully!');
      setFormData({ title: '', description: '' });
    } catch (error) {
      console.error("Error submitting suggestion:", error);
      setMessage('Failed to submit suggestion. Please try again.');
    }
  };

  return (
    <Layout>
      <div className='p-4'>
        <h1 className='text-2xl mb-4'>Submit Your Suggestion</h1>
        <form onSubmit={handleSubmit} className='bg-gray-100 p-4 rounded-md'>
          <div className='mb-4'>
            <label htmlFor='title' className='block mb-2 font-bold'>Title</label>
            <input
              type='text'
              id='title'
              name='title'
              value={formData.title}
              onChange={handleChange}
              className='w-full p-2 border rounded-md'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='description' className='block mb-2 font-bold'>Description</label>
            <textarea
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              className='w-full p-2 border rounded-md'
              rows='5'
              required
            ></textarea>
          </div>
          <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>
            Submit
          </button>
        </form>
        {message && <p className='mt-4'>{message}</p>}
      </div>
    </Layout>
  );
};

export default Suggestions;
