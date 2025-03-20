import { Outlet, Link } from 'react-router-dom'

// components
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Bottom from "../components/Bottom"

// react hot toast 
import toast from 'react-hot-toast'

const MainLayout = () => {
    const token = localStorage.getItem("token")

    if (!token) {
        toast.error("you have to login.");
    }


    return (
        <div className='w-full flex'>
            <Sidebar />
            <div className='w-full bg-[#f8f6ff]'>
                <Header />
                <Outlet />
                <Bottom />
            </div>
        </div>
    )
}

export default MainLayout