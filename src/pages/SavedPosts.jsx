// react router dom 
import { Link } from "react-router-dom";

// data 
import { gallery } from "../data/data";

// assets 
import valentineImage from "../assets/valentine.png"

const SavedPosts = () => {

    return (
        <div className='w-[95%] min-h-screen mx-auto space-y-3'>
            <h1 className='text-xl'>Your saved posts</h1>

            {/* pictures  */}
            <div className="max-w-full columns-2 sm:columns-3 lg:columns-5 gap-4">
                {
                    gallery.map((img, index) => (
                        <div key={index} className=' rounded-lg overflow-hidden cursor-pointer mb-4 relative'>
                            <Link to={`/img/${img.id}`}>
                                <img
                                    className='w-full mx-auto'
                                    src={img.image}
                                    alt={img.tag}
                                />
                            </Link>
                            <div className="flex items-center gap-2 absolute bottom-0 bg-black/20 w-full p-1 text-white backdrop-blur-sm">
                                <img className="w-[30px] h-[30px] object-cover object-center rounded-full" src={valentineImage} alt="" />
                                <p>mukhammadali</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SavedPosts