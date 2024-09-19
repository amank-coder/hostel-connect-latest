import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.alerts);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        return alert("Provide all fields");
      }
      dispatch(showLoading());

      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        email,
        password,
      });
      dispatch(hideLoading());

      if (data?.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful");
        data.user.isAdmin ? navigate("/admin-dashboard") : navigate("/dashboard");
      }
    } catch (err) {
      dispatch(hideLoading());
      alert("Invalid! Try again");
    }
  };

  return (
    <>
      {loading ? (
        <div className='flex justify-center mt-48'>
          <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#bbb">
            <g fill="none" fillRule="evenodd">
              <g transform="translate(1 1)" strokeWidth="2">
                <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite" />
                </path>
              </g>
            </g>
          </svg>
        </div>
      ) : (
        <div
          className="bg-cover bg-center min-h-screen flex items-center justify-center"
          style={{ backgroundImage: `url('https://media-cdn.tripadvisor.com/media/photo-s/01/af/e5/8b/corridor.jpg')` }}
        >
          <div className="bg-[rgba(255,255,255,0.78)] backdrop-blur-md p-8 rounded-md shadow-lg shadow-blue-200 w-full max-w-md md:max-w-lg">
            <h1 className="text-2xl font-bold pb-8 text-center">Login</h1>
            <form onSubmit={handleSubmit} className="px-4">
              <label htmlFor="email" className="block">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your username"
                className="my-4 border-b-2 w-full outline-none bg-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" className="block">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="my-4 border-b-2 w-full outline-none bg-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-lg bg-sky-400 rounded-md text-white py-2 w-full mt-4 hover:bg-sky-500"
              >
                Login
              </button>
            </form>
            <div className="flex justify-between mt-4">
              <p className="cursor-pointer hover:text-sky-800">Forgot Password</p>
              <p className="cursor-pointer underline">Go to home page</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
