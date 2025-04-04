import React, { useEffect, useState } from 'react'

// react - router - dom
import { useParams, Link } from 'react-router-dom';

// data 
import { gallery } from '../data/data';

// assets 
import WhiteLikeImage from "../assets/random/whiteLike.png"
import BlackLikeImage from "../assets/random/blackLike.png"
import whiteBookImage from "../assets/random/whiteBook.png"
import blackBookImage from "../assets/random/blackBook.png"
import whiteChatImage from "../assets/random/whiteChat.png"
import blackChatImage from "../assets/random/blackChat.png"
import blackShareImage from "../assets/random/blackShare.png";
import blackMoreImage from "../assets/random/blackMore.png";
import whiteFullImage from "../assets/random/whiteFull.png";
import UserImage from "../assets/valentine.png";
import blackArrowImage from "../assets/random/blackArrow.png";
import blackTopArrowImage from "../assets/random/blackTopArrow.png";
import galleryImage from "../assets/bottom/gallery.png";



const RandomImage = () => {

    const { id } = useParams();

    const [image, setImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const foundImage = gallery.find((img) => img.id == id);
        console.log(foundImage);
        setImage(foundImage.image);
    }, [id])



    return (
        <div className='w-[95%] min-h-screen mx-auto flex justify-center my-5'>


            {/* view  */}
            <div className=' h-[80vh] flex items-end gap-3 overflow-hidden'>

                {/* image  */}
                <div className='h-full md:max-w-[80%] relative'>

                    {/* description */}
                    <div className='rounded-2xl w-full h-[100px] bg-linear-to-b from-[#525252] to-[#73737300] absolute top-0 flex items-start p-5 justify-between'>
                        <p className='text-white '>USA flag wallpaper</p>

                        <div className='cursor-pointer'>
                            <img className='w-[25px] h-[25px]' src={whiteFullImage} alt="full screen" />
                        </div>
                    </div>


                    {/* main image here  */}
                    <img className='sm:min-w-[392px]  rounded-2xl h-full object-cover object-center' src={image} alt="image" />

                    {/* profile information  */}

                    <Link to="/profile">
                        <div className='absolute bottom-0 flex items-center gap-3 p-5'>
                            <img className='w-[40px] h-[40px] rounded-full' src={UserImage} alt="user image" />
                            <p className='text-white'>mukhamadali.001</p>
                        </div>
                    </Link>
                </div>

                {/* buttons  */}
                <div className=' flex items-center justify-center flex-col gap-3'>

                    {/* like  */}
                    <div className=' flex items-center flex-col'>
                        <div className='w-[40px] h-[40px] rounded-full bg-black/10 flex items-center justify-center hover:bg-black/25 cursor-pointer'>
                            <img className='w-[25px] h-[25px]' src={BlackLikeImage} alt="like" />
                        </div>
                        <span className='font-semibold'>1.2 <span className='text-sm'>k</span></span>
                    </div>

                    {/* save  */}
                    <div className=' flex items-center flex-col'>
                        <div className='w-[40px] h-[40px] rounded-full bg-black/10 flex items-center justify-center hover:bg-black/25 cursor-pointer'>
                            <img className='w-[25px] h-[25px]' src={blackBookImage} alt="save" />
                        </div>
                        <span className='font-semibold'>435<span className='text-sm'></span></span>
                    </div>

                    {/* comment  */}
                    <div className=' flex items-center flex-col'>
                        <div className='w-[40px] h-[40px] rounded-full bg-black/10 flex items-center justify-center hover:bg-black/25 cursor-pointer'>
                            <img className='w-[25px] h-[25px]' src={blackChatImage} alt="comment" />
                        </div>
                        <span className='font-semibold'>24<span className='text-sm'></span></span>
                    </div>

                    {/* share  */}
                    <div className=' flex items-center flex-col'>
                        <div className='w-[40px] h-[40px] rounded-full bg-black/10 flex items-center justify-center hover:bg-black/25 cursor-pointer'>
                            <img className='w-[25px] h-[25px]' src={blackShareImage} alt="share" />
                        </div>
                    </div>

                    {/* more  */}
                    <div className=' flex items-center flex-col'>
                        <div className='w-[40px] h-[40px] rounded-full bg-black/10 flex items-center justify-center hover:bg-black/25 cursor-pointer'>
                            <img className='w-[25px] h-[25px]' src={blackMoreImage} alt="more" />
                        </div>
                    </div>

                </div>

                {/* scroll btns  */}
                <div className='hidden md:block absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex items-center justify-center gap-3 flex-col '>

                        {/* top  */}
                        <div className='w-[40px] h-[40px] rounded-full bg-black/10 flex items-center justify-center hover:bg-black/25 cursor-pointer'>
                            <img className='w-[25px] h-[25px]' src={blackTopArrowImage} alt="top" />
                        </div>

                        {/* show image  */}
                        <div className='w-[40px] h-[40px] rounded-full bg-black/10 flex items-center justify-center hover:bg-black/25 cursor-pointer'>
                            <img className='w-[25px] h-[25px]' src={galleryImage} alt="see image" />
                        </div>

                        {/* down  */}
                        <div className='w-[40px] h-[40px] rounded-full bg-black/10 flex items-center justify-center hover:bg-black/25 cursor-pointer'>
                            <img className='w-[25px] h-[25px]' src={blackArrowImage} alt="down" />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default RandomImage