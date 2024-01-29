export default function Button({ text, opacity, width, fontsize, height, bg, handlefunction, classe, padding, type_btn }) {
    return <button type="button" className={`rounded-full ${bg} ${width} ${height}  ${padding} ${fontsize} font-bold ${opacity} ${classe}`}
        onClick={handlefunction}>{text}</button>
}

