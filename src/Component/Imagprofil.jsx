export default function Imagprofil({ src_img }) {
    return (
        <>
            <div className='w-[8%] h-[8%]'>
                <img src={src_img} alt="Photo de profil" className='rounded-[100%]' />
            </div>
        </>
    )
}