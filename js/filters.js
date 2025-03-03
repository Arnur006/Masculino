const pageUrl = new URL(window.location.href);
console.log(pageUrl);
const content = document.querySelector(".content");
let url = "main";
const cardsContent = {
  0: {
    name: "Водолазка(normal)",
    img_first: "католог/Водолазка(normal)/1.jpg",
    img_second: "католог/Водолазка(normal)/2.jpg",
    price: "13,50$",
    categories: ["Водолазка", "Зима", "Осень", "Все"],
    rangeOfPrices: ["0 $ - 50 $", "All"],
    size: ["3XL", "L", "M", "S", "S-3XL", "XL"],
    url: "Водолазка(normal)",
    href: "./Водолазка(normal).html",
  },
  1: {
    name: "Куртка(normal)",
    img_first: "католог/Куртка(normal)/1.jpg",
    img_second: "католог/Куртка(normal)/2.jpg",
    price: "49,00$",
    categories: ["Зима", "Куртки", "Все"],
    rangeOfPrices: ["0 $ - 50 $", "All"],
    size: [""],
    url: "Куртка (normal)",
    href: "./Куртка(normal).html",
  },
  2: {
    name: "Куртка(normal)",
    img_first: "католог/Куртка(normal)(2)/1.jpg",
    img_second: "католог/Куртка(normal)(2)/2.jpg",
    price: "49,50$",
    categories: ["Зима", "Куртки", "Все"],
    rangeOfPrices: ["0 $ - 50 $", "All"],
    size: [""],
    url: "Куртка (normal)(2)",
    href: "./Куртка(normal)(2).html",
  },
  3: {
    name: "Куртка(oversize)",
    img_first: "католог/Куртка(oversize)/1.jpg",
    img_second: "католог/Куртка(oversize)/2.jpg",
    price: "32,00$",
    categories: ["Зима", "Куртки", "Все"],
    rangeOfPrices: ["0 $ - 50 $", "All"],
    size: ["L", "M", "XL", "XXL"],
    url: "Куртка (oversize)",
    href: "./Куртка(oversize).html",
  },
  4: {
    name: "Мужская двойка(normal)",
    img_first: "католог/Мужская двойка(normal)/1.jpg",
    img_second: "католог/Мужская двойка(normal)/2.jpg",
    price: "29,00$",
    categories: [
      "Зима",
      "Осень",
      "Спорт Костюм",
      "Толстовка",
      "Трико",
      "Все",
      "Весна",
    ],
    rangeOfPrices: ["0 $ - 50 $", "All"],
    size: ["L", "M", "S", "XL", "XXL"],
    url: "Мужская двойка(normal)",
    href: "./Мужская двойка(normal).html",
  },
  5: {
    name: "Мужская кофта(normal)",
    img_first: "католог/Мужская кофта(normal)/1.jpg",
    img_second: "католог/Мужская кофта(normal)/2.jpg",
    price: "10,50$",
    categories: ["Зима", "Кофты", "Осень", "Все"],
    rangeOfPrices: ["0 $ - 50 $", "All"],
    size: ["L", "M", "XL", "XXL"],
    url: "Мужская кофта(normal)",
    href: "./Мужская кофта(normal).html",
  },
  6: {
    name: "Мужская кофта(normal)",
    img_first: "католог/Мужская кофта(normal)(2)/1.jpg",
    img_second: "католог/Мужская кофта(normal)(2)/2.jpg",
    price: "12,00$",
    categories: ["Зима", "Кофты", "Осень", "Все"],
    rangeOfPrices: ["0 $ - 50 $", "All"],
    size: ["3XL", "L", "M", "XL", "XXL"],
    url: "Мужская кофта(normal)(2)",
    href: "./Мужская кофта(normal)(2).html",
  },
  7: {
    name: "Мужская рубашка(normal)",
    img_first: "католог/Мужская рубашка(normal)/1.jpg",
    img_second: "католог/Мужская рубашка(normal)/2.jpg",
    price: "11,00$",
    categories: ["Рубашки", "Все"],
    rangeOfPrices: ["0 $ - 50 $", "All"],
    size: ["3XL", "L", "M", "XL", "XXL"],
    url: "Мужская рубашка(normal)",
    href: "./Мужская рубашка(normal).html",
  },
  8: {
    name: "Мужской бомбер(oversize)",
    img_first: "католог/Мужской бомбер(oversize)/1.jpg",
    img_second: "католог/Мужской бомбер(oversize)/2.jpg",
    price: "29,00$",
    categories: ["Осение куртки", "Осень", "Все"],
    rangeOfPrices: ["0 $ - 50 $", "All"],
    size: ["L", "M", "S", "XL"],
    url: "Мужской бомбер(oversize)",
    href: "./Мужской бомбер(oversize).html",
  },
  9: {
    name: "Мужской кардиган(normal)",
    img_first: "католог/Мужской кардиган(normal)/1.jpg",
    img_second: "католог/Мужской кардиган(normal)/2.jpg",
    price: "15,50$",
    categories: ["Кардиган", "Все"],
    rangeOfPrices: ["0 $ - 50 $", "All"],
    size: ["L", "M", "XL", "XXL"],
    url: "Мужской кардиган (normal)",
    href: "./Мужской кардиган (normal).html",
  },
};
let filters = ["Все", "All", []];
const cardsWrap = document.querySelector(".cards");
let cards = ``;
const cardsGenerate = (category, rangeOfPrice) => {
  if (pageUrl.searchParams.get("category")) {
    filters[0] = pageUrl.searchParams.get("category");
  }
  console.log(category);
  console.log(rangeOfPrice);
  cards = ``;
  for (const card in cardsContent) {
    if (
      cardsContent[card].categories.includes(filters[0]) &&
      cardsContent[card].rangeOfPrices.includes(filters[1])
    ) {
      cards += `<a class='custom-card-link' style="text-decoration:none; color:white;" href="${cardsContent[card].href}">
               <div data-url="${cardsContent[card].url}" class="card custom-card">
              <img src="${cardsContent[card].img_first}" class="card-img-top custom-card-image" alt="...">
              <img class="hover-image card-img-top" src="${cardsContent[card].img_second}" alt="">
              <div class="card-body">
                <div class="title custom-card-title">
                  <h5 class="card-title">${cardsContent[card].name}</h5>
                  <a href="#">
                    <svg class="love_icon" fill="none" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="white">
      
                      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                      
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#000000" stroke-width="2.112">
                      
                      <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"/>
                      
                      </g>
                      
                      <g id="SVGRepo_iconCarrier">
                      
                      <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"/>
                      
                      </g>
                      
                      </svg>
                  </a>  
                </div>
                <p class="card-text custom-card-text">${cardsContent[card].price}</p>
    
              </div>
            </div>
            </a>`;
    }
  }
  cardsWrap.innerHTML = cards;
};
cardsGenerate();

