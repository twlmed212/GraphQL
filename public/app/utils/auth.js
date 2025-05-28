import { errorBox } from "../components/error.js"
import { App, PError, P } from "../main.js"
import { fetchData } from "./fetch.js"

export function Login(){
    const LoginButton = document.querySelector("#loginForm")

    LoginButton.addEventListener("submit", async (e)=>{
        e.preventDefault()
        const email = LoginButton.querySelector("#UserName")
        const pass = LoginButton.querySelector("#Password")
        const credentials = `Basic ${btoa(`${email.value}:${pass.value}`)}`
        let token = await fetchData("https://learn.zone01oujda.ma/api/auth/signin", credentials)

        const button = LoginButton.querySelector(".LoginButton")
        button.style.backgroundColor = "gray"
        button.disabled = true
        button.style.cursor = "default"
        if (typeof token === "object"){
            // show error msg
            PError("inside Error Part", "red")            
            const Login = LoginButton.closest(".Login")
            const bodyElement =  LoginButton.closest("body")
            // add shaking effect
            Login.classList.add("Shake")
            bodyElement.appendChild(errorBox("Invalid username or password"))
            // Change Border input to red
            email.style.outline = "1.4px solid red" 
            pass.style.outline = "1.4px solid red" 
            // hide error box after 3s
            setTimeout(()=>{
                PError("inside timeout", "blue")
                Login.classList.remove("Shake")
                bodyElement.querySelector(".ErrorBox").remove()
                email.style.outline = "1.4px solid rgb(220, 220, 220)" 
                pass.style.outline = "1.4px solid rgb(220, 220, 220)" 
                button.style.backgroundColor = "var(--mainColor)"
                button.disabled = false
                button.style.cursor = "pointer"
            }, 4000)
            PError(token.error, "red")
        }else{
            localStorage.setItem('token', token)
            P.token = token
            App()
        }
    })

}