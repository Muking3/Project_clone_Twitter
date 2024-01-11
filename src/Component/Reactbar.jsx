export default function Reactbar({ icon, type, r, t, f }) {
    let number = 0
    if (type === 0) {
        number = r
    }
    else if (type === 1) {
        number = t
    }
    else if (type === 2) {
        number = f
    }
    else {
        number = null
    }
    return (
        <>
            <div className='flex w-[22.5%] cursor-pointer'>
                <div>{icon}</div>
                <span className='px-[12px]'>{number}</span>
            </div>
        </>
    )
}