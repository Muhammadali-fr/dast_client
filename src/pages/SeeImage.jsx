import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gallery } from "../data/data";

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
                    {/* Showing main image */}
                    <div className='max-w-[900px] mx-auto flex justify-around my-5 gap-5'>
                        <div className='flex items-start gap-5 rounded-lg overflow-hidden'>
                            <img className='rounded-lg mx-auto w-full max-w-[350px] object-cover' src={mainImg.image} alt="Main" />
                        </div>

                        {/* Comment Section */}
                        {/* <div className="p-2 rounded-lg flex flex-col gap-5 bg-red-400">
                            <div>
                                <p>dasdjba</p>
                            </div>
                            <p>What do you think?</p>

                            <div className="flex flex-col gap-3 h-96  overflow-y-scroll">
                                <div className="bg-white p-2 rounded-lg shadow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-sm">username</span>
                                        <span className="text-xs text-gray-500">just now</span>
                                    </div>
                                    <p className="text-sm">text</p>
                                </div>

                                <div className="bg-white p-2 rounded-lg shadow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-sm">username</span>
                                        <span className="text-xs text-gray-500">just now</span>
                                    </div>
                                    <p className="text-sm">text</p>
                                </div>

                                <div className="bg-white p-2 rounded-lg shadow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-sm">username</span>
                                        <span className="text-xs text-gray-500">just now</span>
                                    </div>
                                    <p className="text-sm">text</p>
                                </div>

                                <div className="bg-white p-2 rounded-lg shadow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-sm">username</span>
                                        <span className="text-xs text-gray-500">just now</span>
                                    </div>
                                    <p className="text-sm">text</p>
                                </div>

                                <div className="bg-white p-2 rounded-lg shadow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-sm">username</span>
                                        <span className="text-xs text-gray-500">just now</span>
                                    </div>
                                    <p className="text-sm">text</p>
                                </div>

                                <div className="bg-white p-2 rounded-lg shadow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-sm">username</span>
                                        <span className="text-xs text-gray-500">just now</span>
                                    </div>
                                    <p className="text-sm">text</p>
                                </div>

                                <div className="bg-white p-2 rounded-lg shadow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-sm">username</span>
                                        <span className="text-xs text-gray-500">just now</span>
                                    </div>
                                    <p className="text-sm">text</p>
                                </div>


                                <div className="bg-white p-2 rounded-lg shadow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-sm">username</span>
                                        <span className="text-xs text-gray-500">just now</span>
                                    </div>
                                    <p className="text-sm">text</p>
                                </div>


                                <div className="bg-white p-2 rounded-lg shadow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-sm">username</span>
                                        <span className="text-xs text-gray-500">just now</span>
                                    </div>
                                    <p className="text-sm">text</p>
                                </div>


                                <div className="bg-white p-2 rounded-lg shadow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-sm">username</span>
                                        <span className="text-xs text-gray-500">just now</span>
                                    </div>
                                    <p className="text-sm">text</p>
                                </div>


                                <div className="bg-white p-2 rounded-lg shadow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-sm">username</span>
                                        <span className="text-xs text-gray-500">just now</span>
                                    </div>
                                    <p className="text-sm">text</p>
                                </div>


                                <div className="bg-white p-2 rounded-lg shadow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-sm">username</span>
                                        <span className="text-xs text-gray-500">just now</span>
                                    </div>
                                    <p className="text-sm">text</p>
                                </div>

                                <div className="bg-white p-2 rounded-lg shadow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-sm">username</span>
                                        <span className="text-xs text-gray-500">just now</span>
                                    </div>
                                    <p className="text-sm">text</p>
                                </div>
                            </div>

                            <form className="flex items-center justify-between gap-2">
                                <input
                                    required
                                    className="w-full bg-[#e2e2e2] rounded px-2 py-1 border border-[#818181]"
                                    placeholder="Add a comment"
                                    type="text"
                                />
                                <button
                                    type="submit"
                                    className="px-5 py-1 rounded-lg bg-violet-700 text-white cursor-pointer hover:bg-violet-600"
                                >
                                    Send
                                </button>
                            </form>
                        </div> */}
                    </div>

                    {/* Recommended Images */}
                    <div className='w-full'>
                        <p className='text-lg font-semibold'>You may like:</p>
                        <div className="max-w-full columns-2 sm:columns-3 lg:columns-5 my-5 gap-4">
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
                <div>Rasm topilmadi</div>
            )}
        </div>
    );
};

export default SeeImage;
