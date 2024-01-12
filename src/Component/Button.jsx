export default function Button({ text, opacity, width, fontsize, height, bg }) {
    return <button type="button" className={`rounded-[50px] ${bg} ${width} ${height} ${fontsize} font-bold ${opacity}`}>{text}</button>
}

