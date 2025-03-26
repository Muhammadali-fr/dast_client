import React, { useState } from 'react'

// filter data 
import { filterButtons } from '../data/data'
import { gallery } from "../data/data"

// assets  
// import FilterImg from "../assets/home/filter.png"

const Home = () => {

  return (
    <div className='w-[95%] min-h-screen mx-auto py-2'>
      <ul className='flex gap-2 overflow-x-auto'>
        {
          filterButtons.map((filter, index) => (
            <li key={index} className='px-2 py-1 border border-[#9E9E9E] rounded-lg  hover:border-[#4A249D] cursor-pointer whitespace-nowrap '>
              <p>{filter.category}</p>
            </li>
          ))
        }
      </ul>

      {/* pictures  */}
      <div className="max-w-full columns-2 sm:columns-3 lg:columns-5 my-5 gap-4">
        {
          gallery.map((img, index) => (
            <div key={index} className=' rounded-lg overflow-hidden cursor-pointer mb-4'>
              <img
                className='w-full mx-auto'
                src={img.image}
                alt={img.tag}
              />
            </div>
          ))
        }
      </div>


    </div>
  )
}

export default Home