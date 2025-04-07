import { useState } from 'react'

// react - router - dom
import { Link } from 'react-router-dom'

// assets 
import SettingsImg from "../assets/profile/settings.png"
import BgImg from "../assets/profile/bg.png"
import ValentineImg from "../assets/valentine.png"
import TrueImg from "../assets/true.png"
import valentineImage from "../assets/valentine.png"
import CloseImage from "../assets/close.png";
import DragPlus from "../assets/addPost/drag.png"

// data 
import { gallery } from "../data/data"

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [bgImage, setBgImage] = useState(BgImg);

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    const handleBack = (e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(!isOpen);
        };
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setBgImage(fileUrl)
            setIsOpen(false);
        }
    }

    return (
        <div className='w-[95%] mx-auto py-2'>

            {/* bg-pic  */}
            <div className='w-full h-[178px] bg-[#e3e3e3] rounded-md relative border border-[#BABABA] bg-cover bg-center' style={{ backgroundImage: `url(${bgImage ? bgImage : BgImg})` }}>

                {/* settings  */}
                <div onClick={handleModal} className='w-[42px] h-[42px] p-1 bg-white flex items-center justify-center rounded-lg border border-[#b8b8b8] absolute right-5 top-5 cursor-pointer'>
                    <img src={SettingsImg} alt="SettingsImg" />
                </div>

                {/* profile pic  */}
                <div className='w-[100px] h-[100px] rounded-full overflow-hidden absolute top-[120px] left-1/2 transform -translate-x-1/2'>
                    <img className='object-cover' src={ValentineImg} alt="profileImg" />
                </div>
            </div>

            {/* about user  */}
            <div className='flex items-center justify-start flex-col gap-2 my-15'>

                {/* name  */}
                <div className='flex items-center justify-center font-bold text-2xl whitespace-nowrap gap-1'>
                    <p>Funny Valentine</p> <img className='w-[25px]' src={TrueImg} alt="trueImg" />
                </div>

                {/* bio  */}
                <p className='text-[#404040]'>just ordinary artist</p>

                {/* posts likes followers*/}
                <div className='flex items-center justify-center gap-2 text-2xl font-bold'>
                    <p><span>5</span> posts</p>
                    <div className='w-[2px] h-[30px] bg-black'></div>
                    <p><span>78</span> likes</p>
                    <div className='w-[2px] h-[30px] bg-black'></div>
                    <p><span>1.8</span><Link to="/f"> followers</Link></p>
                </div>
            </div>

            {/* posts  */}
            <div className='w-full '>

                {/* show all button  */}
                <div className='flex items-center justify-between'>
                    <p className='text-2xl font-bold'>Posts</p>
                    <button className='cursor-pointer'>show all posts</button>
                </div>

                {/* pictures  */}
                <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 my-5 gap-4">
                    {
                        gallery.map((img, index) => (
                            <div key={index} className=' rounded-lg overflow-hidden cursor-pointer mb-4 relative'>
                                <Link to={`/img/${img.id}`}>
                                    <img
                                        className='w-full mx-auto'
                                        src={img.image}
                                        alt={img.tag}
                                    />
                                    <div className="flex items-center gap-2 absolute bottom-0 bg-black/10 w-full p-1 text-white backdrop-blur-sm">
                                        <img className="w-[20px] rounded-full" src={valentineImage} alt="" />
                                        <p className='text-sm'>mukhammadali</p>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>

            </div>

            {/* modal  */}
            {
                isOpen && <div onClick={handleBack} className='fixed inset-0 backdrop-blur-sm bg-black/30 flex items-end sm:items-center justify-center z-100'>
                    {/* madal contont  */}
                    <div className='w-full sm:w-[500px] pt-10 pb-0 bg-white rounded-lg flex items-center justify-center flex-col space-y-3 relative'>
                        <p className='text-lg font-semibold absolute top-2'>Choose file</p>

                        {/* input file  */}
                        <label className="w-[95%] flex flex-col gap-1 cursor-pointer">
                            <p className="font-bold">Upload your background picture</p>
                            <div className=" bg-white w-full border border-[#bababa] rounded-lg h-[156px] flex flex-col items-center justify-center">
                                <img src={DragPlus} alt="drag.png" />
                                <p className="text-[#bababa]">upload or drag here</p>
                            </div>
                            <input onChange={handleImageChange} className="hidden" type="file" />
                        </label>

                        {/* close btn  */}
                        <div onClick={handleModal} className='bg-gray-300 hover:bg-gray-200 rounded-full p-1 absolute right-2 top-2 cursor-pointer'>
                            <img className='w-[20px] h-[20px]' src={CloseImage} alt="close button" />
                        </div>
                    </div>

                </div>
            }

        </div>
    )
}

export default Profile