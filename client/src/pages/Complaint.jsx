import React from 'react'
import Layout from '../components/layout/Layout'

const Complaint = () => {
  return (
    <Layout>
        
        <div className="mx-auto flex h-[100vh] bg-[#060a20]">

          <div className="bg-[#060a20] w-full p-12">
          <h1 className=" pt-2 pl-6 mb-8 font-bold text-3xl text-center text-white">AC COMPLAINT</h1>

            <form className="border-black-100 px-4 mt-8 text-white">
              <p className="text-2xl mb-3" htmlFor="">
                Timing
              </p>
              <select className="py-2 block appearance-none w-full bg-[#090e2f] border border-gray-400 hover:border-gray-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>setTiming(e.target.value)}>
                <option className=" py-4 mb-2 text-gray-300">
                  select time
                </option>
                <option>6:00 am - 8:00 am</option>
                <option>12:00 am - 2:00 am</option>
                <option>5:00 am - 7:00 am</option>
              </select>
              <p className=" py-2 mt-1 text-2xl mb-3" htmlFor="">
                Message
              </p>
              <input
                name="message"
                type="text"
                placeholder="message"
                className="px-4 py-2 border-b-2 w-full outline-none bg-[#090e2f]"
              ></input>
              <p className=" py-2 mt-1 text-2xl mb-3" htmlFor="">
                Room no.
              </p>
              <input
                name="roomno"
                type="text"
                placeholder="room"
                className="px-4 py-2 border-b-2 w-full outline-none bg-[#090e2f]"
              ></input>
              <button
                className=" btn btn-lg bg-sky-600 hover:bg-sky-700 rounded-md text-white text-center p-2 w-full mt-4"
                type="submit"
             
              >
                Submit
              </button>
            </form>
          </div>
        </div>
    </Layout>
  )
}

export default Complaint