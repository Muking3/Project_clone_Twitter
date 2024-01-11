export default function Button({text, opacity, width, fontsize, height}){
    return  <button type="button" className={`rounded-[50px] bg-[#1D9BF0] ${width} ${height} ${fontsize} font-bold ${opacity}`}>{text}</button>
}