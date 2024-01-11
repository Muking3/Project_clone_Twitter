import Imagprofil from "./Imagprofil"
import Tweet from "./Tweet"

export default function Timeline() {
    return (
        <>
            <div className='w-[47%] border-r-[1px] border-l-[1px] border-[#2F3336]'>
                <div className='flex justify-between border-b-[1px] border-[#2F3336]'>
                    <p className='m-[15px] font-bold'>Home</p>
                    <img src="src/assets/Top-Tweets.svg" alt="Etoile" className='mr-[15px]' />
                </div>
                <div className='border-b-[1px] border-[#2F3336]'>
                    <div className='flex gap-[4%] items-center pl-[15px] pr-[15px]'>
                        <Imagprofil src_img="src/assets/robbie-lens.png" />
                        <textarea className='w-[88%] bg-black h-[25px] resize-none outline-none' placeholder="What's happending?"></textarea>
                    </div>
                    <div className='flex justify-between pl-[15px] pr-[15px] mt-[35px] mb-[4px]'>
                        <div className='flex ml-[60px]'>
                            <img src="src/assets/icon_img.svg" alt="" />
                            <img src="src/assets/icon_gif.svg" alt="" />
                            <img src="src/assets/icon.svg" alt="" />
                            <img src="src/assets/icon_emoji.svg" alt="" />
                            <img src="src/assets/icon_calendrier.svg" alt="" />
                        </div>
                        <button type="button" className='rounded-[50px] bg-[#1D9BF0] w-[79px] text-[15px] font-bold opacity-50'>Tweet</button>
                    </div>
                </div>
                <Tweet />
            </div>
        </>
    )
}