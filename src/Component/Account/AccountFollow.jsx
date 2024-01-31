import { AccountName, AccountSrc } from "./Account"
import Button from "../ComponentGeneral/Button"
import Imagprofil from "../ComponentGeneral/Imagprofil"

export default function AccountFollow({ img, profil, name, color }) {
    return (
        <>
            <div className={`flex gap-[7%] px-4 py-3 text-tweet hover:bg-${color}`}>
                <Imagprofil srcImg={img} width="w-[13.9%]" height="h-[13.9%]" />
                <div className='w-[77.5%] flex-items-center justify-between'>
                    <div>
                        <div className='flex-items-center'>
                            <AccountName nameProfil={name} access="ok" />
                        </div>
                        <AccountSrc idProfil={profil} />
                    </div>
                    <Button width="w-[79px]" height="h-[31px]" fontsize="text-sm" opacity="text-black" text="Follow" bg='bg-white' />
                </div>
            </div>
        </>
    )
}