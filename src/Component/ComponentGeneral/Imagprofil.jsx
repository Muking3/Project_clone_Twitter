export default function Imagprofil({ width, height, srcImg, tos }) {
    return (
        <div className={`${width} ${height}`}>
            <img src={srcImg} alt="Photo" className='rounded-full' />
        </div>
    )
}