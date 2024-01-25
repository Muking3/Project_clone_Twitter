import { svg_certified, svg_secure } from "./Svg_icon"

export function Account_img({ name_profil, access }) {
    return (
        <>
            <span className='pr-0.5 font-bold'>{name_profil}</span>
            {access && access !== "secure" && svg_certified}
            {access === "secure" && svg_secure}
        </>
    )
}

export function Account_src({ id_profil, classe, date, access }) {
    return (
        <div className="flex text-gray-trend">
            <span className={classe}>@{id_profil}</span>
            {access &&
                <div>
                    <span className='px-1'>.</span>
                    <span href="#">{date}</span>
                </div>
            }
        </div>
    )
}