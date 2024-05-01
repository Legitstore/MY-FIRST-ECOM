// ============== FOR USER login ================== 
let signIn = document.querySelector(".sign-in");

document.querySelector("#login-btn").onclick= () =>{
    signIn.classList.toggle("active")
    signUp.classList.remove("active")
}
// ============== FOR USER login ================== 
let signUp = document.querySelector(".sign-up");

document.querySelector("#regis-user").onclick= () =>{
    signUp.classList.toggle("active")
    signIn.classList.remove("active")
}

// ---------  WINDOW SCROLL ------- 

// window.onscroll= () =>{
//     signIn.classList.remove("active")
//     signUp.classList.remove("active")
// }

// __________ PASSWORD __________
const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");

showPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye");
    const type = passwordField.getAttribute("type")
    === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
})

const showLock = document.querySelector("#show-lock");
const passwordBox = document.querySelector("#passwording");

showLock.addEventListener("click", function(){
    this.classList.toggle("fa-lock-open");
    const type = passwordBox.getAttribute("type")
    === "password" ? "text" : "password";
    passwordBox.setAttribute("type", type);
})
