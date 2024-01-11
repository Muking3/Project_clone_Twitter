export default function Linknav({ icon, text }) {
    return (
        <>
            <div className="flex items-center gap-[20px] ml-[13px] px-[12px] mb-[21px] mt-[13px] h-[50px] w-auto cursor-pointer hover:bg-[#202327] rounded-[50px]">
                <div className="w-[25px]">{icon}</div>
                <span className="text-[19px] font-bold">{text}</span>
            </div>
        </>
    )
}