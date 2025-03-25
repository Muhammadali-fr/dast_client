import { useState } from "react"

// react router dom 
import { Link } from "react-router-dom"

// assets 
import Logo from "../assets/logo.png"
import UserImg from "../assets/auth/user.png"
import toast from "react-hot-toast"

const Bio = ({ prevStep, nextStep, formData, updateform, preview, setPreview }) => {

  const handleSkip = () => {
    // bioni bosh holatda jonatamz va avatarni ham bosh qilib jonatamz 
    updateform({ bio: "", avatar: "" })

    // next page 
    nextStep();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.avatar) {
      return toast.error("chooose image or skip.")
    }


    // keyingi pagega 
    nextStep()
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file))
      updateform({ avatar: file })
    }
  }

  return (
    <div className="flex items-center justify-center h-[95vh]">

      <div className="w-[283px] flex flex-col gap-3 ">
        <img className="w-[140px] mx-auto" src={Logo} alt="Logo img" />
        <p className="text-xl font-bold text-center mt-2">Wanna pic & bio</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">

          {/* avatar  */}
          <label className="cursor-pointer">
            <div className="w-[175px] h-[175px] relative border border-black/50 rounded-full mx-auto flex items-center justify-center">
              <img className="w-full h-full rounded-full object-center object-cover" src={preview ? preview : UserImg} alt="UserImg" />
              <div className="w-[45px] h-[45px] bg-white absolute bottom-0 right-0 border border-black/50 rounded-full"></div>
            </div>
            <input
              onChange={handleImageChange}
              className="hidden" type="file" />
          </label>

          {/* bio  */}
          <label className="text-gray-600">
            enter bio here
            <input
              value={formData.bio}
              onChange={e => updateform({ bio: e.target.value })}
              required
              className="w-full p-2 bg-[#e7e7e7] rounded-md border border-gray-400 mt-1 cursor-pointer" type="text" />
          </label>

          {/* Button  */}
          <button type="submit" className="w-full py-3 rounded-lg bg-linear-to-b from-[#4A249D] to-[#7D41FF] text-white mt-2 cursor-pointer hover:opacity-90">NEXT</button>

          {/* skip btn  */}
          <button onClick={handleSkip} className="w-full py-3 rounded-lg text-[#4A249D] mt-2 cursor-pointer hover:bg-violet-300">SKIP</button>

          <button type="button" onClick={prevStep} className="w-full bg-violet-700 py-3 rounded-lg text-white mt-2 cursor-pointer hover:bg-violet-300">back to change</button>
        </form>
      </div>
    </div>

  )
}

export default Bio                                                                            