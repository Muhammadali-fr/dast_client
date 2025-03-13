// react 
import { useEffect, useState } from "react";

// react router dom 
import { Link } from "react-router-dom";

// assets 
import DragPlus from "../assets/addPost/drag.png"
import ExempleImage from "../assets/addPost/exemple.jpeg"
import ValentineImage from "../assets/valentine.png"
import TrueImage from "../assets/true.png"
import ThreeDots from "../assets/dotsb.png"

// ant design 
import { Select } from "antd";

const AddPost = () => {
    const [post, setPost] = useState(false)
    const [details, setDetails] = useState(false)
    const [language, setLanguage] = useState("post");

    useEffect(() => {
        if (language === "post") {
            setPost(true)
            setDetails(false)
        } else {
            setDetails(true)
            setPost(false)
        }
    }, [language])

    return (
        <div className="w-[95%] mx-auto">

            {/* header  */}
            <div className="flex my-5 items-center justify-between">
                <p className="font-bold text-2xl">CREATE NEW POST</p>
                <Link to="/">
                    <p className="text-2xl underline">cancel</p>
                </Link>
            </div>

            {/* Links  */}
            <div className="flex items-center gap-5 border-b border-[#BABABA]">
                <Link className="text-violet-700">POST</Link>
                <Link className="relative">ADD YOUR PRODUCT <span className="px-2 rounded-lg text-center bg-violet-700 text-white absolute bottom-4 left-34">pro</span> </Link>
                <Link className="relative">ADD NEW COLLECTION <span className="px-2 rounded-lg text-center bg-violet-700 text-white absolute bottom-4 left-38">pro</span>  </Link>
            </div>

            {/* main  */}
            <div className="flex flex-col gap-5 my-5">

                {/* title  */}
                <p className="text-center text-2xl font-semibold">Create your new post</p>

                <div className="flex justify-between gap-5">
                    {/* form  */}
                    <form className="max-w-[317px] flex flex-col gap-5">

                        {/* file  */}
                        <label className="flex flex-col gap-1 cursor-pointer">
                            <p className="font-bold">Upload your picture</p>
                            <p className="text-gray-500 text-sm">File types supported: JPG, PNG, GIF, SVG, MP4,</p>
                            <div className="w-full border border-[#bababa] rounded-lg h-[156px] flex flex-col items-center justify-center">
                                <img src={DragPlus} alt="drag.png" />
                                <p className="text-[#bababa]">upload or drag here</p>
                            </div>
                            <input className="hidden" type="file" />
                        </label>

                        {/* title  */}
                        <label className="w-full flex flex-col gap-1">
                            <p className="font-bold"> Title of Post</p>
                            <input className="border border-[#BABABA] p-2 rounded-lg w-full" placeholder="title here" type="text" />
                        </label>

                        {/* Description  */}

                        <label className="w-full flex flex-col gap-1">
                            <p className="font-bold">Description</p>
                            <textarea placeholder="description" className="border border-[#BABABA] p-2 rounded-lg w-full max-h-[84px]"></textarea>
                        </label>

                        {/* button  */}
                        <button type="submit" className="w-full cursor-pointer py-2 text-white bg-linear-to-r from-[#4A249D] to-[#7D41FF] rounded-lg hover:opacity-90">Create</button>
                    </form>

                    {/* view  */}
                    <div className="w-full bg-white border border-[#BABABA] rounded-lg p-5 space-y-5">

                        {/* select  */}
                        <div className="flex items-center justify-between">
                            <p>View engine</p>

                            <Select
                                className="w-[100px]"
                                placeholder="Tilni tanlang"
                                value={language}
                                onChange={setLanguage}
                                options={[
                                    { value: "post", label: "post" },
                                    { value: "details", label: "details" },
                                ]}
                            />
                        </div>

                        {/* post  */}
                        {post && <div className="w-full flex items-center justify-center">
                            <div>
                                <p className="text-sm w-[203px] whitespace-nowrap truncate relative top-5 text-white bg-black/30">image title here which user enters </p>
                                <img className="rounded-lg w-[203px] h-[284px] object-cover object-center " src={ExempleImage} alt="ExempleImage" />

                                <div className="flex items-center gap-2 justify-between mt-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <img className="w-[23px] h-[23px]" src={ValentineImage} alt="ValentineImage" />
                                        <div className="flex items-center">
                                            <p className="text-sm">Funny Valentine</p>
                                            <img src={TrueImage} alt="TrueImage" />
                                        </div>

                                    </div>
                                    <img className="w-[20px] h-[20px]" src={ThreeDots} alt="ThreeDots" />
                                </div>
                            </div>
                        </div>}

                        {details && <p>details</p>}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPost