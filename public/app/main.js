import { LoginPage } from "./components/login.js"
import { HeaderButtons } from "./components/logout.js"
import { ProfilePage } from "./components/profile.js"
import { ResetPassword } from "./components/resetPassword.js"
import { Login } from "./utils/auth.js"
import { checkAuthorizationAndGetData } from "./utils/checkUser.js"
import { fetchData } from "./utils/fetch.js"
import { Generate_Audit_Ratio_Graph } from "./svg/audit.js"
import { Generate_XP_Progrees_Chart } from "./svg/xp.js"
import { DarkMode } from "./utils/darkMode.js"

export const queryUrl = `https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql`

export var P = {}
const AppContainer = document.querySelector(".AppContainer")

export function PError(msg, color, obj = "END"){
    console.log(`%c ${msg}`, `color:${color}`, obj);
}


export async function App(){
    let check
    if (localStorage.getItem("token")){
        check = await checkAuthorizationAndGetData()
    }
    if(localStorage.getItem("darkMode") == "true"){
        DarkMode(null, true)
    }
    PError(`Is Logged : ${check}`, check ? "green" : "red")
    
    if (check){
        AppContainer.innerHTML = ProfilePage()
        HeaderButtons()
        Generate_Audit_Ratio_Graph()
        Generate_XP_Progrees_Chart()
        PError("User Logged Successfully", "green")
    }else{
        AppContainer.innerHTML = LoginPage()
        Login()
        ResetButton()
        PError("You are Not Authorized, Login first", "red")
    }
}



async function ResetButton(){
    const forgetPassword = AppContainer.querySelector(".ForgetPassword")
    
    if (!P.user){
        forgetPassword.innerHTML = "<span>Forget password?</span>"
        forgetPassword.onclick = ()=>{
            AppContainer.innerHTML = ""
            AppContainer.append(ResetPassword())
            const BackToLogin = AppContainer.querySelector(".BackToLogin")

            // get values from the form : 
            sendResetData.onclick = async (event) => {
                event.preventDefault()
                sendResetData.disabled = true
                sendResetData.style.backgroundColor = "#6b6b6b"
                sendResetData.style.cursor = "default"

                const emailDiv = AppContainer.querySelector("#email")
                const email = emailDiv.value
                const response = await fetchData(`/api/resetPassword?email=${email}`, null, null, "GET")
                const errorMsg = AppContainer.querySelector(".responseMessage")
                if (response?.expirationTime){
                    errorMsg.style.display = "block"
                    errorMsg.innerHTML = "If an account exists with that email, a reset link has been sent."
                    errorMsg.style.backgroundColor = "#008a009e"
                    emailDiv.style.border = "1px solid green"
                }else if (response?.error){
                    errorMsg.style.display = "block"
                    errorMsg.innerHTML = "Email not found or invalid."
                    errorMsg.style.backgroundColor = "#fd6e6e"
                    emailDiv.style.border = "1px solid red"
                    sendResetData.disabled = false
                    sendResetData.style.cursor = "pointer"
                    sendResetData.style.backgroundColor = "#5046e6"
                }
            }
            BackToLogin.onclick =  ()=>{
                console.log("Back To Login clicked");
                App()
            }
        }
    }
}


window.addEventListener('DOMContentLoaded', async ()=>{
    PError("DOM LOADED Succesfully", "green")
    App()
})

