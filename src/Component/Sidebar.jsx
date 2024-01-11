import { Account_img, Account_src } from "./Account"
import Button from "./Button"
import Imagprofil from "./Imagprofil"
import Linknav from "./Linknav"
import { svg } from "./Svg_icon"

export default function Sidebar() {
    return (
        <>
            <div className='w-[22%] mt-[4px] mx-[12px]'>
                <div className='sticky top-4'>
                    <ul>{
                        svg.map(nav => <Linknav key={nav.id} icon={nav.icon} text={nav.text} />)
                    }</ul>
                    <Button width="w-[225px]" height="h-[52px]" fontsize="text-[17px]" text="Tweet" />
                    <div className='flex gap-[7%] mb-[12px] mt-[60%] text-[15px] w-full'>
                        <Imagprofil src_img="src/assets/Capture d’écran du 2024-01-11 22-28-49.png" alt="Photo de profil" width="w-[20%]" height="h-[20%]" />
                        <div className='w-[77.5%] flex justify-between items-center'>
                            <div>
                                <div className='flex items-center'>
                                    <Account_img name_profil="CNN" access=""/>
                                </div>
                                <Account_src id_profil="Muking00#" />
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#6E767D" />
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#6E767D" />
                                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#6E767D" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}