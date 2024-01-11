import Button from "./Button"
import Linknav from "./Linknav"
import { svg } from "./Svg_icon"

export default function Sidebar() {
    return (
        <>
            <div className='w-[22%] mt-[4px] mx-[12px]'>
                <div className='fixed'>
                    <ul>{
                        svg.map(nav => <Linknav key={nav.id} icon={nav.icon} text={nav.text} />)
                    }</ul>
                    <Button width="w-[225px]" height="h-[52px]" fontsize="text-[17px]" text="Tweet" />
                </div>
            </div>
        </>
    )
}