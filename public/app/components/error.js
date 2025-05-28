export function errorBox(msg){
    const div = document.createElement("div")
    div.classList.add("ErrorBox")
    div.textContent = msg
    return div
}