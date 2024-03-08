import React, {useState} from 'react'

const Home = () => {
  useState(()=>{
    console.log(import.meta.env.VITE_API_URL)
  },[])
  return (
    <div>Home</div>
  )
}

export default Home