import { Link, Outlet } from 'react-router-dom'

const Follow = () => {
    return (
        <div className='w-[95%] mx-auto'>

            {/* links  */}
            <div className='flex items-center gap-2 pt-2 pb-1'>
                <Link to="/f">FOLLOWERS</Link>
                <Link to="/f/following">FOLLOWING</Link>
            </div>

            {/* line  */}
            <div className='w-full h-[2px] bg-[#BABABA]'></div>

            {/* outlet  */}
            <Outlet />

        </div>
    )
}

export default Follow