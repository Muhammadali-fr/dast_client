// react 
import { useCallback, useState } from "react";

// react router dom 
import { Link } from "react-router-dom";

// assets 
import Logo from "../assets/logo.png";

// services 
import authServices from "../api/services/authService";

const Login = () => {
    const token = localStorage.getItem("token");
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    if (token) window.location.pathname = "/";


    const handleInputChange = useCallback((field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        authServices
            .login(formData)
            .then(({ message, token }) => {
                if (!message) return alert("nomalum xatolik")

                // token to localstorage 
                localStorage.setItem("token", token)
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false))
    }

    return (
        <>
            <div className="flex items-center justify-center h-[90vh]">

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
                            complate login
                        </button>

                        <p>don't have an account <Link to="/register" className="text-blue-800 underline">register</Link></p>
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