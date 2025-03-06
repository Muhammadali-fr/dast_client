// react router dom 
import { Link } from "react-router-dom"

// assets 
import Logo from "../assets/logo.png"

const Login = () => {
    return (
        <>
            <div className="flex items-center justify-center h-[90vh]">

                <div className="w-[283px] flex flex-col gap-3 ">
                    <img className="w-[140px] mx-auto" src={Logo} alt="Logo img" />
                    <p className="text-xl font-bold text-center mt-2">Login</p>
                    <form className="flex flex-col gap-2">

                        {/* email  */}
                        <label className="text-gray-600">
                            enter email or username
                            <input className="w-full p-2 bg-[#e7e7e7] rounded-md border border-gray-400 mt-1 cursor-pointer" type="text" />
                        </label>

                        {/* password  */}
                        <label className="text-gray-600">
                            enter your password
                            <input className="w-full p-2 bg-[#e7e7e7] rounded-md border border-gray-400 mt-1 cursor-pointer" type="password" />
                        </label>

                        {/* Button  */}
                        <button className="w-full py-3 rounded-lg bg-linear-to-b from-[#4A249D] to-[#7D41FF] text-white mt-2 cursor-pointer hover:opacity-90">complate login</button>
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

export default Login                                                                            