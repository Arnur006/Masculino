const carrdds = {
  "Водолазка(normal)": {
    img: "католог/Водолазка(normal)/1.jpg",
    price: "13,50$",
    href: "./Водолазка(normal).html",
  },
  "Куртка(normal)": {
    img: "католог/Куртка(normal)/1.jpg",
    price: "49,00$",
    href: "./Куртка(normal).html",
  },
  "Куртка(normal)": {
    img: "католог/Куртка(normal)(2)/1.jpg",
    price: "49,50$",
    href: "./Куртка(normal)(2).html",
  },
  "Куртка(oversize)": {
    img: "католог/Куртка(oversize)/1.jpg",
    price: "32,00$",
    href: "./Куртка(oversize).html",
  },
  "Мужская двойка(normal)": {
    img: "католог/Мужская двойка(normal)/1.jpg",
    price: "29,00$",
    href: "./Мужская двойка(normal).html",
  },
  "Мужская кофта(normal)": {
    img: "католог/Мужская кофта(normal)/1.jpg",
    price: "10,50$",
    href: "./Мужская кофта(normal).html",
  },
  "Мужская кофта(normal)": {
    img: "католог/Мужская кофта(normal)(2)/1.jpg",
    price: "12,00$",
    href: "./Мужская кофта(normal)(2).html",
  },
  "Мужская рубашка(normal)": {
    img: "католог/Мужская рубашка(normal)/1.jpg",
    price: "11,00$",
    href: "./Мужская рубашка(normal).html",
  },
  "Мужской бомбер(oversize)": {
    img: "католог/Мужской бомбер(oversize)/1.jpg",
    price: "29,00$",
    href: "./Мужской бомбер(oversize).html",
  },
  "Мужской кардиган(normal)": {
    img: "католог/Мужской кардиган(normal)/1.jpg",
    price: "15,50$",
    href: "./Мужской кардиган (normal).html",
  },
};
const ooop = document.querySelector(".ooop");
const searchResultAdd = () => {
  // if (window.innerWidth>992){
  const searchresult = document.querySelector(".search-result");
  if (!searchresult) {
    const div = document.createElement("div");
    div.classList.add("search-result");
    div.innerHTML = `
         <h5 class="searh-title"></h5>
                                <ul class="search-list" >
    
                                </ul>
        `;
    searchModal.appendChild(div);
    div.style.display = "none";
    const searhtitle = document.querySelector(".searh-title");
    const searchlist = document.querySelector(".search-list");
    search(ooop, searchlist, searhtitle);
  }

  // }
  // else{
  //     const searchresult = document.querySelector(".search-result")
  //     if(searchresult){
  //        searchModal.removeChild(searchresult)
  //     }

  // }
};
const search = (input, list, title, result) => {
  input.addEventListener("input", () => {
    const searchresult = document.querySelector(".search-result");
    console.log(searchresult);
    let content = "";
    let filtredCards = Object.keys(carrdds).filter((key) =>
      key.trim().toLowerCase().includes(input.value.trim().toLowerCase())
    );
    filtredCards.forEach((key) => {
      content += `
        <li class="search-card">
                                    <a href="${carrdds[key].href}" class="search-link">
                                      <img  class="custom-card-image" src="${carrdds[key].img}" alt="">
                                      <h5 class="card-title search-card-title">${key}</h5>
                                      <p class="card-text custom-card-text search-card-price">${carrdds[key].price}</p>

                                    </a>
                                  </li>
        `;
    });
    searchresult.style.display = "block";
    list.innerHTML = content;
    if (input.value.trim() === "") {
      content = "";
      filtredCards = [];
      list.innerHTML = content;
      searchresult.style.display = "none";
    }
    if (filtredCards.length < 1) {
      title.textContent = "Нет совпадений";
    } else {
      title.textContent = "Showing all results:";
    }
  });
};
const gc = document.querySelector(".gc");
gc.addEventListener("click", () => {
  const searchresult = document.querySelector(".search-result");
  const list = searchresult.querySelector(".search-list");
  searchresult.style.display = "none";
  list.innerHTML = "";
  ooop.value = "";
});
const searchModal = document.querySelector(".search-modal");
window.addEventListener("resize", searchResultAdd);
document.addEventListener("DOMContentLoaded", searchResultAdd);
