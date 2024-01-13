import { createContext, useContext, useState } from "react"
import Button from "./Button"
import { ex_tweet } from "./Exemple_tweet"
import Imagprofil from "./Imagprofil"
import { svg_stars, svg_timeline } from "./Svg_icon"
import Tweet from "./Tweet"
import Twite_editor from "./Twite_editor"

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
                "author_avatar": "src/assets/Capture d’écran du 2024-01-11 22-28-49.png",
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
        <>
            <div className='w-[47%] border-x-[1px] border-[#2F3336]'>
                <div className="sticky top-0">
                    <div className='flex justify-between border-b-[1px] border-[#2F3336] p-[16px] bg-black'>
                        <p className='font-bold text-[20px]'>Home</p>
                        <div className='flex items-center'>{svg_stars}</div>
                    </div>
                </div>
                <div className='border-b-[1px] border-[#2F3336]'>
                    <div className='flex gap-[4%] px-[16px] py-[12px]'>
                        <Imagprofil src_img="src/assets/Capture d’écran du 2024-01-11 22-28-49.png" width="w-[8%]" height="h-[8%]" />
                        <div className="w-[88%]">
                            <textarea className='bg-black mt-[5px] resize-none w-full outline-none placeholder:text-[#6E767D] text-[20px]'
                                placeholder="What's happending?" value={valuetext} onChange={handleTweet}></textarea>
                            <div className='flex justify-between items-center mt-[16px]'>
                                <div className='flex gap-[14px]'>
                                    {
                                        svg_timeline.map(editor => <Twite_editor key={editor.id} icon={editor.icon} type={editor.id} />)
                                    }
                                </div>
                                <Button width="w-[79px]" height="h-[36px]" fontsize="text-[15px]" opacity={valuetext ? "opacity-100" : "opacity-50"} text="Tweet" bg="bg-[#1D9BF0]" handlefunction={handlePost} />
                            </div>
                        </div>
                    </div>
                </div>
                <ul>{
                    ex_tweet.map(tweet => <Tweet key={tweet.id} name_profil={tweet.source} id_profil={tweet.author_name}
                        text={tweet.text} src_imgpst={tweet.image} src_profil={tweet.author_avatar}
                        replie={tweet.replies} retweet={tweet.retweets} favorite={tweet.favorites} verified={tweet.isVerified}/>)
                }</ul>
                <Tweet />
            </div>
        </>
    )
}