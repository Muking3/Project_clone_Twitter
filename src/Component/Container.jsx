export default function Container({ width, bgc, children}) {
    return (
        <>
            <div className={`${width} ${bgc} h-screen`}>{children}</div>
        </>
    )
}
