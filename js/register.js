const lost = document.querySelector(".lost")
const login = document.querySelector("#login")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const entername = document.querySelector(".enter-name")
lost.addEventListener('submit', (e) => {
    e.preventDefault()
    if(login.value.trim() ===""){
        entername.textContent = 'Error: Username is required.'
        entername.classList.remove("enter-name-none")
    }
    else if(email.value.trim() ===""){
        entername.textContent = 'Invalid email.'
        entername.classList.remove("enter-name-none")
    }
    else if(password.value.trim() ===""){
        entername.textContent = 'Invalid password'
        entername.classList.remove("enter-name-none")
    }
    else{
        entername.classList.add("enter-name-none")
        const user = {
            userLogin : login.value,
            userEmail : email.value,
            userPassword : password.value,
        }
        localStorage.setItem("user", JSON.stringify(user))
        window.location.href="./profil.html"
    }
})

const respas = document.querySelector(".res-pas")
  respas.addEventListener("click" , ()=>{
    if(login.value.trim() ===""){
        entername.textContent = 'Error: Username is required.'
        entername.classList.remove("enter-name-none")
    }
    else if(email.value.trim() ===""){
        entername.textContent = 'Invalid email.'
        entername.classList.remove("enter-name-none")
    }
    else if(password.value.trim() ===""){
        entername.textContent = 'Invalid password'
        entername.classList.remove("enter-name-none")
    }
  })