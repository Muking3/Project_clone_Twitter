import { useState } from "react"
import { svgReactColor } from "../ComponentGeneral/SvgIcon"
import { formattedNumber } from "../ComponentGeneral/Formatnum"

export default function Reactbar({ icon, type, replie, repost, favorite, number }) {
    if (type === 0) { number = replie }
    else if (type === 2) { number = favorite }
    else if (type === 1) { number = repost }
    else { number = null }
    const [count, setCount] = useState(number)
    const [decount, setDecount] = useState(true)
    const functionreact = () => {
        if (type === 2) {
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
                    {decount ? icon : svgReactColor[0].icons}
                </div>
                <span className={"px-3 " + (decount ? "text-gray-trend" : "text-pink-like")}>{formattedNumber(count)}</span>
            </div>
        </>
    )
}