export default function Button({ text, opacity, width, fontsize, height, bg, handlefunction }) {
    return <button type="button" className={`rounded-[50px] ${bg} ${width} ${height} ${fontsize} font-bold ${opacity}`}
        onClick={handlefunction}>{text}</button>
}

