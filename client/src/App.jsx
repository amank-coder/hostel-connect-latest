import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Complaint from './pages/Complaint';
import Suggestions from './pages/Suggestions';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Login />}/>
        <Route path='/complaint' element={<Complaint />}/>
        <Route path='/suggestions' element={<Suggestions />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
