import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

async function sendRequest(token) {
    const authProcess = "resetPassword";
    //"auth-process","r/esetPassword")
    
    try {
        const options = {
            method: "POST",
            mode: 'no-cors', // Possible values: 'cors', 'no-cors', 'same-origin'
            headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "X-Auth-Process": authProcess,
            "authProcess": authProcess
            },
        };
        
    options.body = JSON.stringify({type: "resetPassword"});
    const response = await fetch("https://learn.zone01oujda.ma/api/auth/email-validation", options);
    
    return await response.json();
    } catch (err) {
        console.log(err);
    }
}


app.get("/resetPassword", async (req, res)=> {
    const email = req.query.email ? req.query.email : "someone"
    const token = `Basic ${btoa(email+":")}`

    console.log("Reset Password request made by: ", email);
    
    const response = await sendRequest(token)
    res.header("Content-Type", "application/json")
    res.end(JSON.stringify(response))
})
app.listen(9090, () => {
    console.log("Reset Password Server Started");
    console.log("on http://localhost:9090");
});  