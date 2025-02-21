const content = document.querySelector(".content")
user = JSON.parse(localStorage.getItem('user'))
const login = document.querySelector(".Login-user")
login.textContent=user.userLogin
const func = {
    Dashboard: (el)=>{
        const c =`<div class="flexx"><p class="From"  >From your account dashboard you can view your <span class="blue" id="Orders">recent orders</span>, manage your <span class="blue" id="Adress">billing address</span>, and <span class="blue" id="AccountDetails">edit your password and account details</span>.</p></div>`
        content.innerHTML = c
        p.forEach(el=>el.classList.remove('active'))
        el.classList.add('active')
        const span = document.querySelectorAll(".blue")
        span.forEach(element=>{
            element.addEventListener('click',()=>{
                func[element.id](Array.from(p).find(el=>el.id===element.id))
            })
           
        })
       
    },
    Orders: (el)=>{
        const c = '<div class="flexx"><p class="From">No order has been made yet.</p></div>'
        content.innerHTML = c
        p.forEach(el=>el.classList.remove('active'))
        el.classList.add('active')
    },
    Downloads: (el)=>{
        const c = `<div class="flexx"><p class="From">No downloads available yet.</p></div>`
        content.innerHTML = c
        p.forEach(el=>el.classList.remove('active'))
        el.classList.add('active')
    },
    Adress: (el)=>{
        const c = `<div class="as">
        <p class="zrat">The following addresses will be used on the checkout page by default.</p>
        <p class="srat">Billing address</p>
        <p class="pit">You have not set up this type of address yet.</p><a class="add"href="#">Add</a>
        </div>`
        content.innerHTML = c
        p.forEach(el=>el.classList.remove('active'))
        el.classList.add('active')
    },
    AccountDetails: (el)=>{
        const c =`<div class="iop-2 ass ppoo">
      <div class="form-groupe ppoo">
        <label class="male ppoopp" for="firstname">First name *</label>
        <input id="firstname" class="black blackkk ppoo" type="text">
      </div>
      <div class="form-groupe ppoo">
        <label class="male ppoo"  for="lastname">Last name *</label>
        <input id="lastname" class="black blackkk ppoo" type="text">
      </div>
    </div>
    
    <div class="iop-3 ass form-groupe ppoopp">
      <label class="male ppoopp" for="street">Display name *</label>
      <input id="street" class="black blackk ppoopp" type="text">
      <p class="ogo ppoopp">This will be how your name will be displayed in the account section and in reviews</p>
    </div>
    <div class="iop-4 ass form-groupe ppoopp">
      <label class="male ppoopp" for="city">Email adress *</label>
      <input id="city" class="black blackk ppoopp" type="text">
    </div>
    <div class="iop-5 ass form-groupe ppoopp">
      <label class="male ppoopp" for="country">Current password (leave blank to leave unchanged) *</label>
      <input id="country" class="black blackk ppoopp" type="text">
    </div>
    <div class="iop-6 ass form-groupe ppoopp">
      <label class="male ppoopp" for="zip">New password (leave blank to leave unchanged) *</label>
      <input id="zip" class="black blackk ppoopp" type="text">
    </div>
    <div class="iop-7 ass form-groupe ppoopp">
      <label class="male ppoopp" for="phone">Confirm new password *</label>
      <input id="phone" class="black blackk ppoopp" type="text">
    </div>
    <div class="SSAA">
    <button class="Save">Save changes</button>
    </div>
    `
        content.innerHTML = c
        p.forEach(el=>el.classList.remove('active'))
        el.classList.add('active')
    },
    Logout: (el)=>{
        localStorage.removeItem('user')
        window.location.href="./окончательно забыл пароль.html"
    }
}
const p = document.querySelectorAll(".p")
p.forEach(el =>{
    el.addEventListener("click", () =>{
        func[el.id](el)
    })
})
let activeEl= null
p.forEach(el=>{
  if (el.textContent==="Dashboard"){
    activeEl=el
  }

})
func.Dashboard(activeEl)
console.log(localStorage)