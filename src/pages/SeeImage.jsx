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

                    {/* main image  */}
                    <div>
                        <img className='w-[400px]' src={mainImg.image} alt="" />
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
                <div>Rasm topilmadi</div>
            )}
        </div>
    );
};

export default SeeImage;
