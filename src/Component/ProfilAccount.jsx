import { useContext, useEffect, useState } from "react"
import Account_follow from "./Account_follow"
import Show_more from "./Show_more"
import Tweet from "./Tweet/Tweet"

export default function ProfilAccount({ userId }) {
    return (
        <div className='w-full laptop:w-[47%] border-x border-gray-border'>
            <p className='font-bold text-xl border-b border-gray-border p-4 bg-black'>Profil</p>
            <div className="absolute z-10 mt-[250px] ml-5">
                <img src="src/assets/voqA4xci_400x400.png" alt="Photo de profil" className="rounded-[100%] 
                border-[5px] border-black w-[150px] h-[150px]"/>
            </div>
            <img src="src/assets/james-harrison-vpOeXr5wmR4-unsplash.jpg" alt="Image d'un ordinateur portable avec du code z-0" />
            <div className="w-11/12 m-auto pt-24">
                <div className="mb-3">
                    <h3 className='text-xl font-extrabold'>{users}</h3>
                    <p className="text-gray-trend">@{users.username}</p>
                </div>
                <div className="flex-items-center gap-1">
                    {svg_calendar}
                    <p className="text-gray-trend">Joined January 2024</p>
                </div>
                <div className="flex gap-5">
                    <Follow num={5} text="Following" />
                    <Follow num={0} text="Followers" />
                </div>
            </div>
            <div className='border-y border-gray-border mt-7'>
                <h3 className='py-7 ml-4 text-xl font-extrabold'>You might like</h3>
                <Account_follow img="src/assets/image 1 (1).svg" name="New York Times" profil="nytimes" />
                <Account_follow img="src/assets/image 1.svg" name="CNN" profil="CNN" />
                <Account_follow img="src/assets/Profile-Photo.svg" name="Twitter" profil="Twitter" />
                <Show_more />
            </div>
            <ul>{
                filter_tweet.map(tweet => <Tweet key={tweet.id} name_profil={tweet.source} id_profil={tweet.author_name}
                    text={tweet.text} src_imgpst={tweet.image} src_profil={tweet.author_avatar}
                    replie={tweet.replies} retweet={tweet.retweets} favorite={tweet.favorites} verified={tweet.isVerified} />)
            }</ul>
        </div >
    )
}

function Follow({ num, text }) {
    return (
        <div className="flex-items-center gap-1 mt-3">
            <p className="text-white font-extrabold">{num}</p>
            <p className="text-gray-trend">{text}</p>
        </div>
    )
}