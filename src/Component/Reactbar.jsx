import { useState } from "react"
import { svg_react_color } from "./Svg_icon"
import { formattedNumber } from "./Time"

export default function Reactbar({ icon, type, rePlie, repost, faVorite, number }) {
    if (type === 0) { number = rePlie }
    else if (type === 1) { number = faVorite }
    else if (type === 2) { number = repost }
    else { number = null }
    const [count, setCount] = useState(number)
    const [decount, setDecount] = useState(true)
    const functionreact = () => {
        if (number === faVorite) {
            if (decount) {
                setCount(x => x + 1)
                setDecount(false)
            }
            else {
                setCount(x => x - 1)
                setDecount(true)
            }
        }
    }
    return (
        <>
            <div className='flex-items-center w-[22.5%] cursor-pointer' onClick={functionreact}>
                <div>
                    {decount ? icon : svg_react_color[0].icons}
                </div>
                <span className={"px-3 " + (decount ? "text-gray-trend": "text-pink-like")}>{formattedNumber(count)}</span>
            </div>
        </>
    )
}