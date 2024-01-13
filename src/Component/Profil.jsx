import { ex_tweet } from "./Exemple_tweet"
import { svg_stars } from "./Svg_icon"
import Tweet from "./Tweet"

export default function Profil() {
    return (
        <>
            <div className='w-[47%] border-x-[1px] border-[#2F3336]'>
                <div className='flex justify-between border-b-[1px] border-[#2F3336] p-[16px] bg-black'>
                    <p className='font-bold text-[20px]'>Profil</p>
                </div>
                <ul>{
                    ex_tweet.map(tweet => <Tweet key={tweet.id} name_profil={tweet.source} id_profil={tweet.author_name}
                        text={tweet.text} src_imgpst={tweet.image} src_profil={tweet.author_avatar}
                        replie={tweet.replies} retweet={tweet.retweets} favorite={tweet.favorites} verified={tweet.isVerified} />)
                }</ul>
            </div>
        </>
    )
}