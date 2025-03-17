import { Outlet, Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const MainLayout = () => {
    return (
        <div className='w-full flex'>
            <Sidebar />
            <div className='w-full bg-[#f8f6ff]'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout