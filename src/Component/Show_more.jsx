export default function Show_more({ color, rounded }) {
    return (
        <>
            <div className={`py-4 hover:bg-${color} ${rounded}`}>
                <span className='text-blue-tweet font-bold ml-4'>Show more</span>
            </div>
        </>
    )
}