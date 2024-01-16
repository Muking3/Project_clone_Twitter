import { Link } from "react-router-dom";

export default function Linknav({ icon, text, functionnav, type, way }) {
    if (type === 0 || type === 1) {
        way = '/Project_clone_Twitter/'
    }
    else if (type === 7) {
        way = '/Project_clone_Twitter/username'
    }
    return (
        <Link to={way} className="m-auto desktop:m-0">
            <div className="w-12 h-12 desktop:w-56 flex-items-center gap-5 desktop:ml-[13px] px-3 hover:bg-gray-hover rounded-full" onClick={functionnav}>
                {icon}
                <span className={`text-page font-bold hidden desktop:block`}>{text}</span>
            </div>
        </Link>
    )
}
