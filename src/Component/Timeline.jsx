import { useState } from "react"
import Button from "./Button"
import { ex_tweet } from "./Exemple_tweet"
import Imagprofil from "./Imagprofil"
import { svg_stars, svg_timeline } from "./Svg_icon"
import Tweet from "./Tweet"
import Twite_editor from "./Twite_editor"
import { Link } from "react-router-dom"

export default function Timeline() {
    const [tweet, setTweet] = useState(null)
    const [ids, setIds] = useState(0)
    const [valuetext, setValuetext] = useState()
    const handleTweet = (e) => {
        const value_textarea = e.target.value.trim()
        if (value_textarea.length === 0 || value_textarea.length > 100) {
            setValuetext()
        }
        else {
            setValuetext(e.target.value)
            const text_write = {
                "author_avatar": "src/assets/voqA4xci_400x400.png",
                "author_name": "Muking00#",
                "source": "Muking",
                "date": 650,
                "favorites": 62414,
                "id": `M${ids}`,
                "isVerified": true,
                "replies": "258",
                "retweets": 16811,
                "text": e.target.value,
            }
            setTweet(text_write)
        }
    }
    const handlePost = () => {
        if (valuetext) {
            ex_tweet.unshift(tweet)
            setIds(x => x + 1)
            setValuetext("")
        }
    }
    return (
        <div className='w-full desktop:w-[47%]'>
            <div className="sticky top-0">
                <div className='flex-between border-box bg-black'>
                    <p className='font-bold text-xl'>Home</p>
                    <div className='flex-items-center'>{svg_stars}</div>
                </div>
            </div>
            <div className='border-box'>
                <div className='flex gap-4%'>
                    {/* <Imagprofil src_img="src/assets/voqA4xci_400x400.png" width="w-8%" height="h-8%" /> */}
                    <Link to="/Project_clone_Twitter/username" className="w-8% h-8%">
                        <img src="src/assets/voqA4xci_400x400.png" alt="Photo de profil" className='rounded-full' />
                    </Link>
                    <div className="w-88%">
                        <textarea className='bg-black laptop:mt-1.5 resize-none w-full outline-placeholder text-lg desktop:text-xl'
                            placeholder="What's happending?" value={valuetext} onChange={handleTweet}></textarea>
                        <div className='flex-between items-center'>
                            <div className='flex gap-3.5'>
                                {
                                    svg_timeline.map(editor => <Twite_editor key={editor.id} icon={editor.icon} type={editor.id} />)
                                }
                            </div>
                            <Button width="w-20" height="h-9" fontsize="text-tweet"
                                opacity={valuetext ? "opacity-100" : "opacity-50"} text="Tweet" bg="bg-blue-tweet" handlefunction={handlePost} />
                        </div>
                    </div>
                </div>
            </div>
            <ul>{
                ex_tweet.map(tweet => <Tweet key={tweet.id} name_profil={tweet.source} id_profil={tweet.author_name}
                    text={tweet.text} src_imgpst={tweet.image} src_profil={tweet.author_avatar}
                    replie={tweet.replies} retweet={tweet.retweets} favorite={tweet.favorites} verified={tweet.isVerified} />)
            }</ul>
        </div>
    )
}
