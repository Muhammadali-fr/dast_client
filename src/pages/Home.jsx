import React, { useState } from 'react'

// filter data 
import { filterButtons } from '../data/data'
import { gallery } from "../data/data"

// assets  
// import FilterImg from "../assets/home/filter.png"

const Home = () => {

  return (
    <div className='  w-[95%]  mx-auto py-2'>
      <ul className='flex gap-2 overflow-x-auto'>
        {
          filterButtons.map((filter, index) => (
            <li key={index} className='p-2 border border-[#9E9E9E] rounded-lg  hover:border-[#4A249D] cursor-pointer whitespace-nowrap '>
              <p>{filter.category}</p>
            </li>
          ))
        }
      </ul>

      {/* pictures  */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 my-5 gap-4">
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