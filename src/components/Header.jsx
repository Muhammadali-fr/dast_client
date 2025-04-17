// react 
import { useContext, useState } from "react"

// react router dom 
import { Link, useNavigate } from "react-router-dom"

// assets 
import Bars from "../assets/bar.png"
import Plus from "../assets/header/plus.png"
import Profile from "../assets/valentine.png"
import UserImage from "../assets/bottom/user.png"

// useContex 
import { UserContext } from "../userContext"
import { SearchContext } from "../searchContext"

// toast 
import toast from "react-hot-toast"

// axios
import axios from "axios"

// loader 
import Loader from "./Loader"

const Header = () => {

  // useContext 
  const { user } = useContext(UserContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  console.log(searchTerm);


  // states 
  const [popUp, setPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // navigate 
  const navigate = useNavigate();

  const handleProfile = () => {
    setPopUp(!popUp)
  }

  // function for search input 
  const handleInput = (e) => {
    if (window.location.pathname == "/") {
      return setSearchTerm(e)
    }
    navigate("/");
    setSearchTerm(e);
  }

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/logout`, {}, { withCredentials: true });
      toast.success("You logged out from your account.");
      window.location.reload();
    } catch (error) {
      toast.error("Error while logging out.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className='w-[95%] mx-auto flex items-center justify-between gap-2 my-2'>
      <div className="w-[47px] min-w-[40px] h-[40px] border border-[#BABABA] flex items-center justify-center rounded-md cursor-pointer hover:bg-black/10">
        <img className="w-[27px]" src={Bars} alt="bar" />
      </div>

      <form className="w-full">
        <input value={searchTerm} onChange={e => handleInput(e.target.value)} className="w-full h-[42px] border border-[#BABABA] rounded-md px-2" placeholder="serch anything..." type="text" />
        <button className="hidden"></button>
      </form>

      {user
        ?
        <div className="flex items-center gap-2">

          <Link className="hidden sm:block" to="/add-post">
            <button className="cursor-pointer hover:opacity-95 flex items-center justify-center gap-0.5 bg-linear-to-b px-4 rounded-md h-[42px] from-[#4A249D] to-[#7D41FF] text-white">
              <img className="w-[24px] h-[24px]" src={Plus} alt="plus.png" />
              NEW
            </button>
          </Link>

          {/* modal  */}
          <div className="relative">
            <img onClick={handleProfile} className={popUp ? "border-2 rounded-full  border-[#7008e7] w-[42px] h-[42px] object-cover object-center min-w-[42px] cursor-pointer" : "border-2 rounded-full border-[#ffffff] w-[42px] min-w-[42px] cursor-pointer  h-[42px] object-cover object-center"} src={Profile} alt="Profile" />
            {popUp &&
              // overlay 
              <div>
                <div className="absolute flex flex-col gap-2 top-12 right-0 w-[250px] bg-[#e3e3e3] p-2 border border-[#BABABA] rounded-lg z-200">
                  {user &&
                    <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
                      <img className="w-[50px] h-[50px]" src={UserImage} alt="userImage" />
                      <p className="font-bold">{user.name}</p>
                    </div>}
                  <button onClick={handleLogout} title="logout of your account." className="w-full bg-violet-700 text-white p-2 rounded-lg cursor-pointer hover:bg-violet-600">{isLoading ? <Loader /> : "Logout"}</button>
                </div>
              </div>}
          </div>
        </div>
        :
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