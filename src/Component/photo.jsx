export function PHOTO(file) {
    let fileType = file.type
    let fileSource = ""
    let tableRegex = /png$|jpe?g$/
    if (!tableRegex.test(fileType)) {
        alert("Format de l'image incorrect")
    } else if (file.size > 5242880) {
        alert("Taille de l'image depasse 5Mo")
    } else {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            fileSource = reader.result
        }
    }
    return fileSource
}