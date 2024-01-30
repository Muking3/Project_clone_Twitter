import { useContext, useEffect, useState } from "react"
import Account_follow from "./Account/Account_follow"
import Show_more from "./Trends/Show_more"
import { svg_calendar } from "./Svg_icon"
import Tweet from "./Tweet/Tweet"
import { useParams } from "react-router-dom"
import { getRandomInt } from "./MathRandom"
import { TweetContext } from "../App"
import Button from "./Button"
import { formattedNumber } from "./Formatnum"

export default function Profil() {
    const { restweet, profil, setProfil } = useContext(TweetContext);
    let { id } = useParams();
    const [user, setUser] = useState({})
    const filter_tweet = restweet.filter(x => x.userId === parseInt(id))
    const find_user = profil.find(x => x.id === parseInt(id))
    useEffect(() => {
        id ? setUser(find_user) : setUser(user)
    }, [id])
    const [showDialog, setShowDialog] = useState(false);
    const openDialog = () => {
        setShowDialog(true);
    };
    const closeDialog = () => {
        setShowDialog(false);
    };
    const handleEdit = (e) => {
        e.preventDefault()
        let data = new FormData(e.target)
        const newProfil = Object.fromEntries(data)
        setShowDialog(false);
        newProfil.profil = "https://via.placeholder.com/150/392537"
        newProfil.thumbnailProfil = "https://via.placeholder.com/150/392537"
        newProfil.Joined = "Joined March 2014"
        newProfil.id = 3
        const updatedProfil = [...profil];
        updatedProfil.splice(2, 1, newProfil);
        setProfil(updatedProfil);
    }
    return (
        <>
            <div className='w-full laptop:w-[47%]'>
                <p className='font-bold text-xl border-box p-4 bg-black'>Profil</p>
                <div className="border-box pb-20">
                    <div className="absolute z-10 mt-32 ml-5">
                        <img src={user.thumbnailProfil} alt="Photo de profil" className="rounded-full border-4 border-black w-36 h-36" />
                    </div>
                    <div className={`w-full h-52 bg-gray-profil`}></div>
                    <div className="w-full flex justify-end h-16">
                        {id === "3" &&
                            <Button classe="border border-gray-border m-4" padding="px-4" bg="bg-black hover:bg-[#181919]" text="Edit profile" handlefunction={openDialog} />
                        }
                    </div>
                    <div className="w-11/12 m-auto pt-6">
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
                <h2 className="py-4 text-center font-extrabold border-box">Posts</h2>
                {filter_tweet.length === 0 && < div className='border-box'>
                    <h3 className='py-7 ml-4 text-xl font-extrabold'>You might like</h3>
                    <Account_follow img="src/assets/image 1 (1).svg" name="New York Times" profil="nytimes" color="gray-hover" />
                    <Account_follow img="src/assets/image 1.svg" name="CNN" profil="CNN" color="gray-hover" />
                    <Account_follow img="src/assets/Profile-Photo.svg" name="Twitter" profil="Twitter" color="gray-hover" />
                    <Account_follow img="src/assets/Profile-Photo.svg" name="X" profil="Twitter" color="gray-hover" />
                    <Show_more color="gray-hover" />
                </div>}
                <ul>{
                    filter_tweet.map(tweet => <Tweet key={tweet.id} userId={tweet.userId} text={tweet.body} src_imgpst={tweet.url} repost={tweet.repost} favorite={tweet.like} />)
                }</ul>
            </div >
            {showDialog && (
                <div className="w-full h-full fixed bg-gray-edit z-40 left-0 top-0 flex justify-center items-center">
                    <span className="absolute top-2 right-2 cursor-pointer text-white text-3xl" onClick={closeDialog}>&times;</span>
                    <form className="bg-black laptop:rounded-3xl h-full w-[99%] laptop:w-[30%] laptop:h-auto p-4" onSubmit={handleEdit}>
                        <EditProfil names="name" />
                        <EditProfil names="username" />
                        <button type="submit" className="w-[79px] h-[31px] bg-white rounded-full text-black mt-4">Save</button>
                    </form>
                </div>
            )
            }
        </>
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

function EditProfil({ names }) {
    return <input type="text" name={names} className="bg-black outline-placeholder border border-gray-border w-[99%] h-10 mb-4" placeholder={names} maxLength={15} required />
}