// react router dom 
import { Link } from "react-router-dom"

// assets 
import Logo from "../assets/logo.png"
import UserImg from "../assets/auth/user.png"

// loader 
import Loader from '../components/Loader';


const FinishLogin = ({ preview, formData, prevStep, handleRegister, loading }) => {
    return (
        <>
            <div className="flex items-center justify-center h-[95vh]">

                <div className="w-[283px] flex flex-col gap-3">
                    <Link to="/">
                        <img className="w-[140px] mx-auto" src={Logo} alt="Logo img" />
                    </Link>

                    {/* box  */}
                    <div className="w-full bg-[#f0f0f0] h-[258px] border border-[#BABABA] rounded-md flex items-center justify-center flex-col gap-1 px-3">
                        <img className="w-[133px] h-[133px] rounded-full object-cover" src={preview ? preview : UserImg} alt="User img" />
                        <p className="font-bold text-xl">{formData.name}</p>
                        {formData.bio && <p className="opacity-70 text-sm">{formData.bio}</p>}
                    </div>

                    {/* Button  */}
                    <button onClick={handleRegister} className="w-full py-3 rounded-lg bg-linear-to-b from-[#4A249D] to-[#7D41FF] text-white mt-2 cursor-pointer hover:opacity-90">{loading ? <Loader /> : "FINISH & LOGIN"}</button>

                    <button onClick={prevStep} type="button" className="w-full py-3 rounded-lg bg-linear-to-b from-[#4A249D] to-[#7D41FF] text-white mt-2 cursor-pointer hover:opacity-90">
                        back to change
                    </button>
                </div>
            </div>
            <div className="w-[90%] flex items-center justify-between mx-auto">
                <Link>read documentations</Link>
                <Link>learn about us</Link>
            </div>
        </>

    )
}

export default FinishLogin
