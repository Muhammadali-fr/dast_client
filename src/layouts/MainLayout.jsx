import { Outlet, Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const MainLayout = () => {
    return (
        <div className='w-full flex'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default MainLayout