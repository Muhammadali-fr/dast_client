import { useCallback, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Logo from "../assets/logo.png";

const Login = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (token) navigate("/");
    }, [token, navigate]);

    const handleInputChange = useCallback((field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await axios.post(
                "http://localhost:5000/login",
                formData,
                { withCredentials: true }
            );

            localStorage.setItem("token", res.data.token);
            toast.success(res.data.message);
            console.log("Login successful:", res.data);
            navigate("/");
            window.location.reload();
        } catch (error) {
            console.log(error);
            toast.error("Login vaqtida xato");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center h-[95vh]">
                <div className="w-[283px] flex flex-col gap-3">
                    <Link to="/">
                        <img className="w-[140px] mx-auto" src={Logo} alt="Logo img" />
                    </Link>

                    <p className="text-xl font-bold text-center mt-2">Login</p>
                    <form className="flex flex-col gap-2" onSubmit={handleLogin}>

                        {/* email yoki username */}
                        <label className="text-gray-600">
                            Enter email or username
                            <input
                                onChange={e => handleInputChange("email", e.target.value)}
                                className="w-full p-2 bg-[#e7e7e7] rounded-md border border-gray-400 mt-1 cursor-pointer"
                                type="text"
                            />
                        </label>

                        {/* password */}
                        <label className="text-gray-600">
                            Enter your password
                            <input
                                onChange={e => handleInputChange("password", e.target.value)}
                                className="w-full p-2 bg-[#e7e7e7] rounded-md border border-gray-400 mt-1 cursor-pointer"
                                type="password"
                            />
                        </label>

                        {/* Button */}
                        <button
                            className="w-full py-3 rounded-lg bg-gradient-to-b from-[#4A249D] to-[#7D41FF] text-white mt-2 cursor-pointer hover:opacity-90"
                            disabled={isLoading}
                        >
                            {isLoading ? "Logging in..." : "Complete login"}
                        </button>

                        <p>Don't have an account? <Link to="/register" className="text-blue-800 underline">Register</Link></p>
                    </form>
                </div>
            </div>

            <div className="w-[90%] flex items-center justify-between mx-auto my-5">
                <Link to="/docs">Read documentations</Link>
                <Link to="/about">Learn about us</Link>
            </div>
        </>
    );
};

export default Login;
