import React, { useEffect, useState } from 'react';

// react-router-dom 
import { useNavigate, Link } from "react-router-dom";

// filter data 
import { filterButtons } from '../data/data';
import { gallery } from "../data/data";

// assets  
// import FilterImg from "../assets/home/filter.png"

const Home = () => {

  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState("");

  const handleFilterBtn = (filterWord) => {
    setFilter(filterWord === filter ? "" : filterWord); // Agar shu kategoriya bosilsa, filterni tozalash
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
      <ul className='flex gap-2 overflow-x-auto sticky top-0 w-full bg-[#f8f6ff] py-1'>
        {
          filterButtons.map((filter, index) => (
            <li onClick={() => handleFilterBtn(filter.category)} key={index} className='px-2 border border-[#bebebe] bg-white text-[#797979]   rounded-lg  hover:border-[#4A249D] hover:text-[#4A249D] cursor-pointer whitespace-nowrap '>
              <p>{filter.category}</p>
            </li>
          ))
        }
      </ul>

      <div className="max-w-full columns-2 sm:columns-4 lg:columns-6 my-5 gap-4">

        {filtered.length == 0 ?
          <div>
            <p>no pics</p>
          </div>
          :
          (
            filtered.map((img, index) => (
              <div key={index} className='rounded-lg overflow-hidden cursor-pointer mb-4'>
                <Link to={`img/${img.id}`}>
                  <img
                    className='w-full mx-auto'
                    src={img.image}
                    alt={img.tag}
                  />
                </Link>
              </div>
            ))
          )
        }

      </div>



    </div>
  )
}

export default Home