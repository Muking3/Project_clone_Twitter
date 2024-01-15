import { Link } from "react-router-dom";

export default function Linknav({ icon, text, functionnav, type, way, fontbold }) {
    if (type === 0 || type === 1) {
        way = '/'
    }
    else if (type === 7) {
        way = '/username'
    }
    return (
        <>
            <Link to={way}>
                <div className="flex items-center gap-[20px] ml-[13px] px-[12px] py-[10px] 
            w-auto cursor-pointer hover:bg-[#202327] rounded-[50px]" onClick={functionnav}>
                    <div className="w-[25px]">{icon}</div>
                    <span className={`text-[19px] font-bold`}>{text}</span>
                </div>
            </Link>
        </>
    )
}
