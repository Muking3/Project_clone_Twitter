import { Link } from "react-router-dom"

export default function Imagprofil({ width, height, src_img, tos }) {
    return (
        <>
            <div className={`${width} ${height}`}>
                <img src={src_img} alt="Photo de profil" className='rounded-full' />
            </div>
            
            {/* <Link to={tostttttttttttttttml veeeeeeeeeut dire} className={`${width}`}>
                <img src={src_img} alt="Photo de profil" className={`rounded-full w-full ${height}`} />
            </Link> */}
        </>
    )
}