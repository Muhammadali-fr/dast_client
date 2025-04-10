import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gallery } from "../data/data";

// lucide react 
import {
    ArrowLeft,
    Heart,
    Share,
    MoreHorizontal,
    Expand,
    RotateCw,
    Smile,
    MessageSquare,
    ImageIcon,
    ChevronDown,
} from "lucide-react";

// assets 
import UserImage from "../assets/user.png";

const SeeImage = () => {
    const { id } = useParams();
    const [mainImg, setMainImg] = useState(null);
    const [recomended, setRecomended] = useState([]);

    // Sahifa ochilganda rasm va tavsiya qilingan rasmlarni yuklash
    useEffect(() => {
        window.scrollTo(0, 0);

        const foundImage = gallery.find((img) => img.id == id);
        setMainImg(foundImage);

        if (foundImage) {
            const recomendedImg = gallery.filter(
                (img) => img.id !== foundImage.id && img.tag.some((tag) => foundImage.tag.includes(tag))
            );
            setRecomended(recomendedImg);
        }
    }, [id]);

    return (
        <div className='w-[95%] mx-auto min-h-screen'>
            {mainImg ? (
                <div className='space-y-10'>

                    <div className="sm:max-w-4xl w-full mx-auto">
                        <div className="relative">
                            {/* Main content container */}
                            <div className="flex flex-col md:flex-row rounded-lg overflow-hidden border border-gray-300">


                                {/* Image section */}
                                <div className="relative bg-gray-400 md:w-2/3">
                                    <Link to="/" className="absolute top-4 left-4 p-2 rounded-full bg-white hover:bg-gray-200 cursor-pointer z-10">
                                        <ArrowLeft className="h-5 w-5" />
                                    </Link>


                                    <div className="relative">

                                        {/* main image  */}
                                        <img
                                            src={mainImg.image}
                                            alt="main image"
                                            className=" object-cover aspect-[4/5] md:aspect-auto max-h-[60vh] mx-auto"
                                        />
                                        <div className="absolute bottom-4 right-4 flex space-x-2">
                                            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-300 cursor-pointer">
                                                <Expand className="h-5 w-5" />
                                            </button>
                                            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-300 cursor-pointer">
                                                <RotateCw className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Info section */}
                                <div className="md:w-1/3 p-4 flex flex-col">
                                    {/* Top actions */}
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <button className="p-2 hover:bg-gray-300 rounded-full transition-colors  cursor-pointer">
                                                <Heart className="h-6 w-6 text-gray-700" />
                                            </button>
                                            <button className="p-2 hover:bg-gray-300 rounded-full transition-colors cursor-pointer">
                                                <Share className="h-6 w-6 text-gray-700" />
                                            </button>

                                            {/* more options  */}
                                            <button className="p-2 hover:bg-gray-300 rounded-full transition-colors cursor-pointer">
                                                <MoreHorizontal className="h-6 w-6 text-gray-700" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Category and save button */}
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <span className="font-medium">Car wallpapers</span>
                                            {/* you can add icone hare  */}
                                        </div>
                                        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-medium transition-colors cursor-pointer">
                                            Save
                                        </button>
                                    </div>

                                    {/* User info */}
                                    <div className="flex items-center mb-6">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs overflow-hidden mr-2">
                                            <Link to="/profile">
                                                <img
                                                    src={UserImage}
                                                    alt="User avatar"
                                                    className="w-full h-full object-cover cursor-pointer"
                                                />
                                            </Link>
                                        </div>
                                        <span className="font-medium text-sm">greattt</span>
                                    </div>

                                    {/* Comment section */}
                                    <div className='mt-auto'>
                                        <h3 className="font-bold text-lg">What do you think?</h3>
                                        <div className="bg-gray-100 rounded-full flex items-center">
                                            <input
                                                type="text"
                                                placeholder="add a comment"
                                                className="border border-gray-300 p-2 flex-grow outline-none px-2 text-sm rounded-lg"
                                                readOnly
                                            />
                                            <div className="flex space-x-2">
                                                <button className="p-1 hover:bg-gray-200 rounded-full transition-colors">
                                                    <Smile className="h-5 w-5 text-gray-500" />
                                                </button>
                                                <button className="p-1 hover:bg-gray-200 rounded-full transition-colors">
                                                    <MessageSquare className="h-5 w-5 text-gray-500" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recommended Images */}
                    <div className='w-full'>
                        <p className='text-lg font-semibold'>You may like:</p>
                        <div className="max-w-full columns-2 sm:columns-4 lg:columns-6 my-5 gap-4">
                            {
                                recomended.map((img, index) => (
                                    <div key={index} className=' rounded-lg overflow-hidden cursor-pointer mb-4'>
                                        <Link to={`/img/${img.id}`}>
                                            <img
                                                className='w-full mx-auto'
                                                src={img.image}
                                                alt={img.tag}
                                            />
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ) : (
                <div className='text-center'>Whoops there is not images matched.</div>
            )}
        </div>
    );
};

export default SeeImage;
