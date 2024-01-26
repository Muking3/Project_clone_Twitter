import { svg_more_btn } from "./Svg_icon"

export default function Trendsliste() {
    return (
        <>
            <div className='flex-between py-3 hover:bg-gray-hover-trend'>
                <div className='ml-4'>
                    <p className='text-tw'>Trending in Turkey</p>
                    <p className='text-tweet font-bold'>#SQUID</p>
                    <p className='text-tw'>2,066 Tweets</p>
                </div>
                <div className='pr-4'>{svg_more_btn}</div>
            </div>
        </>
    )
}