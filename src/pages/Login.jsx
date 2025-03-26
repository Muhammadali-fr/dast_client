// react 
import { useCallback, useState } from "react";

// react router dom 
import { Link } from "react-router-dom";

// assets 
import Logo from "../assets/logo.png";

// react-hot-toast 
import toast from "react-hot-toast";


// axios 
import axios from "axios";

const Login = () => {
    const token = localStorage.getItem("token");
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // if token is exist redirect to home 
    if (token) window.location.pathname = "/";


    const handleInputChange = useCallback((field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    }, []);


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:5000/login",
                formData,
                { withCredentials: true }
            );

            toast.success(res.data.message);
            console.log("Login successful:", res.data);
        } catch (error) {
            console.log(error);
            toast.error("login vaqtida hato");
        }
    };

    return (
        <>
            <div className="flex items-center justify-center h-[95vh]">

                <div className="w-[283px] flex flex-col gap-3 ">

                    <Link to="/">
                        <img className="w-[140px] mx-auto" src={Logo} alt="Logo img" />
                    </Link>

                    <p className="text-xl font-bold text-center mt-2">Login</p>
                    <form className="flex flex-col gap-2" onSubmit={handleLogin}>

                        {/* email  */}
                        <label className="text-gray-600">
                            enter email or username
                            <input onChange={e => handleInputChange("email", e.target.value)}
                                className="w-full p-2 bg-[#e7e7e7] rounded-md border border-gray-400 mt-1 cursor-pointer"
                                type="email" />
                        </label>

                        {/* password  */}
                        <label className="text-gray-600">
                            enter your password
                            <input onChange={e => handleInputChange("password", e.target.value)}
                                className="w-full p-2 bg-[#e7e7e7] rounded-md border border-gray-400 mt-1 cursor-pointer"
                                type="password" />
                        </label>

                        {/* Button  */}
                        <button
                            className="w-full py-3 rounded-lg bg-linear-to-b from-[#4A249D] to-[#7D41FF] text-white mt-2 cursor-pointer hover:opacity-90">
                            {isLoading ? ("logging...") : ("complate login")}
                        </button>

                        <p>don't have an account <Link to="/register" className="text-blue-800 underline">register</Link></p>
                    </form>
                </div>
            </div>
            <div className="w-[90%] flex items-center justify-between mx-auto my-5">
                <Link>read documentations</Link>
                <Link>learn about us</Link>
            </div>
        </>

    )
}

export default Login                                                                            