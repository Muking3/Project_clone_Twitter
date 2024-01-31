import { svgCertified, svgSecure } from "../ComponentGeneral/SvgIcon"
import { time } from "../ComponentGeneral/Time"

export function AccountName({ nameProfil, access }) {
    return (
        <>
            <span className='pr-0.5 font-bold'>{nameProfil}</span>
            {access && access !== "secure" && svgCertified}
            {access === "secure" && svgSecure}
        </>
    )
}

export function AccountSrc({ idProfil, classe, access }) {
    return (
        <div className="flex text-gray-trend">
            <span className={classe}>@{idProfil}</span>
            {access &&
                <div>
                    <span className='px-1'>.</span>
                    <span href="#">{time}</span>
                </div>
            }
        </div>
    )
}