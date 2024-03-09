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
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/dashboard' element={<Dashboard />}/>
        <Route exact path='/complaint' element={<Complaint />}/>
        <Route exact path='/suggestions' element={<Suggestions />}/>
        <Route exact path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
