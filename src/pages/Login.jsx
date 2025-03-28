import { useCallback, useState, useEffect, useContext } from "react";

// react-router-dom 
import { Link, useNavigate } from "react-router-dom";

// axios 
import axios from "axios";

// toast 
import toast from "react-hot-toast";

// assets 
import Logo from "../assets/logo.png";

// UserContext
import { UserContext } from "../userContext";

// Loader
import Loader from "../components/Loader";

const Login = () => {
    // user 
    const { user } = useContext(UserContext);

    // naigate 
    const navigate = useNavigate();

    // states 
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = useCallback((field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    }, []);

    // redirect to home 
    useEffect(() => {
        if (user) navigate("/");
    }, [navigate, user])

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/login`,
                formData,
                { withCredentials: true }
            );

            toast.success(res.data.message);
            console.log("Login successful:", res.data);
            navigate("/");
            window.location.reload();
        } catch (error) {
            console.log(error);
            toast.error(error.response.data);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
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
                        {isLoading ? <Loader /> : "Complete login"}
                    </button>

                    <p>Don't have an account? <Link to="/register" className="text-blue-800 underline">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
