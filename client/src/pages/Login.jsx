import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e)=>{
      e.preventDefault();
      try{
        console.log(email, password)
      }catch(err)
      {
        console.log(err);
      }
  }
  return (
    <div className="bg-login bg-cover min-h-screen">
      <div className='flex flex-col gap-8 items-center pt-16 pb-8 px-6 md:flex-row md:justify-center md:px-10 text-black'>
        <div className='bg-[rgba(255,255,255,0.78)] p-8 rounded-md shadow-lg shadow-blue-200' >
          <h1 className='text-2xl font-bold pb-8 text-center'>Login</h1>
          <form className='border-black-100 px-4' onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input name="email" placeholder='Your username' className='my-4 border-b-2 w-full outline-none bg-transparent' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input name="password" type='password' placeholder='Your password' className='my-4 border-b-2 w-full outline-none bg-transparent' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button className='btn btn-lg bg-sky-400 rounded-md text-white text-center py-2 w-full mt-4 hover:bg-sky-500' type="submit"> Login </button>
          </form>
          <div className='flex justify-between'>
          <p className='ml-4 mt-4 cursor-pointer hover:text-sky-800' >Forgot Password</p>
          <p className='text-center mt-4 cursor-pointer underline p-0' >Go to home page</p>
          </div>
        </div>


        
      </div>
    </div>
  )
}

export default Login