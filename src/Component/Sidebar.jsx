import Linknav from "./Linknav"
import { svg } from "./Svg_icon"

export default function Sidebar() {
    return (
        <>
            <div className='w-[22%] h-screen mt-[4px] mx-[12px]'>
                <div className='fixed'>
                    <ul>{
                        svg.map(nav => <Linknav key={nav.id} icon={nav.icon} text={nav.text} />)
                    }</ul>
                    <button type="button" className='py-[16px] text-[17px] font-bold rounded-[50px] bg-[#1D9BF0] w-[225px]'>Tweet</button>
                </div>
            </div>
        </>
    )
}