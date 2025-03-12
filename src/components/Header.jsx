
// react router dom 
import { Link } from "react-router-dom"

// assets 
import Bars from "../assets/header/bars.png"
import Plus from "../assets/header/plus.png"
import Profile from "../assets/valentine.png"
const Header = () => {
  return (
    <header className='w-[95%] mx-auto flex items-center justify-between gap-2 my-2'>
      <div className="w-[47px] h-[42px] border border-[#707070] flex items-center justify-center rounded-md cursor-pointer hover:bg-black/10">
        <img className="w-[27px]" src={Bars} alt="bar" />
      </div>

      <form className="w-full">
        <input className="w-full h-[42px] border border-[#707070] rounded-md px-2" placeholder="serch anything..." type="text" />
        <button className="hidden"></button>
      </form>

      <Link to="/add-post">
        <button className="cursor-pointer hover:opacity-95 flex items-center justify-center gap-0.5 bg-linear-to-b px-4 rounded-md h-[42px] from-[#4A249D] to-[#7D41FF] text-white">
          <img className="w-[24px] h-[24px]" src={Plus} alt="plus.png" />
          NEW
        </button>
      </Link>

      <img className="w-[42px] h-[42px]" src={Profile} alt="Profile" />

    </header >
  )
}

export default Header