import React from 'react'

const Filter = () => {
  return (
    <div>
        <div className='shadow-md p-2 mr-4 mb-4 px-6'>
            <h2 className='text-2xl'>Filters</h2>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <label>Room no.</label>
                    <input type="text" className='w-24 px-3 py-1.5 border rounded-lg bg-gray-100 focus:border-blue-500 focus:outline-none' />
                </div>
                <div className='flex items-center gap-4'>
                    <label>Type</label>
                    <select className='w-32 px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500 focus:outline-none'>
                        <option>Cleaning</option>
                        <option>Electrical</option>
                        <option>Carpentry</option>
                    </select>
                </div>
                <div>
                <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-11 h-6 bg-gray-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 ">Open</span>
                </label>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Filter