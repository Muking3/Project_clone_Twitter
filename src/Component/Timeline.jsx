import Button from "./Button"
import { ex_tweet } from "./Exemple_tweet"
import Imagprofil from "./Imagprofil"
import { svg_stars, svg_timeline } from "./Svg_icon"
import Tweet from "./Tweet"
import Twite_editor from "./Twite_editor"

export default function Timeline() {
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
                        <Imagprofil src_img="src/assets/Capture d’écran du 2024-01-11 22-28-49.png" width="w-[8%]" height="h-[8%]"/>
                        <div className="w-[88%]">
                            <textarea className='bg-black mt-[5px] resize-none w-full outline-none placeholder:text-[#6E767D] text-[20px]' placeholder="What's happending?"></textarea>
                            <div className='flex justify-between items-center mt-[16px]'>
                                <div className='flex gap-[14px]'>
                                    {
                                        svg_timeline.map(editor => <Twite_editor key={editor.id} icon={editor.icon} />)
                                    }
                                </div>
                                <Button width="w-[79px]" height="h-[36px]" fontsize="text-[15px]" opacity="opacity-50" text="Tweet" bg="bg-[#1D9BF0]"/>
                            </div>
                        </div>
                    </div>
                </div>
                <ul>{
                    ex_tweet.map(tweet => <Tweet key={tweet.id} name_profil={tweet.source} id_profil={tweet.source}
                        text={tweet.text} src_imgpst={tweet.image} src_profil={tweet.author_avatar}
                        replie={tweet.replies} retweet={tweet.retweets} favorite={tweet.favorites} />)
                }</ul>
                <Tweet />
            </div>
        </>
    )
}