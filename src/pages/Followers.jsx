import React from 'react'

// assets 
import UserImg from "../assets/fallowers/user.png"

const Fallowers = () => {
    return (
        <div>

            {/* users  */}
            <ul className='w-full py-4 flex flex-col gap-4'>
                <li className='flex items-center justify-between '>
                    <div className='flex items-center gap-2'>
                        <img src={UserImg} alt="UserImg" />
                        <p className='font-bold'>Mario the art</p>
                    </div>
                    <p>34k followers</p>
                    <button className='py-1 cursor-pointer px-4 bg-linear-to-b from-[#4A249D] to-[#7D41FF] text-white rounded-2xl hover:opacity-80  '>unfollow</button>
                </li>
                <li className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={UserImg} alt="UserImg" />
                        <p className='font-bold'>Mario the art</p>
                    </div>
                    <p>34k followers</p>
                    <button className='py-1 cursor-pointer px-4 bg-linear-to-b from-[#4A249D] to-[#7D41FF] text-white rounded-2xl hover:opacity-80  '>unfollow</button>
                </li>
            </ul>
        </div>
    )
}

export default Fallowers