import { svgSetting } from "../ComponentGeneral/SvgIcon";
import AccountFollow from "../Account/AccountFollow";
import Search from "./Search";
import ShowMore from "./ShowMore";
import Trendsliste from "./Trendsliste";

export default function Trends() {
    return (
        <>
            <div className='hidden laptop laptop:block laptop:w-[50%] desktop:block desktop:w-[28%] ml-8 mr-2.5 mt-1.5'>
                <div className='sticky top-2'>
                    <Search />
                    <div className='rounded-2xl bg-gray-trend-700 mb-4'>
                        <div className='flex-between items-center py-3 px-4'>
                            <h3 className='text-xl font-extrabold'>Trends for you</h3>
                            {svgSetting}
                        </div>
                        <Trendsliste />
                        <Trendsliste />
                        <Trendsliste />
                        <Trendsliste />
                        <ShowMore color="gray-hover-trend" rounded="rounded-b-2xl" />
                    </div>
                    <div className='rounded-2xl bg-gray-trend-700'>
                        <h3 className='py-3 ml-4 text-xl font-extrabold'>Who to follow</h3>
                        <AccountFollow img="./src/assets/image 1 (1).svg" name="New York Times" profil="nytimes" color="gray-hover-trend" />
                        <AccountFollow img="./src/assets/image 1.svg" name="CNN" profil="CNN" color="gray-hover-trend" />
                        <AccountFollow img="./src/assets/Profile-Photo.svg" name="Twitter" profil="Twitter" color="gray-hover-trend" />
                        <ShowMore color="gray-hover-trend" rounded="rounded-b-2xl" />
                    </div>
                    <p className="text-center mt-4 text-gray-trend">Terms of science  Privaty Politic  Cookie Policy <br />Imprint  Ads  Info More...©2021 Twiter, Inc</p>
                </div>
            </div>
        </>
    )
}