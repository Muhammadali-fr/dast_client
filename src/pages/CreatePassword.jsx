import { useState } from "react"

// react router dom 
import { Link } from "react-router-dom"

// assets 
import Logo from "../assets/logo.png"
import BackImage from "../assets/auth/back.png"

// toast 
import toast from "react-hot-toast"

const CreatePassword = ({ nextStep, prevStep, formData, updateform }) => {

    const [repeatPass, setRepeatPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== repeatPass) {
            return toast.error("password don't mach")
        }

        // keyingi pagega otadi 
        nextStep();
    }

    const handlePrev = () => {
        // oldingi pagega qaytarish 
        prevStep()
    }


    return (
        <div className="h-screen flex items-center justify-center bg-[#f5f5f5]">
            <div className="flex items-center justify-center max-w-[933px] w-[90%] bg-white h-[525px] rounded-2xl overflow-hidden">
                <div className="w-[90%] md:w-[40%] mx-auto h-full flex justify-center flex-col gap-2">


                    <Link to="/">
                        <img className="w-[100px]" src={Logo} alt="logo" />
                    </Link>

                    <p className="text-lg font-semibold">Create password</p>

                    <form onSubmit={handleSubmit} className="flex justify-center flex-col gap-5">

                        {/* password  */}
                        <label className="flex flex-col gap-1">
                            <p> password <span>*</span></p>
                            <input
                                value={formData.password}
                                onChange={e => updateform({ password: e.target.value })}
                                className="px-3 py-2 rounded-lg border border-black/40" required type="password" />
                        </label>

                        {/* password  */}
                        <label className="flex flex-col gap-1">
                            <p> password <span>*</span></p>
                            <input
                                value={repeatPass}
                                onChange={e => setRepeatPass(e.target.value)}
                                className="px-3 py-2 rounded-lg border border-black/40" required type="password" />
                        </label>

                        <button className="max-w-[150px] py-2 text-white cursor-pointer rounded-lg w-full bg-linear-to-r  from-[#4A249D] to-[#7D41FF] hover:opacity-90">Submit Register</button>
                    </form>
                </div>
                <div className="hidden md:block auth-bg w-[50%] h-full text-white p-5 relative">
                    <span onClick={handlePrev} className="absolute top-4 right-5 p-1 bg-white w-[40px] h-[40px] opacity-80 cursor-pointer hover:bg-white/90     rounded-lg  flex items-center justify-center">
                        <img className="w-[24px] h-[24px]" src={BackImage} alt="close" />
                    </span>
                    <p>share your own art</p>
                </div>
            </div>
        </div>
    )
}

export default CreatePassword                                                                            