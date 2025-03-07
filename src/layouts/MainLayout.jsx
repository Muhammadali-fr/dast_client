import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <p>main</p>
            <Outlet />
            <Link to="/login">
                login
            </Link>
            <Link to="/register">
                register
            </Link>
            <Link to="/finish-login">
                finish login
            </Link>
            <Link to="/create-password">
                create-password
            </Link>
            <Link to="/bio">
                bio
            </Link>
        </div>
    )
}

export default MainLayout