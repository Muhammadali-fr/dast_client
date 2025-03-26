// react router dom 
import { NavLink } from 'react-router-dom';

// assets 
import Home from "../assets/bottom/homeImage.png"
import Saved from "../assets/saved.png"
import Posts from "../assets/bottom/gallery.png"
import Profile from "../assets/bottom/user.png"
import PlusImage from "../assets/bottom/plus.png"

const Bottom = () => {
    return (
        <div className="bottom-sidebar w-full sticky bottom-0 bg-white  flex items-center justify-center z-50">
            <ul className=" mx-auto flex justify-around gap-2 py-2  items-center w-full ">
                <NavLink className="p-3 rounded-md hover:bg-[#E3E3E3] " to="/">
                    <li className="w-full flex items-center gap-1">
                        <img className="w-[24px]" src={Home} alt="home.png" />
                    </li>
                </NavLink>

                <NavLink className="p-3 rounded-md hover:bg-[#E3E3E3]" to="/login">
                    <li className="w-full flex items-center gap-1">
                        <img className="w-[24px]" src={Saved} alt="saved.png" />
                    </li>
                </NavLink>

                <NavLink className="sm:hidden p-3 rounded-md hover:bg-[#E3E3E3]" to="/add-post">
                    <li className="w-full flex items-center gap-1">
                        <img className="w-[24px]" src={PlusImage} alt="saved.png" />
                    </li>
                </NavLink>

                <NavLink className="p-3 rounded-md hover:bg-[#E3E3E3]" to="/register">
                    <li className="w-full flex items-center gap-1">
                        <img className="w-[24px]" src={Posts} alt="images.png" />
                    </li>
                </NavLink>

                <NavLink className="p-3 rounded-md hover:bg-[#E3E3E3]" to="/profile">
                    <li className="w-full flex items-center gap-1">
                        <img className="w-[24px]" src={Profile} alt="images.png" />
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};


export default Bottom