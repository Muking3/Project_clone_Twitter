import { useState } from "react"

export default function Reactbar({ icon, type, rePlie, reTweet, faVorite, number }) {
    if (type === 0) {
        number = rePlie
    }
    else if (type === 1) {
        number = faVorite
    }
    else if (type === 2) {
        number = reTweet
    }
    else {
        number = null
    }
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
            <div className='flex w-[22.5%] cursor-pointer' onClick={functionreact}>
                <div>{icon}</div>
                <span className='px-[12px] text-[#6E767D]'>{count}</span>
            </div>
        </>
    )
}