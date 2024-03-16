// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { hideLoading, showLoading } from '../../redux/features/alertSlice';
// import axios from 'axios';
// import { setUser } from '../../redux/features/auth/authSlice'
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({children}) => {
    
//     const token = localStorage.getItem("token")
//     // if(localStorage.getItem('token'))
//     // {
//     //     console.log(token)
//     //     return children;
//     // }
//     // else{
//     //     console.log("token:",token)
//     //     return Navigate("/login");
//     // }
//     return token ? children : <Navigate to="/login" />;
// }

// export default PrivateRoute


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import axios from "axios";
import { setUser } from "../../redux/features/auth/authSlice";

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      dispatch(showLoading());
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/getUser`,
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (data.success) {
        dispatch(setUser(data.data));
      } else {
        localStorage.clear();
        <Navigate to="/login" />;
      }
    } catch (error) {
      localStorage.clear();
      dispatch(hideLoading());
      console.log(error);
    }
  };
  useEffect(() => {
    if (!user) {
      getUser();
    }
  },[user]);
    const token = localStorage.getItem("token")
    const u = JSON.parse(localStorage.getItem("user"));
    return token && u?.isAdmin ? children : <Navigate to="/" />;


//   if (localStorage.getItem("token")) {
//     return children;
//   } else {
//     return <Navigate to="/login" />;
//   }
};

export default PrivateRoute;