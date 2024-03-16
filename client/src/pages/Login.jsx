import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state)=>state.alerts);
  console.log(loading)
  
  const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        if(!email || !password)
        {
          return alert("Provide all fields")
        }
        dispatch(showLoading());

        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`,{
          email, password

        })
        dispatch(hideLoading());

        console.log(data)
        if(data?.success)
        {
          dispatch(hideLoading());
          console.log(data)
          localStorage.setItem("token", data.token);
          localStorage.setItem("user",JSON.stringify(data.user))
          alert("Login successful");
          data.user.isAdmin ? navigate("/admin-dashboard") : navigate("/dashboard");
        }
      }catch(err)
      {
        dispatch(hideLoading());
        alert("Invalid! Try again")
        console.log(err);
      }
  }
  return (
    <>
      {loading ? 
      (
          <div className='flex justify-center mt-48'>
            <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#bbb">
              <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)" strokeWidth="2">
                  <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
                  <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"/>
                  </path>
                </g>
              </g>
            </svg>
          </div>
      ):
      (
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
    </>
    
  )
}

export default Login;