
export function LoginPage(){
    return `<div class="Login FlexColumn">
            <div class="circle C1Pos"></div>
            <div class="circle C2Pos"></div>
            <div class="Header FlexColumn ">
                <div class="Logo"><svg fill="#5046E6" height="256px" width="256px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-45.5 -45.5 546.00 546.00" xml:space="preserve" stroke="#5046E6" stroke-width="20.93" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.73"></g><g id="SVGRepo_iconCarrier"> <path d="M415,102.509c-22.091,0-40,17.909-40,40c0,5.542,1.128,10.821,3.166,15.62l-83.791,83.792 c-4.799-2.038-10.078-3.167-15.621-3.167s-10.822,1.129-15.621,3.167l-50.053-50.053c2.038-4.799,3.166-10.078,3.166-15.621 c0-22.091-17.909-40-40-40c-22.091,0-40,17.909-40,40c0,5.542,1.128,10.821,3.166,15.62l-83.792,83.791 c-4.799-2.038-10.078-3.167-15.621-3.167c-22.091,0-40,17.909-40,40s17.909,40,40,40s40-17.909,40-40 c0-5.542-1.128-10.821-3.166-15.62l83.792-83.791c4.799,2.038,10.078,3.166,15.621,3.166c5.542,0,10.821-1.128,15.62-3.166 l50.054,50.054c-2.038,4.799-3.166,10.078-3.166,15.62c0,22.091,17.909,40,40,40c22.091,0,40-17.909,40-40 c0-5.542-1.128-10.821-3.166-15.62l83.791-83.792c4.799,2.038,10.078,3.166,15.621,3.166c22.091,0,40-17.909,40-40 S437.091,102.509,415,102.509z"></path> </g></svg></div>
                <div class="Title">Graph QL</div>
                <div class="SubTitle">Welcome back! Please login to continue</div>
            </div>
            <form id="loginForm">
                <div class="LoginForm FlexColumn">
                    <div class="gap5pxGrid">
                        <label for="UserName" class="labels">Email/Username</label>
                        <div class="UserContainer FlexColumn">
                            <div class="EmailIcon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path opacity="0.4"
                                            d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z"
                                            stroke="#1f14ad" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path opacity="0.34"
                                            d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z"
                                            stroke="#1f14ad" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path
                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                            stroke="#1f14ad" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </div>
                            <input value="" placeholder="Enter your email" type="text" class="UserName" id="UserName" required>
                        </div>
                    </div>
                    <div class="gap5pxGrid">
                        <label for="Password" class="labels">Password</label>
                        <div class="PasswordContainer FlexColumn">
                            <div class="EmailIcon">
                                <svg fill="#1f14ad" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Change_password">
                                            <path
                                                d="M464.4326,147.54a9.8985,9.8985,0,0,0-17.56,9.1406,214.2638,214.2638,0,0,1-38.7686,251.42c-83.8564,83.8476-220.3154,83.874-304.207-.0088a9.8957,9.8957,0,0,0-16.8926,7.0049v56.9a9.8965,9.8965,0,0,0,19.793,0v-34.55A234.9509,234.9509,0,0,0,464.4326,147.54Z">
                                            </path>
                                            <path
                                                d="M103.8965,103.9022c83.8828-83.874,220.3418-83.8652,304.207-.0088a9.8906,9.8906,0,0,0,16.8926-6.9961v-56.9a9.8965,9.8965,0,0,0-19.793,0v34.55C313.0234-1.3556,176.0547,3.7509,89.9043,89.9012A233.9561,233.9561,0,0,0,47.5674,364.454a9.8985,9.8985,0,0,0,17.56-9.1406A214.2485,214.2485,0,0,1,103.8965,103.9022Z">
                                            </path>
                                            <path opacity="0.2"
                                                d="M126.4009,254.5555v109.44a27.08,27.08,0,0,0,27,27H358.5991a27.077,27.077,0,0,0,27-27v-109.44a27.0777,27.0777,0,0,0-27-27H153.4009A27.0805,27.0805,0,0,0,126.4009,254.5555ZM328,288.13a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,328,288.13Zm-72,0a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,256,288.13Zm-72,0a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,184,288.13Z">
                                            </path>
                                            <path opacity="0.2"
                                                d="M343.6533,207.756V171.7538a87.6533,87.6533,0,0,0-175.3066,0V207.756H188.14V171.7538a67.86,67.86,0,0,1,135.7208,0V207.756Z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <input value="" placeholder="Enter your password" type="password" class="Password" id="Password" required>
                        </div>
                    </div>
                    <div class="Footer">
                        <div class="RememberContainer">
                            <input type="checkbox" name="" id="remember">
                            <label for="remember">Remember me</label>
                        </div>
                        <div class="ForgetPassword">
                        </div>
                    </div>
                    <input type="submit" value="Login" class="LoginButton">
                </div>
            </form>
        </div>`
}