export default function TwiteEditor({ icon, type, handleFunction }) {
    let pass = ""
    if (type === 0) {
        pass = "input_img"
    }
    return (
        <>
            <label htmlFor={pass} className="cursor-pointer">{icon}</label>
            <input type="file" id="input_img" accept="image/*" onChange={handleFunction} className="hidden" />
        </>
    )
}

