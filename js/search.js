const cards = {
    'Водолазка(normal)':{
        img:'католог/Водолазка(normal)/1.jpg',
        price:"13,50$",
        href: "./Водолазка(normal).html",
    },
    'Куртка(normal)':{
        img:'католог/Куртка(normal)/1.jpg',
        price:'49,00$',
         href: "./Куртка(normal).html"
    },
    'Водолазка(normal)':{
        img:'католог/Куртка(normal)(2)/1.jpg',
        price:"49,50$",
        href: "./Куртка(normal)(2).html"
    },
    'Куртка(oversize)':{
        img:'католог/Куртка(oversize)/1.jpg',
        price: '32,00$',
        href: "./Куртка(oversize).html"
    },
    'Мужская двойка(normal)':{
        img:'католог/Мужская двойка(normal)/1.jpg',
        price: '29,00$',
        href: "./Мужская двойка(normal).html"
    },
    'Мужская кофта(normal)':{
        img:'католог/Мужская кофта(normal)/1.jpg',
        price: '10,50$',
         href: "./Мужская кофта(normal).html"
    },
    'Мужская кофта(normal)':{
        img:'католог/Мужская кофта(normal)(2)/1.jpg',
        price: '12,00$',
         href: "./Мужская кофта(normal)(2).html"
    },
    'Мужская рубашка(normal)':{
        img:'католог/Мужская рубашка(normal)/1.jpg',
        price: '11,00$',
        href: "./Мужская рубашка(normal).html"
    },
    'Мужской бомбер(oversize)':{
        img:'католог/Мужской бомбер(oversize)/1.jpg',
        price: '29,00$',
        href: "./Мужской бомбер(oversize).html"
    },
    'Мужской кардиган(normal)':{
        img:'католог/Мужской кардиган(normal)/1.jpg',
        price: '15,50$',
         href: "./Мужской кардиган (normal).html"
    },
    }
const searchResultAdd = ()=>{
    if (window.innerWidth>992){
        const searchresult = document.querySelector(".search-result")
       if(!searchresult){
        const div = document.createElement("div")
        div.classList.add("search-result")
        div.innerHTML = `
         <h5 class="searh-title">Showing all results:</h5>
                                <ul class="search-list" >
    
                                </ul>
        `
        searchModal.appendChild(div)
       }
    
    }
    else{
        const searchresult = document.querySelector(".search-result")
        if(searchresult){
           searchModal.removeChild(searchresult) 
        }
        
    }
}
const searchModal = document.querySelector(".search-modal")
window.addEventListener("resize",searchResultAdd)
document.addEventListener("DOMContentLoaded",searchResultAdd)



// <li class="search-card">
//                                     <a href="" class="search-link">
//                                       <img  class="custom-card-image" src="./католог/Водолазка(normal)/1.jpg" alt="">
//                                       <h5 class="card-title search-card-title">Водолазка(normal)</h5>
//                                       <p class="card-text custom-card-text search-card-price">13,50$</p>

//                                     </a>
//                                   </li>