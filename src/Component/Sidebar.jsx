import { Account_img, Account_src } from "./Account"
import Button from "./Button"
import Imagprofil from "./Imagprofil"
import Linknav from "./Linknav"
import { svg, svg_more_btn } from "./Svg_icon"

export default function Sidebar() {
    return (
        <>
            <div className='w-[22%] mt-[4px] mx-[12px]'>
                <div className='sticky top-4'>
                    <ul>{
                        svg.map(nav => <Linknav key={nav.id} icon={nav.icon} text={nav.text} />)
                    }</ul>
                    <Button width="w-[225px]" height="h-[52px]" fontsize="text-[17px]" text="Tweet" bg="bg-[#1D9BF0]" />
                    <div className="fixed bottom-2 w-[272.4px]">
                        <div className='flex gap-[7%] text-[15px]'>
                            <Imagprofil src_img="src/assets/Capture d’écran du 2024-01-11 22-28-49.png" alt="Photo de profil" width="w-[20%]" height="h-[20%]" />
                            <div className='w-[77.5%] flex justify-between items-center'>
                                <div>
                                    <div className='flex items-center'>
                                        <Account_img name_profil="CNN" access="" />
                                    </div>
                                    <Account_src id_profil="Muking00#" />
                                </div>
                                {svg_more_btn}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}