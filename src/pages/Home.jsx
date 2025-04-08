import React, { useEffect, useState } from 'react';

// react-router-dom 
import { useNavigate, Link } from "react-router-dom";

// filter data 
import { filterButtons } from '../data/data';
import { gallery } from "../data/data";

// assets  
import valentineImage from "../assets/valentine.png"
import NotFoundImage from "../assets/notfound/notFound.png"

const Home = () => {

  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleFilterBtn = (filterWord) => {
    setFilter(filterWord === filter ? "All" : filterWord); // Agar shu kategoriya bosilsa, filterni tozalash
  };


  useEffect(() => {
    window.scrollTo(0, 0);


    if (!filter) {
      setFiltered(gallery);
      return;
    }

    if (filter === "All") {
      setFiltered(gallery);
      return;
    }

    const recomendedImages = gallery.filter((img) => {
      return img.tag.some((tag) => tag.toLowerCase() === filter.toLowerCase())
    })

    setFiltered(recomendedImages);
  }, [filter])

  return (
    <div className='w-[95%] min-h-screen mx-auto py-2'>
      <ul className='flex gap-2 overflow-x-auto sticky top-0 w-full bg-[#f8f6ff] py-1 z-10'>
        {
          filterButtons.map((filterBtn, index) => (
            <li
              onClick={() => handleFilterBtn(filterBtn.category)}
              key={index}
              className={`px-2 py-1 border rounded-lg cursor-pointer transition-all duration-200 whitespace-nowrap
    ${filter === filterBtn.category
                  ? "bg-[#7008e7] text-white border-[#7008e7]"
                  : "bg-white text-[#8d8d8e] border-[#bebebe] hover:border-[#4A249D] hover:text-[#4A249D]"
                }`}
            >
              <p className="text-sm font-medium">{filterBtn.category}</p>
            </li>

          ))
        }
      </ul>

      {filtered.length == 0 ?
        <div className='w-full h-[80vh] mx-auto flex items-center justify-center flex-col space-y-3'>
          <img className='md:w-[40%]' src={NotFoundImage} alt="not found image" />
          <p className='font-bold text-2xl'>Oops! There is no images.</p>
        </div>
        :
        (
          <div className="max-w-full columns-2 sm:columns-4 lg:columns-6 my-5 gap-4">

            {
              filtered.map((img, index) => (
                <div key={index} className='rounded-lg overflow-hidden cursor-pointer mb-4 relative'>
                  <Link to={`img/${img.id}`}>
                    <img
                      className='w-full mx-auto'
                      src={img.image}
                      alt={img.tag}
                    />
                    <div className="flex items-center gap-2 absolute bottom-0 bg-black/10 w-full p-1 text-white backdrop-blur-sm">
                      <img className="w-[20px] rounded-full" src={valentineImage} alt="" />
                      <p className='text-sm'>mukhammadali</p>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>

        )
      }

    </div>
  )
}

export default Home