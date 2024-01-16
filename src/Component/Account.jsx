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
            <div className="text-gray-trend">
                <span href="#" className={classe}>@{id_profil}</span>
                <span className='px-1'>.</span>
                <span href="#">7m</span>
            </div>
        </>
    )
}