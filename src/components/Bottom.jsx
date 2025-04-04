// react 
import { useState } from 'react';

// react router dom 
import { NavLink } from 'react-router-dom';

// assets 
import Home from "../assets/bottom/homeImage.png"
import Saved from "../assets/saved.png"
import Posts from "../assets/bottom/gallery.png"
import Bookmark from "../assets/bottom/bookmark.png"
import Profile from "../assets/bottom/user.png"
import PlusImage from "../assets/bottom/plus.png"

// data 
import { gallery } from '../data/data';


const Bottom = () => {
    const arrayLenght = gallery.length;

    const firstCode = Math.floor(Math.random() * arrayLenght);

    const [randomCode, setRandomCode] = useState(firstCode);

    // random image uchun id chiqarib beradi        
    const randomImageCode = () => {
        setRandomCode(Math.floor(Math.random() * arrayLenght));
    }

    if (randomCode == 0) {
        randomCode + 1;
    }

    return (
        <div className="bottom-sidebar w-full sticky bottom-0 bg-white  flex items-center justify-center z-50">
            <ul className=" mx-auto flex justify-around gap-2 py-2  items-center w-full ">
                <NavLink className="p-3 rounded-md hover:bg-[#E3E3E3] " to="/">
                    <li className="w-full flex items-center gap-1">
                        <img className="w-[24px]" src={Home} alt="home.png" />
                    </li>
                </NavLink>

                <NavLink className="p-3 rounded-md hover:bg-[#E3E3E3]" to="/saved">
                    <li className="w-full flex items-center gap-1">
                        <img className="w-[24px]" src={Bookmark} alt="bookmark.png" />
                    </li>
                </NavLink>

                <NavLink className="sm:hidden p-3 rounded-md hover:bg-[#E3E3E3]" to="/add-post">
                    <li className="w-full flex items-center gap-1">
                        <img className="w-[24px]" src={PlusImage} alt="saved.png" />
                    </li>
                </NavLink>

                <NavLink onClick={randomImageCode} className="p-3 rounded-md hover:bg-[#E3E3E3]" to={`/random/${randomCode}`}>
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