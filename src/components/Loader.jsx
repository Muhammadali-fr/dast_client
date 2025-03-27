import CircleLoader from "react-spinners/CircleLoader";

const Loader = () => {
    return (
        <div className="flex items-center justify-center">
            <CircleLoader size={25} color="#ffffff" />
        </div>
    )
}

export default Loader