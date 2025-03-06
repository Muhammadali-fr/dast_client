import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <p>main</p>
            <Outlet />
        </div>
    )
}

export default MainLayout