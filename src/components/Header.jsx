// react 
import { useContext, useState } from "react"

// react router dom 
import { Link } from "react-router-dom"

// assets 
import Bars from "../assets/header/bars.png"
import Plus from "../assets/header/plus.png"
import Profile from "../assets/valentine.png"

// useContex 
import { UserContext } from "../userContext"

const Header = () => {
  const { user } = useContext(UserContext);


  const [popUp, setPopUp] = useState(false);

  const handleProfile = () => {
    setPopUp(!popUp)
  }

  return (
    <header className='w-[95%] mx-auto flex items-center justify-between gap-2 my-2'>
      <div className="w-[47px] min-w-[40px] h-[40px] border border-[#BABABA] flex items-center justify-center rounded-md cursor-pointer hover:bg-black/10">
        <img className="w-[27px]" src={Bars} alt="bar" />
      </div>

      <form className="w-full">
        <input className="w-full h-[42px] border border-[#BABABA] rounded-md px-2" placeholder="serch anything..." type="text" />
        <button className="hidden"></button>
      </form>





      {user ?
        <div className="flex items-center gap-2">

          <Link className="hidden sm:block" to="/add-post">
            <button className="cursor-pointer hover:opacity-95 flex items-center justify-center gap-0.5 bg-linear-to-b px-4 rounded-md h-[42px] from-[#4A249D] to-[#7D41FF] text-white">
              <img className="w-[24px] h-[24px]" src={Plus} alt="plus.png" />
              NEW
            </button>
          </Link>

          {/* modal  */}
          <div className="relative">
            <img onClick={handleProfile} className="w-[42px] min-w-[42px] h-[42px] cursor-pointer" src={Profile} alt="Profile" />
            {popUp && <div className="absolute top-12 right-0 w-[250px] h-[150px] bg-[#e3e3e3] p-5 border border-[#BABABA] rounded-lg z-10">
              fsadfsadf
            </div>}
          </div>
        </div> :

        <div className="flex items-center gap-2">

          <Link to='/login'>
            <button className="w-[100px] bg-violet-700 text-white p-2 rounded-lg cursor-pointer hover:bg-violet-600">Login</button>
          </Link>

          <Link to='/register'>
            <button className="hidden sm:block w-[100px] bg-violet-700 text-white p-2 rounded-lg cursor-pointer hover:bg-violet-600">Sign up</button>
          </Link>
        </div>}

    </header >
  )
}

export default Header