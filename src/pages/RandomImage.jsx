import React, { useEffect, useState } from 'react'

// react - router - dom
import { useParams } from 'react-router-dom';

// data 
import { gallery } from '../data/data'

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
        <div className='w-[95%] min-h-screen mx-auto'>


            {/* view  */}
            <div>
                <img src={image} alt="image" />
            </div>
        </div >
    )
}

export default RandomImage