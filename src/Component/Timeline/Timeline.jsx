import { useContext, useEffect, useState } from "react"
import Button from "../ComponentGeneral/Button"
import { svgStars, svgTimeline } from "../ComponentGeneral/SvgIcon"
import Tweet from "../Tweet/Tweet"
import TwiteEditor from "./TwiteEditor"
import { Link } from "react-router-dom"
import axios from "axios"
import { TweetContext } from "../../App"

export default function Timeline() {
    const { profil, comment } = useContext(TweetContext);
    const [users, setUsers] = useState({})
    const findUser = profil.find(x => x.id === 3)
    useEffect(() => {
        setUsers(findUser)
    }, [])
    const { restweet, setRestweet } = useContext(TweetContext);
    const [ids, setIds] = useState(0)
    const [valuetext, setValuetext] = useState()
    const [src, setSrc] = useState()
    const handleFunction = (e) => {
        let imgs = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(imgs)
        reader.onload = function () {
            setSrc(reader.result)
        }
    }
    function handleTweet(e) {
        const valueTextarea = e.target.value.trim()
        valueTextarea.length === 0 || valueTextarea.length > 100 ? setValuetext() : setValuetext(e.target.value)
    }
    const handlePost = () => {
        const textWrite = {
            "userId": 3,
            "id": `S${ids}`,
            "title": "Samantha",
            "body": valuetext,
            "url": src,
            "thumbnailUrl": users.profil,
            "like": 999,
            "repost": 1000,
            "replies":comment,
        }
        if (valuetext || src) {
            try {
                axios.post("https://my-json-server.typicode.com/amare53/twiterdb/posts", textWrite)
                    .then(res => { setRestweet([res.data, ...restweet]) })
            } catch (error) {
                console.error('Erreur lors de la requête POST :', error);
            }
            setIds(x => x + 1)
            setValuetext("")
            setSrc("")
        }
    }
    return (
        <div className='w-full desktop:w-[47%]'>
            <div className="tablet:sticky tablet:top-0">
                <div className='flex-between border-box px-4 py-3 bg-black'>
                    <p className='font-bold text-xl'>Home</p>
                    <div className='flex-items-center'>{svgStars}</div>
                </div>
            </div>
            <div className='border-box px-4 py-3'>
                <div className='flex gap-4%'>
                    <Link to="/Project_clone_Twitter/username/3" className="w-8%">
                        <img src={users.profil} alt="Photo" className='rounded-full w-full h-auto' />
                    </Link>
                    <div className="w-88%">
                        <textarea className='bg-black laptop:mt-1.5 resize-none w-full outline-placeholder text-lg desktop:text-xl'
                            placeholder="What's happending?" value={valuetext} onChange={handleTweet}></textarea>
                        <img src={src} alt="" className="rounded-3xl w-auto mb-4 min-h-auto max-h-100" />
                        <div className='flex-between items-center'>
                            <div className='flex gap-3.5'>
                                {
                                    svgTimeline.map(editor => <TwiteEditor key={editor.id} icon={editor.icon} type={editor.id} handleFunction={handleFunction} />)
                                }
                            </div>
                            <Button width="w-20" height="h-9" fontsize="text-tweet"
                                opacity={valuetext || src ? "opacity-100" : "opacity-50"} text="Tweet" bg="bg-blue-tweet" handlefunction={handlePost} />
                        </div>
                    </div>
                </div>
            </div>
            <ul>{
                restweet.map(tweet => <Tweet key={tweet.id} userId={tweet.userId} text={tweet.body} srcImgpst={tweet.url} 
                    repost={tweet.repost} replie={tweet.replies} favorite={tweet.like} />)
            }</ul>
        </div>
    )
}
