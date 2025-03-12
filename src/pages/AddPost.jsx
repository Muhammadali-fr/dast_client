// react router dom 
import { Link } from "react-router-dom";

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

                <div>
                    {/* form  */}
                    <form>

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