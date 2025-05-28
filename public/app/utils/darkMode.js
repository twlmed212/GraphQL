
export function DarkMode(header, status = false){
    const body = document.querySelector("body")
    if (status){
        body.classList.add("DarkMode")
        return
    }
    body.classList.toggle("DarkMode")
    const ModeSelected = header.querySelector(".darkMode")
    if (body.classList.contains("DarkMode")){
        ModeSelected.textContent = "LightMode"
        localStorage.setItem("darkMode", "true")
    }else{
        ModeSelected.textContent = "DarkMode"
        localStorage.setItem("darkMode", "false")
    }

    console.log("dark mode clicked");
}