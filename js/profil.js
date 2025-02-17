const content = document.querySelector(".content")
const func = {
    Dashboard: (el)=>{
        const c =`<div class="flexx"><p class="From"  >From your account dashboard you can view your <a class="blue">recent orders</a>, manage your <a class="blue">billing address</a>, and <a class="blue">edit your password and account details</a>.</p></div>`
        content.innerHTML = c
        p.forEach(el=>el.classList.remove('active'))
        el.classList.add('active')
    },
    Orders: (el)=>{
        const c = '<div class="flexx"><p class="From">No order has been made yet.</p></div>'
        content.innerHTML = c
        p.forEach(el=>el.classList.remove('active'))
        el.classList.add('active')
    },
    Downloads: (el)=>{
        const c = '<div class="flexx"><p class="From">No downloads available yet.</p></div>'
        content.innerHTML = c
        p.forEach(el=>el.classList.remove('active'))
        el.classList.add('active')
    },
    Adress: (el)=>{
        const c = '<p>The following addresses will be used on the checkout page by default.</p><p>Billing address</p><p>You have not set up this type of address yet.</p><a href="#">Add</a>'
        content.innerHTML = c
        p.forEach(el=>el.classList.remove('active'))
        el.classList.add('active')
    },
    AccountDetails: (el)=>{
        const c =''
        p.forEach(el=>el.classList.remove('active'))
        el.classList.add('active')
    },
    Logout: (el)=>{
        console.log("asdasd")
    }
}
const p = document.querySelectorAll(".p")
p.forEach(el =>{
    el.addEventListener("click", () =>{
        func[el.id](el)
    })
})