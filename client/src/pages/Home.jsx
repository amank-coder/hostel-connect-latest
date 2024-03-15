import React, {useState} from 'react'

const Home = () => {
  useState(()=>{
    console.log(import.meta.env.VITE_API_URL)
  },[])
  return (
    <div>
      <div>Home</div>
      <a href='/login' >login</a>
    </div>

  )
}

export default Home