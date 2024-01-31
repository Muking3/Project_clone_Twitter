export function Follow({ num, text }) {
    return (
        <div className="flex-items-center gap-1 mt-3">
            <p className="text-white font-extrabold">{num}</p>
            <p className="text-gray-trend">{text}</p>
        </div>
    )
}

export function EditProfil({ names }) {
    return <input type="text" name={names} className="bg-black outline-placeholder border border-gray-border w-[99%] h-10 mb-4" 
    placeholder={names} minLength={5} maxLength={15} required/>
}