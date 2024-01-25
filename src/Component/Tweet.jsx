import { Link } from "react-router-dom"
import { Account_img, Account_src } from "./Account"
import Reactbar from "./Reactbar"
import { svg_react } from "./Svg_icon"
import { Alltime } from "./Time"

export default function Tweet({ src_profil, name_profil, id_profil, text, src_imgpst, replie, retweet, favorite, verified, to, date }) {
    id_profil === "Muking00#" ? to = '/Project_clone_Twitter/username' : to = '/Project_clone_Twitter/auther_pages'
    return (
        <div className='border-x border-b border-gray-border hover:bg-gray-hover'>
            <div className='flex gap-4% px-4 py-3'>
                <Link to={to} className="w-8% h-8%">
                    <img src={src_profil} alt="Photo de profil" className='rounded-full' />
                </Link>
                <div className='w-88%'>
                    <Link to={to}>
                        <div className='flex-items-center'>
                            <Account_img name_profil={name_profil} access={verified} />
                            <Account_src id_profil={id_profil} date={Alltime(date)} access={true} classe='px-1' />
                        </div>
                    </Link>
                    <p className='pt-1'>{text}</p>
                    <div className="mt-3">
                        {src_imgpst && <img src={src_imgpst} alt="Image du poste" 
                        className="rounded-3xl max-w-auto min-w-[50%] min-h-52 max-h-100" />}
                    </div>
                    <div className='flex pt-3 gap-10%'>
                        {
                            svg_react.map(react => <Reactbar key={react.id} icon={react.icon} type={react.id}
                            rePlie={replie} reTweet={retweet} faVorite={favorite} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}