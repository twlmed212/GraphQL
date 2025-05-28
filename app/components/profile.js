import { P, PError } from "../main.js"
import { byteToKb } from "../svg/SVGClass.js"
import { LevelTitles } from "./levels.js"
import { ListUsers } from "./listUsers.js"


  
export function ProfilePage(){
    PError("Profile Object From ProfilePage Function :", "green", P)
   
   
    const login = ListUsers.get(P?.user.data?.profile[0].login)
    const fullName = P.user.data.profile[0].Data.firstName + P.user.data.profile[0].Data.lastName 
    const address = P.user.data.profile[0].Data.addressStreet
    const city = P.user.data.profile[0].Data.addressCity
    const campus = P.user.data.profile[0].campus

    const imgID = login ? `3P3A${login}.JPG` : `${P?.user.data?.profile[0].login}.jpg`
    const image = `https://discord.zone01oujda.ma/assets/pictures/${imgID}?format=webp&width=250&height=250`
    
    const level = P.user.data.level[0].amount
    const grade = LevelTitles[Math.floor(level/10)]
    const xp = byteToKb(P.user.data.xp.aggregate.sum.amount)
    return `<div class="Statics">
      <div class="Header">
        <div class="Logo">
          <svg fill="#5046E6" height="256px" width="256px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-45.5 -45.5 546.00 546.00" xml:space="preserve" stroke="#5046E6" stroke-width="20.93" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.73"></g><g id="SVGRepo_iconCarrier"> <path d="M415,102.509c-22.091,0-40,17.909-40,40c0,5.542,1.128,10.821,3.166,15.62l-83.791,83.792 c-4.799-2.038-10.078-3.167-15.621-3.167s-10.822,1.129-15.621,3.167l-50.053-50.053c2.038-4.799,3.166-10.078,3.166-15.621 c0-22.091-17.909-40-40-40c-22.091,0-40,17.909-40,40c0,5.542,1.128,10.821,3.166,15.62l-83.792,83.791 c-4.799-2.038-10.078-3.167-15.621-3.167c-22.091,0-40,17.909-40,40s17.909,40,40,40s40-17.909,40-40 c0-5.542-1.128-10.821-3.166-15.62l83.792-83.791c4.799,2.038,10.078,3.166,15.621,3.166c5.542,0,10.821-1.128,15.62-3.166 l50.054,50.054c-2.038,4.799-3.166,10.078-3.166,15.62c0,22.091,17.909,40,40,40c22.091,0,40-17.909,40-40 c0-5.542-1.128-10.821-3.166-15.62l83.791-83.792c4.799,2.038,10.078,3.166,15.621,3.166c22.091,0,40-17.909,40-40 S437.091,102.509,415,102.509z"></path> </g></svg>
          GraphQL
        </div>
        <div class="ProfileIcon">
          <label for="checkBox">
            <img class="UserPicture" src="${image}" alt="Profile Picture"  onerror="this.onerror=null; this.src='/profile.JPEG';"/>
            <div class="Logout">
              <div class="darkMode">DarkMode</div>
              <div class="logout">Logout</div>
            </div>
          </label>
          <input type="checkbox" id="checkBox">
        </div>
      </div>
      <div class="ProfileContainer">
        <div class="Profile Box">
          <div class="Picture">

            <img class="UserPicture" src="${image}" alt="Profile Picture"  onerror="this.onerror=null; this.src='/profile.JPEG';">
          </div>
          <div class="Information FlexColumn">
            <span class="Name">${fullName}</span>
            <span class="Address">${address + " " + city}</span>
            <span class="Campus">${campus} Campus</span>
          </div>
        </div>
        <div class="GradeAndXP Box">
              <div class="GradeContainer FlexColumn">
                <label class="Grade">Grade</label>
                <span class="GradeStatus">${grade}</span>
              </div>
              <div class="XpContainer FlexColumn">
                <label class="XPLabel">Total XP</label>
                <span class="TotalXP">${xp}</span>
              </div>
          </div>
      </div>
        
      <div class="StaticsContainer">
        <div class="Overview Box">
          <label for="">XP Progress Over Time</label>
          <div class="Data">
          </div>
        </div>
        <div class="Overview Box">
          <label for="">Audit Pass/Fail Ratio</label>
          <div class="Data">
          </div>
        </div>
       
        <div class="space"></div>
      </div>
    </div>`
}
