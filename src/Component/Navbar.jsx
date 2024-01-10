export default function Navbar({ children, label }) {
    return (
        <>
            <div className="flex gap-[20px] ml-[13px] mb-[21px] mt-[13px]">
                <div className="w-[25px]">{children}</div>
                <span>{label}</span>
            </div>
        </>
    )
}