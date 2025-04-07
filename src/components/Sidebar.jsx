import { useState } from "react"

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
import DashboardImage from "../assets/sidebar/dashboard.png"
import whiteLogo from "../assets/sidebar/whiteLogo.svg"
import { gallery } from "../data/data"

const Sidebar = () => {
    const [isFull, setIsFull] = useState(true);
    const arrayLenght = gallery.length;
    const firstCode = Math.floor(Math.random() * arrayLenght);
    const [randomCode, setRandomCode] = useState(firstCode);

    const handleFull = () => {
        setIsFull(!isFull);
    }

    // random image uchun id chiqarib beradi        
    const randomImageCode = () => {
        setRandomCode(Math.floor(Math.random() * arrayLenght));
    }

    if (randomCode == 0) {
        randomCode + 1;
    }

    return (
        <>
            <div className="sidebar-hidden">
                {isFull ? <div className=' min-w-[220px] w-[220px] h-screen sticky top-0   '>
                    <div className=" p-4 bg-linear-to-l from-[#4A249D] to-[#7D41FF] flex items-center justify-between">
                        <Link to='/'>
                            <img className="w-[90px]" src={Logo} alt="logoimg" />
                        </Link>
                        <div onClick={handleFull} className="p-2 w-[40px] h-[40px] hover:bg-white/20 flex items-center justify-center rounded-md cursor-pointer">
                            <img src={DashboardImage} alt="dash icon" />
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

                            <NavLink className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/saved">
                                <li className="w-full flex items-center gap-1">
                                    <img className="w-[24px]" src={Saved} alt="saved.png" />
                                    <p>Saved posts</p>
                                </li>
                            </NavLink>

                            <NavLink onClick={randomImageCode} className="p-2 rounded-md hover:bg-[#E3E3E3]" to={`/random/${randomCode}`}>
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

                            <NavLink className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/store">
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
                                    <img className="w-[24px] rounded-full" src={Valentine} alt="user.png" />
                                    <p>Funny valentine</p>
                                    <img className="w-[15px]" src={True} alt="true.jpg" />
                                </li>
                            </Link>
                            <Link className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/">
                                <li className="w-full flex items-center gap-1">
                                    <img className="w-[24px] rounded-full" src={Profile} alt="user.png" />
                                    <p>Darkens</p>
                                    <img className="w-[15px]" src={True} alt="true.jpg" />
                                </li>
                            </Link>
                            <Link className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/">
                                <li className="w-full flex items-center gap-1">
                                    <img className="w-[24px] rounded-full" src={Profile} alt="user.png" />
                                    <p>The Arty</p>
                                    <img className="w-[15px]" src={True} alt="true.jpg" />
                                </li>
                            </Link>

                            {/* ads  */}
                            <div title="you can add ads here" className="w-[90%] mb-3 h-[120px] bg-[#E3E3E3] rounded-lg flex items-center justify-center absolute bottom-0">
                               <p>AD</p>
                            </div>
                        </ul>

                    </div>


                </div>
                    :
                    <div className='min-w-[60px] w-[60px] h-screen sticky top-0   '>
                        <div className=" p-4 bg-linear-to-l from-[#4A249D] to-[#7D41FF] flex items-center justify-between">
                            <Link to='/'>
                                <img className="w-[111px]" src={whiteLogo} alt="logoimg" />
                            </Link>
                        </div>

                        <div className="border-r border-[#BABABA] h-screen">
                            <ul className=" mx-auto flex flex-col gap-2 py-2  items-center w-full ">
                                <NavLink className="p-2 rounded-md hover:bg-[#E3E3E3] " to="/">
                                    <li className="w-full flex items-center gap-1">
                                        <img className="w-[24px]" src={Home} alt="home.png" />
                                    </li>
                                </NavLink>

                                <NavLink className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/saved">
                                    <li className="w-full flex items-center gap-1">
                                        <img className="w-[24px]" src={Saved} alt="saved.png" />
                                    </li>
                                </NavLink>

                                <NavLink onClick={randomImageCode} className="p-2 rounded-md hover:bg-[#E3E3E3]" to={`random/${randomCode}`}>
                                    <li className="w-full flex items-center gap-1">
                                        <img className="w-[24px]" src={Posts} alt="images.png" />
                                    </li>
                                </NavLink>
                            </ul>

                            <div className="w-[90%] h-[1px] mx-auto bg-[#396893]"></div>

                            <ul className="w-[90%] mx-auto flex flex-col gap-2 py-2 items-center">

                                <NavLink to="/profile" className="p-2 rounded-md hover:bg-[#E3E3E3]">
                                    <li className="w-full flex items-center gap-1">
                                        <img className="w-[24px]" src={Profile} alt="profile.png" />
                                    </li>
                                </NavLink>

                                <NavLink className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/store">
                                    <li className="w-full flex items-center gap-1">
                                        <img className="w-[24px]" src={Bag} alt="bag.png" />
                                    </li>
                                </NavLink>
                            </ul>

                            <div className="w-[90%] h-[1px] mx-auto bg-[#396893]"></div>

                            <ul className="w-[90%] mx-auto flex flex-col gap-2 py-2 items-center">

                                <Link className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/">
                                    <li className="w-full flex items-center gap-1">
                                        <img className="w-[24px] rounded-full" src={Valentine} alt="user.png" />
                                    </li>
                                </Link>
                                <Link className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/">
                                    <li className="w-full flex items-center gap-1">
                                        <img className="w-[24px] rounded-full" src={Profile} alt="user.png" />
                                    </li>
                                </Link>
                                <Link className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/">
                                    <li className="w-full flex items-center gap-1">
                                        <img className="w-[24px] rounded-full" src={Profile} alt="user.png" />
                                    </li>
                                </Link>
                            </ul>

                        </div>
                    </div>
                }

            </div>

            {/* md sidebar  */}
            <div className='sidebar-show min-w-[60px] w-[60px] h-screen sticky top-0   '>
                <div className=" p-4 bg-linear-to-l from-[#4A249D] to-[#7D41FF] flex items-center justify-between">
                    <Link to='/'>
                        <img className="w-[111px]" src={whiteLogo} alt="logoimg" />
                    </Link>
                </div>

                <div className="border-r border-[#BABABA] h-screen">
                    <ul className=" mx-auto flex flex-col gap-2 py-2  items-center w-full ">
                        <NavLink className="p-2 rounded-md hover:bg-[#E3E3E3] " to="/">
                            <li className="w-full flex items-center gap-1">
                                <img className="w-[24px]" src={Home} alt="home.png" />
                            </li>
                        </NavLink>

                        <NavLink className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/saved">
                            <li className="w-full flex items-center gap-1">
                                <img className="w-[24px]" src={Saved} alt="saved.png" />
                            </li>
                        </NavLink>

                        <NavLink onClick={randomImageCode} className="p-2 rounded-md hover:bg-[#E3E3E3]" to={`random/${randomCode}`}>
                            <li className="w-full flex items-center gap-1">
                                <img className="w-[24px]" src={Posts} alt="images.png" />
                            </li>
                        </NavLink>
                    </ul>

                    <div className="w-[90%] h-[1px] mx-auto bg-[#396893]"></div>

                    <ul className="w-[90%] mx-auto flex flex-col gap-2 py-2 items-center">

                        <NavLink to="/profile" className="p-2 rounded-md hover:bg-[#E3E3E3]">
                            <li className="w-full flex items-center gap-1">
                                <img className="w-[24px]" src={Profile} alt="profile.png" />
                            </li>
                        </NavLink>

                        <NavLink className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/store">
                            <li className="w-full flex items-center gap-1">
                                <img className="w-[24px]" src={Bag} alt="bag.png" />
                            </li>
                        </NavLink>
                    </ul>

                    <div className="w-[90%] h-[1px] mx-auto bg-[#396893]"></div>

                    <ul className="w-[90%] mx-auto flex flex-col gap-2 py-2 items-center">

                        <Link className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/">
                            <li className="w-full flex items-center gap-1">
                                <img className="w-[24px]" src={Valentine} alt="user.png" />
                            </li>
                        </Link>
                        <Link className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/">
                            <li className="w-full flex items-center gap-1">
                                <img className="w-[24px]" src={Profile} alt="user.png" />
                            </li>
                        </Link>
                        <Link className="p-2 rounded-md hover:bg-[#E3E3E3]" to="/">
                            <li className="w-full flex items-center gap-1">
                                <img className="w-[24px]" src={Profile} alt="user.png" />
                            </li>
                        </Link>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Sidebar