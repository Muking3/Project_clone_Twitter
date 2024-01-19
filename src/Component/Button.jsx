export default function Button({ text, opacity, width, fontsize, height, bg, handlefunction, classe }) {
    return <button type="submit" className={`rounded-full ${bg} ${width} ${height} ${fontsize} font-bold ${opacity} ${classe}`}
        onClick={handlefunction}>{text}</button>
}

