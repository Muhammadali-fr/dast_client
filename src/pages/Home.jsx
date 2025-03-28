import React, { useState } from 'react';

// react-router-dom 
import { useNavigate } from "react-router-dom";

// filter data 
import { filterButtons } from '../data/data';
import { gallery } from "../data/data";

// assets  
// import FilterImg from "../assets/home/filter.png"

const Home = () => {
  // useNavigate 
  const navigate = useNavigate();

  const handleImage = () => {
    navigate("/img")
  }

  return (
    <div className='w-[95%] min-h-screen mx-auto py-2'>
      <ul className='flex gap-2 overflow-x-auto'>
        {
          filterButtons.map((filter, index) => (
            <li key={index} className='px-2 py-1 border border-[#bebebe] bg-white text-[#797979]   rounded-lg  hover:border-[#4A249D] hover:text-[#4A249D] cursor-pointer whitespace-nowrap '>
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
              onClick={handleImage}
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