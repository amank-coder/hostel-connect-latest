import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
  const token = localStorage.getItem("token")
  const user = localStorage.getItem("user")
  if(user){
    user = JSON.parse(user)
  }
  return token ? user?.isAdmin ? <Navigate to="/admin-dashboard" /> : <Navigate to="/dashboard" /> : children;
}

export default PublicRoute