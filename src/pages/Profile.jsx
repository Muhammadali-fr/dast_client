import { Link } from 'react-router-dom'

// assets 
import SettingsImg from "../assets/profile/settings.png"
import BgImg from "../assets/profile/bg.png"
import ValentineImg from "../assets/valentine.png"
import TrueImg from "../assets/true.png"
import valentineImage from "../assets/valentine.png"

// data 
import { gallery } from "../data/data"

const Profile = () => {
    return (
        <div className='w-[95%] mx-auto py-2'>

            {/* bg-pic  */}
            <div className='w-full h-[178px] bg-[#e3e3e3] rounded-md relative border border-[#BABABA] bg-cover bg-center' style={{ backgroundImage: `url(${BgImg})` }}>

                {/* settings  */}
                <div className='w-[42px] h-[42px] bg-white flex items-center justify-center rounded-lg border border-[#b8b8b8] absolute right-5 top-5 cursor-pointer'>
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
        </div>
    )
}

export default Profile