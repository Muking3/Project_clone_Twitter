import { useState } from "react"
import Button from "./Button"
import { ex_tweet } from "./Exemple_tweet"
import { svg_stars, svg_timeline } from "./Svg_icon"
import Tweet from "./Tweet"
import Twite_editor from "./Twite_editor"
import { Link } from "react-router-dom"

export default function Timeline() {
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
        const value_textarea = e.target.value.trim()
        value_textarea.length === 0 || value_textarea.length > 100 ? setValuetext() : setValuetext(e.target.value)
    }
    const handlePost = () => {
        const text_write = {
            "author_avatar": "src/assets/voqA4xci_400x400.png",
            "author_name": "Muking00#",
            "source": "Muking",
            "date": 650,
            "favorites": 0,
            "id": `M${ids}`,
            "isVerified": true,
            "replies": 258,
            "retweets": 16811,
            "text": valuetext,
            "image": src,
        }
        if (valuetext || src) {
            ex_tweet.unshift(text_write)
            setIds(x => x + 1)
            setValuetext("")
            setSrc("")
            console.log(ex_tweet);
        }
    }
    return (
        <div className='w-full desktop:w-[47%]'>
            <div className="tablet:sticky tablet:top-0">
                <div className='flex-between border-box bg-black'>
                    <p className='font-bold text-xl'>Home</p>
                    <div className='flex-items-center'>{svg_stars}</div>
                </div>
            </div>
            <div className='border-box'>
                <div className='flex gap-4%'>
                    <Link to="/Project_clone_Twitter/username" className="w-8% h-8%">
                        <img src="src/assets/voqA4xci_400x400.png" alt="Photo de profil" className='rounded-full' />
                    </Link>
                    <div className="w-88%">
                        <textarea className='bg-black laptop:mt-1.5 resize-none w-full outline-placeholder text-lg desktop:text-xl'
                            placeholder="What's happending?" value={valuetext} onChange={handleTweet}></textarea>
                        <img src={src} alt="" className="rounded-3xl w-auto mb-4 min-h-auto max-h-[400px]" />
                        <div className='flex-between items-center'>
                            <div className='flex gap-3.5'>
                                {
                                    svg_timeline.map(editor => <Twite_editor key={editor.id} icon={editor.icon} type={editor.id} handleFunction={handleFunction} />)
                                }
                            </div>
                            <Button width="w-20" height="h-9" fontsize="text-tweet"
                                opacity={valuetext || src ? "opacity-100" : "opacity-50"} text="Tweet" bg="bg-blue-tweet" handlefunction={handlePost} />
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
