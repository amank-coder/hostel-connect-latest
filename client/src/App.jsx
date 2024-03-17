import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Complaint from './pages/Complaint';
import Suggestions from './pages/Suggestions';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import AdminRoute from './components/routes/AdminRoute'
import AdminDashboard from './pages/AdminDashboard';
import ComplaintList from './pages/ComplaintList';
import Students from './pages/Students';

function App() {
  

  return (
    <>
      <Routes>
        <Route exact path='/' element={
            <PublicRoute>
            <Home />
            </PublicRoute>
        } />
        <Route exact path='/login' element={          
          <PublicRoute>
          <Login/>
          </PublicRoute>
        }/>
        <Route exact path='/dashboard' 
        element={
          <PrivateRoute>
              <Dashboard />
          </PrivateRoute>
        }/>
        <Route exact path='/complaint' 
        element={
          <PrivateRoute>
            <Complaint />
          </PrivateRoute>
          }/>
        <Route exact path='/suggestions' 
          element={
            <PrivateRoute>
              <Suggestions />
            </PrivateRoute>
          }/>
          <Route exact path='/admin-dashboard' 
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }/>
          <Route exact path='/complaint-list' element={
          <AdminRoute>
              <ComplaintList />
            </AdminRoute>
          } />
          <Route exact path='/students' element={<Students />} />
        <Route exact path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
