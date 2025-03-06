// react router dom 
import { Link } from "react-router-dom"

// assets 
import Logo from "../assets/logo.png"
import UserImg from "../assets/user.png"

const Bio = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[95vh]">

        <div className="w-[283px] flex flex-col gap-3 ">
          <img className="w-[140px] mx-auto" src={Logo} alt="Logo img" />
          <p className="text-xl font-bold text-center mt-2">Wanna pic & bio</p>
          <form className="flex flex-col gap-2">

            {/* email  */}
            <label>
              <div className="w-[175px] h-[175px] relative border border-black/50 rounded-full mx-auto flex items-center justify-center">
                <img src={UserImg} alt="UserImg" />
                <div className="w-[45px] h-[45px] bg-white absolute bottom-0 right-0 border border-black/50 rounded-full"></div>
              </div>
              <input className="hidden w-full p-2 bg-[#e7e7e7] rounded-md border border-gray-400 mt-1 cursor-pointer" type="file" />
            </label>

            {/* password  */}
            <label className="text-gray-600">
              enter bio here
              <input className="w-full p-2 bg-[#e7e7e7] rounded-md border border-gray-400 mt-1 cursor-pointer" type="text" />
            </label>

            {/* Button  */}
            <button type="submit" className="w-full py-3 rounded-lg bg-linear-to-b from-[#4A249D] to-[#7D41FF] text-white mt-2 cursor-pointer hover:opacity-90">NEXT</button>
            <button className="w-full py-3 rounded-lg text-[#4A249D] mt-2 cursor-pointer hover:bg-violet-300">SKIP</button>
          </form>
        </div>
      </div>
      <div className="w-[90%] flex items-center justify-between mx-auto">
        <Link>read documentations</Link>
        <Link>learn about us</Link>
      </div>
    </>

  )
}

export default Bio                                                                            