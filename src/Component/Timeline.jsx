import Button from "./Button"
import { ex_tweet } from "./Exemple_tweet"
import Imagprofil from "./Imagprofil"
import { svg_timeline } from "./Svg_iconTimeline"
import Tweet from "./Tweet"
import Twite_editor from "./Twite_editor"

export default function Timeline() {
    return (
        <>
            <div className='w-[47%] border-x-[1px] border-[#2F3336]'>
                <div className='flex justify-between border-b-[1px] border-[#2F3336] p-[16px]'>
                    <p className='font-bold'>Home</p>
                    <div className='flex items-center'>
                        <svg width="19" height="18" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.772 9.506L17.154 7.314L14.994 0.814003C14.892 0.507003 14.604 0.300003 14.282 0.300003C13.96 0.300003 13.672 0.507003 13.57 0.813003L11.41 7.313L5.79 9.505C5.503 9.617 5.313 9.895 5.313 10.205C5.313 10.515 5.503 10.79 5.791 10.903L11.411 13.095L13.571 19.595C13.673 19.901 13.961 20.108 14.283 20.108C14.605 20.108 14.893 19.901 14.995 19.595L17.155 13.095L22.775 10.903C23.062 10.791 23.252 10.513 23.252 10.203C23.252 9.893 23.062 9.618 22.774 9.506H22.772ZM16.282 11.826C16.074 11.906 15.912 12.076 15.842 12.286L14.282 16.981L12.722 12.288C12.652 12.078 12.492 11.908 12.284 11.826L8.129 10.206L12.283 8.584C12.491 8.504 12.653 8.334 12.723 8.122L14.283 3.429L15.843 8.123C15.913 8.335 16.073 8.505 16.281 8.586L20.436 10.206L16.281 11.828L16.282 11.826ZM6.663 2.812H4.783V1.05C4.783 0.636003 4.446 0.300003 4.033 0.300003C3.62 0.300003 3.283 0.636003 3.283 1.05V2.812H1.5C1.086 2.812 0.75 3.148 0.75 3.562C0.75 3.976 1.086 4.312 1.5 4.312H3.282V6.074C3.282 6.488 3.618 6.824 4.032 6.824C4.446 6.824 4.782 6.488 4.782 6.074V4.312H6.662C7.077 4.312 7.412 3.976 7.412 3.562C7.412 3.148 7.077 2.812 6.662 2.812H6.663ZM9.198 18.434H8.098V17.418C8.098 17.004 7.763 16.668 7.348 16.668C6.933 16.668 6.598 17.004 6.598 17.418V18.434H5.57C5.156 18.434 4.82 18.77 4.82 19.184C4.82 19.598 5.156 19.934 5.57 19.934H6.6V20.95C6.6 21.364 6.935 21.7 7.35 21.7C7.765 21.7 8.1 21.364 8.1 20.95V19.934H9.198C9.612 19.934 9.948 19.598 9.948 19.184C9.948 18.77 9.612 18.434 9.198 18.434Z" fill="#D9D9D9" />
                        </svg>
                    </div>
                </div>
                <div className='border-b-[1px] border-[#2F3336]'>
                    <div className='flex gap-[4%] px-[16px] py-[12px]'>
                        <Imagprofil src_img="src/assets/robbie-lens.png" />
                        <div className="w-[88%]">
                            <textarea className='bg-black mt-[10px] resize-none w-full outline-none placeholder:text-[#6E767D]' placeholder="What's happending?"></textarea>
                            <div className='flex justify-between items-center mt-[16px]'>
                                <div className='flex gap-[14px]'>
                                    {
                                        svg_timeline.map(editor => <Twite_editor key={editor.id} icon={editor.icon} />)
                                    }
                                </div>
                                <Button width="w-[79px]" height="h-[36px]" fontsize="text-[15px]" opacity="opacity-50" text="Tweet" />
                            </div>
                        </div>
                    </div>
                </div>
                <ul>{
                    ex_tweet.map(tweet => <Tweet key={tweet.id} name_profil={tweet.source}  id_profil={tweet.source} 
                        text={tweet.text}  src_imgpst={tweet.image} src_profil={tweet.author_avatar}
                        replie={tweet.replies} retweet={tweet.retweets} favorite={tweet.favorites}/>)
                }</ul>
                <Tweet />
            </div>
        </>
    )
}