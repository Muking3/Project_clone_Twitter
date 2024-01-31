import { svgSearch } from "../ComponentGeneral/SvgIcon"

export default function Search() {
    return (
        <>
            <div className='flex-items-center mb-[10px] bg-[#202327] h-[42px] rounded-[50px] px-[16px]'>
                <div className='w-[10%]'>{svgSearch}</div>
                <input type="search" placeholder="Search Twitter" className='w-[80%] bg-[#202327] outline-none placeholder:text-[#6E767D]' />
            </div>
        </>
    )
}