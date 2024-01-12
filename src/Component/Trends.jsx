import Account_follow from "./Account_follow";
import Search from "./Search";
import Show_more from "./Show_more";
import Trendsliste from "./Trendsliste";

export default function Trends() {
    return (
        <>
            <div className='w-[28%] ml-[30px] mr-[10px] mt-[6px]'>
                <div className='sticky top-2'>
                    <Search />
                    <div className='rounded-[15px] bg-[#202327] mb-[16px]'>
                        <div className='flex justify-between items-center'>
                            <h3 className='my-[12px] ml-[16px] text-xl font-extrabold'>Trends for you</h3>
                            <div className='pr-[30px]'>
                                
                            </div>
                        </div>
                        <Trendsliste />
                        <Trendsliste />
                        <Trendsliste />
                        <Trendsliste />
                        <Show_more />
                    </div>
                    <div className='rounded-[15px] bg-[#202327]'>
                        <h3 className='py-[12px] ml-[16px] text-xl font-extrabold'>Who to follow</h3>
                        <Account_follow />
                        <Account_follow />
                        <Account_follow />
                        <Show_more />
                    </div>
                </div>
            </div>
        </>
    )
}