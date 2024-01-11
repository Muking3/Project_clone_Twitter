export default function Imagprofil({width, height, src_img }) {
    return (
        <>
            <div className={`${width} ${height}`}>
                <img src={src_img} alt="Photo de profil" className='rounded-[100%]' />
            </div>
        </>
    )
}