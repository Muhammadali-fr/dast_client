import { Outlet, Link } from 'react-router-dom'

// components
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Bottom from "../components/Bottom"

// react hot toast 
import toast from 'react-hot-toast'

// useContext 
import { useContext } from 'react'
import { UserContext } from '../userContext'

const MainLayout = () => {

    // const user = useContext(UserContext); 

    return (
        <div className='w-full min-h-screen flex'>
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