import { errorBox } from "../components/error.js"
import { App, PError, P, queryUrl } from "../main.js"
import { fetchData } from "./fetch.js"

export function Login(){
    const LoginButton = document.querySelector("#loginForm")

    LoginButton.addEventListener("submit", async (e)=>{
        e.preventDefault()
        const email = LoginButton.querySelector("#UserName")
        const pass = LoginButton.querySelector("#Password")
        const credentials = `Basic ${btoa(`${email.value}:${pass.value}`)}`
        const button = LoginButton.querySelector(".LoginButton")
        let token = await fetchData("https://learn.zone01oujda.ma/api/auth/signin", credentials)
        const data = await fetchData(queryUrl, `Bearer ${token}`, "{user {auditRatio}}")
        button.style.backgroundColor = "gray"
        button.disabled = true
        button.style.cursor = "default"
        console.log("data===", data);
        
        if (typeof token === "object" || data?.data?.user[0]?.auditRatio == null){
            // show error msg
            PError("inside Error Part", "red")            
            const Login = LoginButton.closest(".Login")
            const bodyElement =  LoginButton.closest("body")
            // add shaking effect
            Login.classList.add("Shake")
            bodyElement.appendChild(errorBox(`${data?.data?.user[0] ? "You don't have permission to access this page" : "Invalid Credentials"}`, ))
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
            PError(token?.error, "red")
        }else{
            localStorage.setItem('token', token)
            P.token = token
            App()
        }
    })

}