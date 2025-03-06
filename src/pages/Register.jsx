// react router dom 
import { Link } from "react-router-dom"

// assets 
import Logo from "../assets/logo.png"

const Register = () => {
    return (
        <>
            <div className="flex items-center justify-center h-[95vh]">

                <div className="w-[283px] flex flex-col gap-3 ">
                    <img className="w-[140px] mx-auto" src={Logo} alt="Logo img" />
                    <p className="text-xl font-bold text-center mt-2">Sing up</p>
                    <form className="flex flex-col gap-2">

                        {/* name  */}
                        <label className="text-gray-600">
                            name
                            <input className="w-full p-2 bg-[#e7e7e7] rounded-md border border-gray-400 mt-1 cursor-pointer" type="text" />
                        </label>

                        {/* username  */}
                        <label className="text-gray-600">
                            username
                            <input className="w-full p-2 bg-[#e7e7e7] rounded-md border border-gray-400 mt-1 cursor-pointer" type="text" />
                        </label>


                        {/*  email  */}
                        <label className="text-gray-600">
                            enter email
                            <input className="w-full p-2 bg-[#e7e7e7] rounded-md border border-gray-400 mt-1 cursor-pointer" type="email" />
                        </label>

                        {/* Button  */}
                        <button className="w-full py-3 rounded-lg bg-linear-to-b from-[#4A249D] to-[#7D41FF] text-white mt-2 cursor-pointer hover:opacity-90">CREATE</button>
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

export default Register                                                                            