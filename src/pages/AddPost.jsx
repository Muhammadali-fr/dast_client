// react 
import { useContext, useEffect, useState } from "react";

// react router dom 
import { Link, useNavigate } from "react-router-dom";

// assets 
import DragPlus from "../assets/addPost/drag.png"
import ExempleImage from "../assets/addPost/exemple.jpeg"
import ValentineImage from "../assets/valentine.png"
import TrueImage from "../assets/true.png"
import ThreeDots from "../assets/dotsb.png"
import LikeImg from "../assets/addPost/like.png"
import saveImg from "../assets/addPost/save.png"
import downloadImg from "../assets/addPost/download.png"

// ant design 
import { Select } from "antd";

// useContex 
import { UserContext } from "../userContext";

// data 
import { filterButtons } from "../data/data";


const AddPost = () => {
    const [post, setPost] = useState(false)
    const [details, setDetails] = useState(false)
    const [language, setLanguage] = useState("post");

    const [preview, setPreview] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);

    const navigate = useNavigate()
    useEffect(() => {
        if (language === "post") {
            setPost(true)
            setDetails(false)
        } else {
            setDetails(true)
            setPost(false)
        }
    }, [language])

    // when pic is chooosen 
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imgUrl = URL.createObjectURL(file);
            setPreview(imgUrl);
        }
    }

    // when click tags 
    const handleTags = (e) => {
        if (!tags.includes(e)) {
            tags.push(e);
        }
    }

    console.log(tags);

    return (
        <div className="w-[95%] min-h-screen mx-auto">

            {/* header  */}
            <div className="flex my-5 items-center justify-between">
                <p className="font-bold text-2xl">CREATE NEW POST</p>
                <Link to="/">
                    <p className="text-2xl underline">cancel</p>
                </Link>
            </div>

            {/* Links  */}
            <div className="w-full overflow-scroll flex items-center gap-5 border-b border-[#BABABA] py-5 overscroll-x-hidden">
                <Link className="text-violet-700 whitespace-nowrap">POST</Link>
                <Link to="/store" className="relative whitespace-nowrap">ADD YOUR PRODUCT <span className="px-2 rounded-lg text-center bg-violet-700 text-white absolute bottom-4 left-34">pro</span> </Link>
                <Link to="/store" className="relative whitespace-nowrap">ADD NEW COLLECTION <span className="px-2 rounded-lg text-center bg-violet-700 text-white absolute bottom-4 left-38">pro</span>  </Link>
            </div>

            {/* main  */}
            <div className="flex flex-col gap-5 my-5">

                {/* title  */}
                <p className="text-center text-2xl font-semibold">Create your new post</p>

                <div className="sm:flex space-y-5 justify-between gap-5">
                    {/* form  */}
                    <form className="sm:max-w-[317px] w-full flex flex-col gap-5">

                        {/* file  */}
                        <label className="flex flex-col gap-1 cursor-pointer">
                            <p className="font-bold">Upload your picture</p>
                            <p className="text-gray-500 text-sm">File types supported: JPG, PNG, GIF, SVG, MP4,</p>
                            <div className=" bg-white w-full border border-[#bababa] rounded-lg h-[156px] flex flex-col items-center justify-center">
                                <img src={DragPlus} alt="drag.png" />
                                <p className="text-[#bababa]">upload or drag here</p>
                            </div>
                            <input onChange={handleImageChange} className="hidden" type="file" />
                        </label>

                        {/* title  */}
                        <label className="w-full flex flex-col gap-1">
                            <p className="font-bold"> Title of Post</p>
                            <input value={title} onChange={e => setTitle(e.target.value)} className="bg-white border border-[#BABABA] p-2 rounded-lg w-full" placeholder="title here" type="text" />
                        </label>

                        {/* Description  */}
                        <label className="w-full flex flex-col gap-1">
                            <p className="font-bold">Description</p>
                            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="description" className=" bg-white border border-[#BABABA] p-2 rounded-lg w-full max-h-[84px]"></textarea>
                        </label>

                        {/* tags  */}
                        <div className="space-y-3">
                            <p className="font-bold">Select tags</p>
                            <ul className="flex items-center overflow-scroll gap-2">
                                {
                                    filterButtons.map((filterButton, index) => {
                                        return <li key={index} onClick={e => handleTags(filterButton.category.toLowerCase())} className="px-2 py-0.5 text-white rounded-lg bg-[#4e26a5] cursor-pointer">
                                            <p className="whitespace-nowrap">{filterButton.category.toLowerCase()}</p>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>


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
                                placeholder="select view"
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

                                {/* image  */}
                                <img className="rounded-lg w-[203px] h-[284px] object-cover object-center " src={preview ? preview : ExempleImage} alt="ExempleImage" />

                                <div className="flex items-center gap-2 justify-between mt-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <img className="w-[23px] h-[23px] rounded-full" src={ValentineImage} alt="ValentineImage" />
                                        <div className="flex items-center gap-2">
                                            <p className="text-sm">Funny Valentine</p>
                                            <img className="w-[20px]" src={TrueImage} alt="TrueImage" />
                                        </div>

                                    </div>
                                    <img className="w-[20px] h-[20px]" src={ThreeDots} alt="ThreeDots" />
                                </div>
                            </div>
                        </div>}

                        {/* details  */}
                        {details && <div className="details flex items-center gap-5 ">
                            <img className="min-w-[203px] w-[203px] h-[284px] rounded-lg" src={preview ? preview : ExempleImage} alt="selected pic" />

                            <div className="max-w-[363px] flex flex-col gap-2">

                                {/* title  */}
                                <p className="font-semibold">{title ? title : "Image title here"}</p>

                                {/* description here  */}
                                <p className="text-sm w-full">{description ? description : "my favourite place"}</p>

                                {/* likes and name  */}
                                <div className="w-[154px] flex flex-col gap-2">
                                    <div className="flex items-center gap-2 justify-between mt-2">
                                        <div className="flex items-center justify-between gap-2">
                                            <img className="w-[23px] h-[23px] rounded-full" src={ValentineImage} alt="ValentineImage" />
                                            <div className="flex items-center gsp-1">
                                                <p className="text-sm">Funny Valentine</p>
                                                <img className="w-[20px]" src={TrueImage} alt="TrueImage" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* like */}
                                    <div className="flex flex-col">
                                        <div className="w-full h-[29px] flex items-center gap-2 px-5 rounded-lg border border-[#BABABA]">
                                            <img className="w-[15px] h-[15px]" src={LikeImg} alt="LikeImg" />
                                            Like
                                        </div>
                                    </div>

                                    {/* save  */}
                                    <div className="flex flex-col">
                                        <div className="w-full h-[29px] flex items-center gap-2 px-5 rounded-lg border border-[#BABABA]">
                                            <img className="w-[15px] h-[15px]" src={saveImg} alt="saveImg" />
                                            Save
                                        </div>
                                    </div>

                                    {/* download  */}
                                    <div className="flex flex-col">
                                        <div className="w-full h-[29px] flex items-center gap-2 px-5 rounded-lg border border-[#BABABA]">
                                            <img className="w-[15px] h-[15px]" src={downloadImg} alt="downloadImg" />
                                            download
                                        </div>
                                    </div>

                                    {/* likes and saves  */}
                                    <div className="flex items-center gap-5">
                                        <div className="flex items-center justify-center gap-1">
                                            <img src={LikeImg} alt="like img" />
                                            <span>12</span>
                                        </div>

                                        <div className="flex items-center justify-center gap-1">
                                            <img src={saveImg} alt="save img" />
                                            <span>232</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPost