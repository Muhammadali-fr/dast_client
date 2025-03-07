
// react-router-dom 
import { Link, NavLink } from "react-router-dom"

// assets 
import Logo from "../assets/whiteLogo.png"
import Dots from "../assets/dots.png"
import Home from "../assets/home.png"
import Saved from "../assets/saved.png"
import Posts from "../assets/posts.png"


const Sidebar = () => {
    return (
        <div className='w-[256px] h-screen sticky'>
            <div className="p-4 bg-linear-to-l from-[#4A249D] to-[#7D41FF] flex items-center justify-between">
                <Link to='/'>
                    <img className="w-[111px]" src={Logo} alt="logoimg" />
                </Link>
                <div className="p-2 w-[35px] h-[35px] hover:bg-white/20 flex items-center justify-center rounded-md cursor-pointer">
                    <img src={Dots} alt="3 dot" />
                </div>
            </div>
            <ul className="w-[90%] mx-auto flex flex-col gap-2 py-2">
                <NavLink className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/">
                    <li className="w-full flex items-center gap-1">
                        <img className="w-[24px]" src={Home} alt="home.png" />
                        <p>Home</p>
                    </li>
                </NavLink>

                <NavLink className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/login">
                    <li className="w-full flex items-center gap-1">
                        <img className="w-[24px]" src={Saved} alt="saved.png" />
                        <p>Saved posts</p>
                    </li>
                </NavLink>

                <NavLink className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/register">
                    <li className="w-full flex items-center gap-1">
                        <img className="w-[24px]" src={Posts} alt="images.png" />
                        <p>Random images</p>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Sidebar