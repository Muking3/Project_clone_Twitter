import { useContext, useEffect, useState } from "react"
import Account_follow from "./Account_follow"
import { ex_tweet } from "./Exemple_tweet"
import Show_more from "./Show_more"
import { svg_calendar } from "./Svg_icon"
import Tweet from "./Tweet/Tweet"
import { ProfilContext } from "./Sidebar"
import { useParams } from "react-router-dom"
import axios from "axios"
import { getRandomInt } from "./MathRandom"
import { formattedNumber } from "./Time"
import { TweetContext } from "../App"

export default function Profil({ userId }) {
    const users = useContext(ProfilContext);
    const { res_tweet, setRes_tweet } = useContext(TweetContext);
    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({})
    console.log(id);
    const filter_tweet = res_tweet.filter()
    useEffect(() => {
        id ? getUser(id) : setUser(users)
    }, [])

    const getUser = (id) => {
        try {
            axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/users/${id}`).then(res => {
                setUser(res.data);
                setIsLoading(false);
            })
        } catch (error) {
            setIsLoading(false);
            console.error("Probleme de connexion");
        }
    }

    if (isLoading) {
        return <span>Loading...</span>
    }
    return (
        <div className='w-full laptop:w-[47%]'>
            <p className='font-bold text-xl border-box p-4 bg-black'>Profil</p>
            <div className="border-box pb-20">
                <div className="absolute z-10 mt-32 ml-5">
                    <img src={user.thumbnailProfil} alt="Photo de profil" className="rounded-full border-4 border-black w-36 h-36" />
                </div>
                <div className={`w-full h-52 bg-gray-profil`}></div>
                <div className="w-11/12 m-auto pt-24">
                    <div className="mb-3">
                        <h3 className='text-xl font-extrabold'>{user.name}</h3>
                        <p className="text-gray-trend">@{user.username}</p>
                    </div>
                    <div className="flex-items-center gap-1">
                        {svg_calendar}
                        <p className="text-gray-trend">{user.Joined}</p>
                    </div>
                    <div className="flex gap-5">
                        <Follow num={formattedNumber(getRandomInt(0, 10000000))} text="Following" />
                        <Follow num={formattedNumber(getRandomInt(0, 10000000))} text="Followers" />
                    </div>
                </div>
            </div>
            <div className='border-box'>
                <h3 className='py-7 ml-4 text-xl font-extrabold'>You might like</h3>
                <Account_follow img="src/assets/image 1 (1).svg" name="New York Times" profil="nytimes" color="gray-hover" />
                <Account_follow img="src/assets/image 1.svg" name="CNN" profil="CNN" color="gray-hover" />
                <Account_follow img="src/assets/Profile-Photo.svg" name="Twitter" profil="Twitter" color="gray-hover" />
                <Account_follow img="src/assets/Profile-Photo.svg" name="X" profil="Twitter" color="gray-hover" />
                <Show_more color="gray-hover" />
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
