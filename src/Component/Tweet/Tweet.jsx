import Reactbar from "./Reactbar"
import { svg_react } from "../Svg_icon"
import { TweetTitle } from "./TweetTitle"
import { TweetPhoto } from "./TweetPhoto"
import { useContext, useEffect, useState } from "react"
import { TweetContext } from "../../App"

export default function Tweet({ userId, text, src_imgpst, replie, repost, favorite, verified }) {
    const { profil } = useContext(TweetContext);
    const [users, setUsers] = useState({})
    const find_user = profil.find(x => x.id === userId)
    useEffect(() => {
        setUsers(find_user)
    }, [])
    return (
        <div className='border-x border-b border-gray-border hover:bg-gray-hover'>
            <div className='flex gap-4% px-4 py-3'>
                <TweetPhoto userId={userId} users={users} />
                <div className='w-88%'>
                    <TweetTitle userId={userId} verified={verified} users={users} />
                    <p className='pt-1'>{text}</p>
                    <div className="mt-3">
                        {src_imgpst && <img src={src_imgpst} alt="Image du poste"
                            className="rounded-3xl max-w-auto min-w-[50%] min-h-52 max-h-100" />}
                    </div>
                    <div className='flex pt-3 gap-10%'>
                        {
                            svg_react.map(react => <Reactbar key={react.id} icon={react.icon} type={react.id}
                                rePlie={replie} repost={repost} faVorite={favorite} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}