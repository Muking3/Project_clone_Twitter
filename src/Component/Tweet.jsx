import { Account_img, Account_src } from "./Account"
import Imagprofil from "./Imagprofil"
import Reactbar from "./Reactbar"
import { svg_react } from "./Svg_icon"


export default function Tweet({ src_profil, name_profil, id_profil, text, src_imgpst, replie, retweet, favorite }) {
    return (
        <>
            {id_profil && <div className='border-b-[1px] border-[#2F3336]'>
                <div className='flex gap-[4%] px-[16px] py-[12px] text-[15px]'>
                    <Imagprofil src_img={src_profil} width="w-[8%]" height="h-[8%]" />
                    <div className='w-[88%]'>
                        <div className='flex items-center'>
                            <Account_img name_profil={name_profil} access="ok"/>
                            <Account_src id_profil={id_profil} classe='px-[4px]' />
                        </div>
                        <p className='pt-[5px]'>{text}</p>
                        <div className="mt-[12px]">
                            {src_imgpst && <img src={src_imgpst} alt="Image du poste" className="rounded-[10px] max-w-auto min-w-[50%] min-h-[200px] max-h-[400px]" />}
                        </div>
                        <div className='flex pt-[12px] gap-[10%]'>
                            {
                                svg_react.map(react => <Reactbar key={react.id} icon={react.icon} type={react.id} r={replie} t={retweet} f={favorite} />)
                            }
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}