export default function Reactbar({ number, children }) {
    return (
        <>
            <div className='flex w-[22.5%]'>
                {children}
                <span className='px-[12px]'>{number}</span>
            </div>
        </>
    )
}