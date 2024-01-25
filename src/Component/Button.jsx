export default function Button({ text, opacity, width, fontsize, height, bg, handlefunction, classe, type_btn }) {
    return <button type="button" className={`rounded-full ${bg} ${width} ${height} ${fontsize} font-bold ${opacity} ${classe}`}
        onClick={handlefunction}>{text}</button>
}

