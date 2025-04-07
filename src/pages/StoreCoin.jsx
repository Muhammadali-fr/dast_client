import React, { useState } from 'react'

// react-router-dom 
import { Link } from 'react-router-dom'

// assets 
import TrueImage from "../assets/true.png"
import CloseImage from "../assets/close.png"

// data 
import { coins } from '../data/data'

// toast 
import toast from 'react-hot-toast'

const StoreCoin = () => {
    const [isOpen, setIsOpen] = useState(false);

    const hadnleModal = () => {
        setIsOpen(!isOpen);
    }

    const handleOverlay = (e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(!isOpen);
        }
    }

    const handleBuy = () => {
        toast.error("something went wrong.")
    }

    return (
        <div className='w-[95%] min-h-screen mx-auto space-y-3' >
            {/* header and coin  */}
            <div className='flex items-center justify-between'>
                <p className='text-xl font-bold sm:text-3xl'>DAST SHOP</p>
                <p className='text-xl font-bold sm:text-3xl'>COINS: <span className='text-gray-700'>1.2 k</span></p>
            </div>

            {/* section  */}
            <div className='sm:flex items-center justify-start gap-5 space-y-3'>

                {/* coin view  */}
                <div className='min-w-[250px] min-h-[250px] border-2 border-[#7D41FF] flex items-center justify-center rounded-lg'>
                    <img className='w-[60px] h-[60px]' src={TrueImage} alt="trueImage" />
                </div>

                {/* about coin  */}
                <div className='sm:w-[60%] space-y-3'>

                    {/* coin title  */}
                    <p className='text-xl font-bold'>PURPLE VERIFICATION ICON</p>

                    <p className='text-sm md:text-md'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum</p>

                    {/* coin price  */}
                    <p className='text-xl font-semibold'><span>2000</span> COINS</p>
                </div>

            </div>

            {/* contact  */}
            <div className='flex items-center justify-between bg-white p-3 rounded-lg'>
                <p className='text-xl sm:text-3xl font-bold'>WHANT TO BUY IT?</p>

                {/* contact btn  */}
                <button onClick={hadnleModal} className='w-[150px] px-5 py-2 rounded-lg text-white cursor-pointer bg-linear-to-r from-[#4A249D] to-[#7D41FF] hover:opacity-90 text-sm'>BUY</button>
            </div>

            {/* related  */}
            <div className='space-y-3'>
                <div>
                    <p className='text-xl sm:text-3xl font-bold'>RELETED PRODUCTS</p>
                </div>

                {/* coin types  */}
                <ul className='flex gap-3 overflow-scroll'>
                    {
                        coins.map((coin, id) => (
                            <li key={id}>
                                <Link to="/store/coin" className='rounded-lg min-w-[100px] sm:min-w-[150px] min-h-[100px] sm:min-h-[150px] flex items-center justify-center border-2 border-[#572cb8]'>
                                    <img className='w-[40px] h-[40px]' src={coin.iconImage} alt="icon image" />
                                </Link>
                                <p className='text-center'>{coin.price} coins</p>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* modal  */}
            {
                isOpen && <div onClick={handleOverlay} className='bg-black/30 fixed inset-0 backdrop-blur-sm z-100 flex items-end sm:items-center justify-center'>
                    {/* madal contont  */}
                    <div className='w-full sm:w-[500px] h-[300px] bg-white rounded-lg flex items-center justify-center flex-col space-y-3 relative'>
                        <p className='sm:text-lg font-semibold text-sm'>BUY PURPLE VERIFICATION ICON</p>

                        <div className='w-[95%] sm:w-[90%] flex items-center justify-center flex-col space-y-3'>

                            {/* coin view  */}
                            <div className='w-[150px] h-[150px] border-2 border-[#7D41FF] flex items-center justify-center rounded-lg'>
                                <img className='w-[40px] h-[40px]' src={TrueImage} alt="trueImage" />
                            </div>
                            <p className='font-bold'><span>2000</span> COINS</p>

                            <button onClick={handleBuy} className='w-full p-2 rounded-lg text-white cursor-pointer bg-linear-to-r from-[#4A249D] to-[#7D41FF] hover:opacity-90'>CONFIRM & BUY</button>
                        </div>

                        {/* close btn  */}
                        <div onClick={hadnleModal} className='bg-gray-300 hover:bg-gray-200 rounded-full p-1 absolute right-2 top-2 cursor-pointer'>
                            <img className='w-[20px] h-[20px]' src={CloseImage} alt="close button" />
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default StoreCoin