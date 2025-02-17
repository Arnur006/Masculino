const lost = document.querySelector(".lost")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
lost.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = {
        userEmail : email.value,
        userPassword : password.value,
    }
    localStorage.setItem("user", JSON.stringify(user))
    window.location.href="./index.html"
})