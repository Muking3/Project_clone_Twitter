import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { Account_img, Account_src } from "./Account"
import Button from "./Button"
import Imagprofil from "./Imagprofil"
import Linknav from "./Linknav"
import { svg, svg_more_btn } from "./Svg_icon"
import Timeline from "./Timeline"
import Profil from "./Profil"
import NotFound from "./Notfound"
import Pagedevelop from "./Pagedevelop"
import { createContext, useContext, useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { TweetContext } from "../App"

export const ProfilContext = createContext()
export default function Sidebar() {
    const { profil } = useContext(TweetContext);
    console.log(profil);
    if (profil.length === 0) {
        return <p>Loding...</p>
    }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const find_user = profil.find(x => x.id === 3);
        console.log(find_user);

        setUsers(find_user);
    }, [profil]);

    console.log(users);
    console.log(users);
    return (
        <ProfilContext.Provider value={{ users, setUsers }}>
            <Router>
                <div className="sticky top-0 bg-black tablet:block desktop:block tablet:w-[10%] desktop:w-[22%] tablet:mt-1 tablet:mx-3">
                    <div className="tablet:sticky top-4">
                        <ul className="flex justify-center tablet:flex-col gap-3 mb-3.5">{
                            svg.map(nav => <Linknav key={nav.id} icon={nav.icon} text={nav.text} type={nav.id} />)
                        }</ul>
                        <Button width="w-56" height="h-[52px]" fontsize="text-lg" text="Tweet" bg="bg-blue-tweet" classe="hidden desktop:block" />
                        <div className="fixed bottom-2 laptop:w-[5.5%] tablet:w-[8.5%] desktop:w-[272.4px]">
                            <Link to="/Project_clone_Twitter/3">
                                <div className='hidden tablet:flex gap-[7%] text-tweet hover:bg-gray-hover p-3 rounded-full'>
                                    <Imagprofil src_img={users.profil} alt="Photo de profil" width="w-[70%] desktop:w-[20%]" height="h-[70%] m-auto desktop:h-[20%]" />
                                    <div className='tablet:hidden w-full desktop:flex desktop:w-[77.5%] justify-between items-center'>
                                        <div>
                                            <div className='flex-items-center'>
                                                <Account_img name_profil={users.name} access="secure" />
                                            </div>
                                            <Account_src id_profil={users.username} access={false} />
                                        </div>
                                        {svg_more_btn}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path="/Project_clone_Twitter/" element={<Timeline />} />
                    <Route path="/Project_clone_Twitter/:id" element={<Profil />} />
                    <Route path="/Project_clone_Twitter/auther_pages" element={<Pagedevelop />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </ProfilContext.Provider>
    )
}