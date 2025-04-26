import { App, P, PError } from "../main.js"
import { DarkMode } from "../utils/darkMode.js"

export function HeaderButtons(){
    const header = document.querySelector(".Header")
    const logout = header.querySelector(".Logout")
    const checkBox = header.querySelector("#checkBox")

    document.addEventListener('click', (event)=>{
        if (header.querySelector(".ProfileIcon").contains(event.target) && checkBox.checked){
            logout.style.display = "none"
        }else if (!logout.contains(event.target) && !checkBox.contains(event.target) && checkBox.checked){
            logout.style.display = "none"
            checkBox.checked = false
            PError("inside the Hidding Function of Checkbox", "red")
        }
        if (logout.contains(event.target) && event.target.classList.contains("logout")){
            localStorage.removeItem("token")
            P.user = {}
            delete P.user
            App()
        }
        if (logout.contains(event.target) && event.target.classList.contains("darkMode")){
            DarkMode(header)
        }
    })

    checkBox.addEventListener("change", ()=>{
        if (checkBox.checked){
            logout.style.display = "block"
            PError("inside the change addEventListener of Checkbox", "green")
        }else{
            logout.style.display = "none"
            PError("inside the change  to none addEventListener of Checkbox", "green")
        }
    })
}