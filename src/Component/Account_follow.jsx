import { Account_img, Account_src } from "./Account"
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
                    <button type="button" className='rounded-[50px] bg-white w-[79px] h-[31px] text-sm text-black'>Follow</button>
                </div>
            </div>
        </>
    )
}