
// react-router-dom 
import { Link, NavLink } from "react-router-dom"

// assets 
import Logo from "../assets/whiteLogo.png"
import Dots from "../assets/dots.png"
import Home from "../assets/home.png"
import Saved from "../assets/saved.png"
import Posts from "../assets/posts.png"
import Profile from "../assets/profile.png"
import Bag from "../assets/bag.png"
import Valentine from "../assets/valentine.png"
import True from "../assets/true.png"

const Sidebar = () => {
    return (
        <div className='w-[300px] h-screen sticky top-0'>
            <div className="p-4 bg-linear-to-l from-[#4A249D] to-[#7D41FF] flex items-center justify-between">
                <Link to='/'>
                    <img className="w-[111px]" src={Logo} alt="logoimg" />
                </Link>
                <div className="p-2 w-[35px] h-[35px] hover:bg-white/20 flex items-center justify-center rounded-md cursor-pointer">
                    <img src={Dots} alt="3 dot" />
                </div>
            </div>

            <div className="border-r border-[#BABABA] h-screen">
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

                <div className="w-[90%] h-[1px] mx-auto bg-[#396893]"></div>

                <ul className="w-[90%] mx-auto flex flex-col gap-2 py-2">

                    <NavLink to="/profile" className="p-2 rounded-md hover:bg-[#E3E3E3]">
                        <li className="w-full flex items-center gap-1">
                            <img className="w-[24px]" src={Profile} alt="profile.png" />
                            <p>Your profile</p>
                        </li>
                    </NavLink>

                    <NavLink className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/register">
                        <li className="w-full flex items-center gap-1">
                            <img className="w-[24px]" src={Bag} alt="bag.png" />
                            <p>Dast store</p>
                        </li>
                    </NavLink>
                </ul>

                <div className="w-[90%] h-[1px] mx-auto bg-[#396893]"></div>

                <ul className="w-[90%] mx-auto flex flex-col gap-2 py-2">

                    <Link className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/">
                        <li className="w-full flex items-center gap-1">
                            <img className="w-[24px]" src={Valentine} alt="user.png" />
                            <p>Funny valentine</p>
                            <img className="w-[22px]" src={True} alt="true.jpg" />
                        </li>
                    </Link>
                    <Link className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/">
                        <li className="w-full flex items-center gap-1">
                            <img className="w-[24px]" src={Profile} alt="user.png" />
                            <p>Darkens</p>
                            <img className="w-[22px]" src={True} alt="true.jpg" />
                        </li>
                    </Link>
                    <Link className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/">
                        <li className="w-full flex items-center gap-1">
                            <img className="w-[24px]" src={Profile} alt="user.png" />
                            <p>The Arty</p>
                            <img className="w-[22px]" src={True} alt="true.jpg" />
                        </li>
                    </Link>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar