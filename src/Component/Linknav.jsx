import { Link } from "react-router-dom";

export default function Linknav({ icon, text, functionnav, type, way, hide }) {
    if (type === 0 || type === 1) {
        way = '/Project_clone_Twitter/'
    }
    else if (type === 2 || type === 3 || type === 4 || type === 5 || type === 6 || type === 8) {
        way = '/Project_clone_Twitter/auther_pages'
        hide = "hidden"
    }
    else if (type === 7) {
        way = '/Project_clone_Twitter/username'
    }
    return (
        <Link to={way} className={`m-auto desktop:m-0 ${hide} tablet:block`}>
            <div className="w-12 h-12 desktop:w-56 flex-items-center gap-5 desktop:ml-[13px] px-3 hover:bg-gray-hover rounded-full" onClick={functionnav}>
                {icon}
                <span className={`text-page font-bold hidden desktop:block`}>{text}</span>
            </div>
        </Link>
    )
}
