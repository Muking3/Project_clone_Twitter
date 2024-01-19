import Account_follow from "./Account_follow";
import Search from "./Search";
import Show_more from "./Show_more";
import Trendsliste from "./Trendsliste";

export default function Trends() {
    return (
        <>
            <div className='hidden laptop laptop:block laptop:w-[50%] desktop:block desktop:w-[28%] ml-[30px] mr-[10px] mt-[6px]'>
                <div className='sticky top-2'>
                    <Search />
                    <div className='rounded-[15px] bg-[#202327] mb-[16px]'>
                        <div className='flex-between items-center'>
                            <h3 className='my-[12px] ml-[16px] text-xl font-extrabold'>Trends for you</h3>
                        </div>
                        <Trendsliste />
                        <Trendsliste />
                        <Trendsliste />
                        <Trendsliste />
                        <Show_more />
                    </div>
                    <div className='rounded-[15px] bg-[#202327]'>
                        <h3 className='py-[12px] ml-[16px] text-xl font-extrabold'>Who to follow</h3>
                        <Account_follow img="src/assets/image 1 (1).svg" name="New York Times" profil="nytimes" />
                        <Account_follow img="src/assets/image 1.svg" name="CNN" profil="CNN" />
                        <Account_follow img="src/assets/Profile-Photo.svg" name="Twitter" profil="Twitter" />
                        <Show_more />
                    </div>
                    <p className="text-center mt-4 text-[#6E767D]">Terms of science  Privaty Politic  Cookie Policy <br />Imprint  Ads  Info More...©2021 Twiter, Inc</p>
                </div>
            </div>
        </>
    )
}