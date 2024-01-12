import { Account_img, Account_src } from "./Account"
import Button from "./Button"
import Imagprofil from "./Imagprofil"

export default function Account_follow() {
    return (
        <>
            <div className='flex gap-[7%] px-[16px] py-[12px] text-[15px]'>
                <Imagprofil src_img="src/assets/image 1.svg" alt="Photo de profil" width="w-[13.9%]" height="h-[13.9%]" />
                <div className='w-[77.5%] flex items-center justify-between'>
                    <div>
                        <div className='flex items-center'>
                            <Account_img name_profil="CNN" access="ok" />
                        </div>
                        <Account_src id_profil="CNN" />
                    </div>
                    <Button width="w-[79px]" height="h-[31px]" fontsize="text-sm" opacity="text-black" text="Follow" bg='bg-white'/>
                </div>
            </div>
        </>
    )
}