const categories = document.querySelectorAll("#category");
const Filters = document.querySelector(".lopp");
const chetchikText = document.querySelector(".chetchik");
let chetchik = 0;

categories.forEach((category) => {
  if (category.textContent === filters[0]) {
    category.classList.add("span-active");
  }
  category.addEventListener("click", (target) => {
    categories.forEach((l) => l.classList.remove("span-active"));
    let categoryText = category.textContent;
    category.classList.add("span-active");
    filters[0] = categoryText;
    pageUrl.searchParams.set("category", categoryText);
    cardsGenerate();
    cartochkyChange();
  });
});

const prices = document.querySelectorAll("#price");

prices.forEach((price) => {
  price.addEventListener("click", (target) => {
    prices.forEach((l) => l.classList.remove("span-active"));
    let priceText = price.textContent;
    price.classList.add("span-active");
    filters[1] = priceText;
    cardsGenerate();
  });
});

const sizes = document.querySelectorAll("#size");

const chetchikCheck = () => {
  if (chetchik > 0) {
    Filters.classList.add("lopp-active");
  } else {
    Filters.classList.remove("lopp-active");
  }
};

sizes.forEach((size) => {
  size.addEventListener("click", (target) => {
    let sizeText = size.textContent;
    size.classList.toggle("size-active");
    let gyt = document.querySelectorAll(".size-active");
    chetchik = gyt.length;
    chetchikCheck();
    chetchikText.textContent = `(${chetchik})`;
  });
});

Filters.addEventListener("click", () => {
  chetchik = 0;
  sizes.forEach((rtyt) => rtyt.classList.remove("size-active"));
  chetchikCheck();
});

cartochkyChange();
