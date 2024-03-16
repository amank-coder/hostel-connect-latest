import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
  const token = localStorage.getItem("token")
  const user = JSON.parse(localStorage.getItem("user"))
  return token ? user?.isAdmin ? <Navigate to="/admin-dashboard" /> : <Navigate to="/dashboard" /> : children;
}

export default PublicRoute