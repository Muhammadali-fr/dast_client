import React, { useEffect, useState } from 'react';

// react router dom 
import { Link } from "react-router-dom";

// data 
import { coins } from "../data/data";

// assets 
import CloseImage from "../assets/close.png";

const Store = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    // when cliked contact us
    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    const handleBack = (e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(!isOpen);
        };
    };

    return (
        <div className='w-[95%] min-h-screen mx-auto space-y-3'>
            <div className='space-y-3'>
                {/* header and coin  */}
                <div className='flex items-center justify-between'>
                    <p className='text-xl font-bold sm:text-3xl'>DAST STORE</p>
                    <p className='text-xl font-bold sm:text-3xl'>COINS: <span className='text-gray-700'>1.2 k</span></p>
                </div>

                {/* coin types  */}
                <ul className='flex gap-3 overflow-scroll'>
                    {
                        coins.map((coin, id) => (
                            <li key={id}>
                                <Link className='rounded-lg min-w-[100px] sm:min-w-[150px] min-h-[100px] sm:min-h-[150px] flex items-center justify-center border-2 border-[#572cb8]'>
                                    <img className='w-[40px] h-[40px]' src={coin.iconImage} alt="icon image" />
                                </Link>
                                <p className='text-center'>{coin.price} coins</p>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* contact  */}
            <div className='flex items-center justify-between'>
                <p className='text-xl sm:text-3xl font-bold'>NEED SUPPORT?</p>

                {/* contact btn  */}
                <button onClick={handleModal} className='px-5 py-2 rounded-lg text-white cursor-pointer bg-linear-to-r from-[#4A249D] to-[#7D41FF] hover:opacity-90 text-sm'>CONTACT US</button>
            </div>

            {/* Modal */}
            {
                isOpen && <div onClick={handleBack} className='fixed inset-0 backdrop-blur-sm bg-black/30 flex sm:items-center items-end justify-center z-100'>

                    {/* madal contont  */}
                    <div className='w-[500px] h-[300px] bg-white rounded-lg flex items-center justify-center flex-col space-y-3 relative'>
                        <p className='text-lg font-semibold'>Contact</p>

                        <form className='w-[95%] sm:w-[90%] flex flex-col space-y-3'>

                            {/* email  */}
                            <label className='text-[#393939]'>
                                email <span className='text-blue-800'>*</span>
                                <input placeholder='email' className='text-black w-full border border-[#636363] rounded-md p-2' type="text" />
                            </label>

                            {/* textarea  */}
                            <label className='flex flex-col text-[#393939]'>
                                <p>message here <span className='text-blue-800'>*</span></p>
                                <textarea placeholder='message here' className='text-black border border-[#636363] rounded-md p-2'></textarea>
                            </label>
                            <button className='p-2 rounded-lg text-white cursor-pointer bg-linear-to-r from-[#4A249D] to-[#7D41FF] hover:opacity-90'>Send</button>
                        </form>

                        {/* close btn  */}
                        <div onClick={handleModal} className='bg-gray-300 hover:bg-gray-200 rounded-full p-1 absolute right-2 top-2 cursor-pointer'>
                            <img className='w-[20px] h-[20px]' src={CloseImage} alt="close button" />
                        </div>
                    </div>


                </div>
            }

            {/* coin types  */}
            <ul className='flex gap-3 overflow-scroll'>
                {
                    coins.map((coin, id) => (
                        <li key={id}>
                            <Link className='rounded-lg min-w-[100px] sm:min-w-[150px] min-h-[100px] sm:min-h-[150px] flex items-center justify-center border-2 border-[#572cb8]'>
                                <img className='w-[40px] h-[40px]' src={coin.iconImage} alt="icon image" />
                            </Link>
                            <p className='text-center'>{coin.price} coins</p>
                        </li>
                    ))
                }
            </ul>   

        </div>
    )
}

export default Store