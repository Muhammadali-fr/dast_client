// react router dom 
import { Link } from "react-router-dom";

// assets 
import DragPlus from "../assets/addPost/drag.png"

const AddPost = () => {
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

                <div className="flex justify-between">
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
                    <div>
                        view
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPost