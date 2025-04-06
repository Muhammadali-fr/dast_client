import React, { useEffect } from 'react'

const Store = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='w-[95%] mx-auto'>
            <div>
                {/* header and coin  */}
                <div className='flex items-center justify-between'>
                    <p className='text-3xl font-bold'>DAST STORE</p>
                    <p className='text-2xl font-bold'>COINS: <span className='text-gray-700'>1.2 k</span></p>
                </div>

                {/* coin types  */}
                <div>

                </div>
            </div>
        </div>
    )
}

export default Store