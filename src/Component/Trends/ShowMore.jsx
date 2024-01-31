export default function ShowMore({ color, rounded }) {
    return (
        <div className={`py-4 hover:bg-${color} ${rounded}`}>
            <span className='text-blue-tweet font-bold ml-4'>Show more</span>
        </div>

    )
}