import { svg_certified, svg_secure } from "./Svg_icon"

export function Account_img({ name_profil, access }) {
    return (
        <>
            <span className='pr-[2px] font-bold'>{name_profil}</span>
            {access && access !== "secure" && svg_certified}
            {access === "secure" && svg_secure}
        </>
    )
}

export function Account_src({ id_profil, classe }) {
    return (
        <>
            <div className="text-[#6E767D]">
                <a href="#" className={classe}>@{id_profil}</a>
                <span className='px-[4px]'>.</span>
                <a href="#">7m</a>
            </div>
        </>
    )
}