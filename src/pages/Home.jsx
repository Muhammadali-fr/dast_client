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
            <li key={index} className='py-2 px-4 border-2 border-[#9E9E9E] rounded-lg  hover:border-[#4A249D] cursor-pointer whitespace-nowrap '>
              <p>{filter.category}</p>
            </li>
          ))
        }
      </ul>

      {/* pictures  */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 my-5">
        {
          gallery.map((img, index) => (
            <div key={index}>
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