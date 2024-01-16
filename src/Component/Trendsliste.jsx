import { svg_more_btn } from "./Svg_icon"

export default function Trendsliste() {
    return (
        <>
            <div className='flex-between my-[12px] hover:bg-[#1d1f23]'>
                <div className='ml-[16px]'>
                    <p className='text-[13px] text-[#6E767D]'>Trending in Turkey</p>
                    <p className='text-[15px] font-bold'>#SQUID</p>
                    <p className='text-[13px] text-[#6E767D]'>2,066 Tweets</p>
                </div>
                <div className='pr-[16px]'>{svg_more_btn}</div>
            </div>
        </>
    )
}