export default function Imagprofil({ width, height, src_img, tos }) {
    return (
        <div className={`${width} ${height}`}>
            <img src={src_img} alt="Photo de profil" className='rounded-full' />
        </div>
    )
}