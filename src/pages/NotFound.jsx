import React from 'react'

// react-router-dom 
import { Link } from 'react-router-dom'

// assets 
import NotFoundImage from "../assets/notfound/notFound.png"

const NotFound = () => {
    return (
        <div className='w-[95%] h-[80vh] mx-auto flex items-center justify-center flex-col space-y-3'>
            <img className='w-[40%]' src={NotFoundImage} alt="not found image" />
            <p className='font-bold text-2xl'>Oops! This board seems to be missing.</p>
            <Link to='/'>
                <button className="hidden sm:block bg-violet-700 text-white p-2 rounded-lg cursor-pointer hover:bg-violet-600">Back Home Page</button>
            </Link>
        </div>
    )
}

export default NotFound