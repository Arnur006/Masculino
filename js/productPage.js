import cart from "./cart.js";
const korElemNaz = document.querySelector(".kor-elem-naz");
const quant = document.querySelector(".quant");

let size = "";
let lklk = 1;
let q = 0;
let qq = 0;
let globalprice = 0;

const priceOf = document.querySelector(".priceof-span");
const nameOf = document.querySelector(".nameof");
const korzina = document.querySelector(".корзинааа");
const empty = document.querySelector(".empty");
const korzinacheckwrap = document.querySelector(".korzina-check_wrap");
const zena = document.querySelector(".zena");
const kor_chet = document.querySelector(".kor-chet");
const svet = document.querySelectorAll(".svet");
let src = svet[0].dataset.src;
let color = svet[0].dataset.color;
const oooo = document.querySelector(".oooo");
const sss = document.querySelector(".sss");
const zz = document.querySelectorAll(".zz");
const quantity = document.querySelector(".quantity");
const love_icon = document.querySelector(".love_icon");
const btntxt = document.querySelector(".btn-txt");
const mainImg = document.querySelector("#mainImg");
const changeImg = document.querySelectorAll("#changeImg");

const minus = quant.querySelector(".minus");
const plus = quant.querySelector(".plus");
const spyn = quant.querySelector(".spyn");
plus.addEventListener("click", () => {
  q = Number(spyn.textContent);

  q += 1;
  spyn.textContent = q;
});
minus.addEventListener("click", () => {
  q = Number(spyn.textContent);
  if (q <= 1) {
    q = 1;
  } else {
    q -= 1;
  }
  spyn.textContent = q;
});

changeImg.forEach((img) => {
  img.addEventListener("click", () => {
    mainImg.src = img.src;
  });
});
const korChetUpdate = () => {
  kor_chet.textContent = 0;
};
korChetUpdate();
const zzClick = () => {
  const zzActive = document.querySelectorAll(".zz-active");
  zzActive.forEach((z) => {
    z.addEventListener("click", () => {
      zzActive.forEach((rr) => rr.classList.remove("pppp"));
      z.classList.add("pppp");
      let text = z.textContent;
      if (text != "Выбрать опцию") {
        size = text;
      }

      btntxt.textContent = text;
      zz.forEach((z) => z.classList.remove("zz-active"));
      love_icon.classList.remove("disable");
      quantity.classList.remove("quantity-disable");
      sss.classList.remove("disable");
      sss.classList.add("cart-active");
      sss.addEventListener("click", addAddTr);
    });
  });
};
const zEvent = () => {
  zzActive.forEach((rr) => rr.classList.remove("pppp"));
  z.classList.add("pppp");
  let text = z.textContent;
  if (text != "Выбрать опцию") {
    size = text;
  }

  btntxt.textContent = text;
  zz.forEach((z) => z.classList.remove("zz-active"));
  love_icon.classList.remove("disable");
  quantity.classList.remove("quantity-disable");
  sss.classList.remove("disable");
  sss.classList.add("cart-active");
  sss.addEventListener("click", addAddTr);
};
const chetchick = () => {
  qq = 0;
  globalprice = 0;
  const tabls = korElemNaz.querySelectorAll("table");
  tabls.forEach((table) => {
    let localPrice = table.querySelector(".cdpc");
    let localSpyn = table.querySelector(".spyn");
    globalprice += Number(localPrice.textContent);
    qq += Number(localSpyn.textContent);
  });
  kor_chet.textContent = qq;
  zena.textContent = globalprice;
};
const emptyCart = () => {
  let i = Number(kor_chet.textContent);
  if (i < 1) {
    empty.classList.remove("none");
    korElemNaz.classList.add("none");
    korzinacheckwrap.classList.add("none");
  } else {
    empty.classList.add("none");
    korElemNaz.classList.remove("none");
    korzinacheckwrap.classList.remove("none");
  }
};
emptyCart();
const addAddTr = () => {
  let keyOfTable = "";
  const randomKey = generateRandomKey();
  lklk = spyn.textContent;
  const korChilds = Array.from(korElemNaz.childNodes); // Преобразуем в массив

  korChilds.forEach((el) => {
    if (el.classList && el.classList.contains("kor-table")) {
      const name = el.querySelector(".name").textContent;
      const elColor = el.querySelector(".color").textContent;

      const elSize = el.querySelector(".size").textContent;

      if (elColor === color && elSize === size && name === nameOf.textContent) {
        keyOfTable = el.classList[1];
      }
    }
  });
  if (keyOfTable != "") {
    const el = document.querySelector(`.${keyOfTable}`);
    const elQuant = el.querySelector(".quant");
    const elPrice = el.querySelector(".price");

    elQuant.textContent = Number(elQuant.textContent) + Number(lklk);
    elPrice.textContent =
      (Number(elQuant.textContent) + Number(lklk)) *
      Number(priceOf.textContent);
    const value = {
      baseCoast: priceOf.textContent,
      imgSrc: src,
      name: nameOf.textContent,
      sizee: size,
      colorr: color,
      lklklk: Number(elQuant.textContent) + Number(lklk),
      coast:
        (Number(elQuant.textContent) + Number(lklk)) *
        Number(priceOf.textContent),
    };
    localStorage.setItem(keyOfTable, JSON.stringify(value));
  } else {
    const table = document.createElement("table");

    table.classList.add("kor-table");
    table.classList.add(randomKey);
    table.innerHTML = `  <tbody>
                               <tr>
                                 <td rowspan="4"><img  class="korzina-foto" src="${src}" alt=""></td>
                                 <td class="white left name">${
                                   nameOf.textContent
                                 }</td>
                                 <td></td>
                                 <td class="zak-td"><svg class="clo-svg ${randomKey}" width="16px" height="16px" viewBox="0 0 24 24" fill="#a5a5a5" xmlns="http://www.w3.org/2000/svg" stroke="#a5a5a5">
  
                                   <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                   
                                   <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                   
                                   <g id="SVGRepo_iconCarrier"> <path class="clo" d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#a5a5a5"/> </g>
                                   
                                   </svg>
                                 </td>
                               </tr>
                               <tr>
                                 <td class="white left color" colspan="2">${color}</td>
                               </tr>
                               <tr>
                                 
                                 <td class="gray left small-text">Размер <span class="size">${size}</span></td>
  
                               </tr>
                               <tr class="quant_cart ${randomKey}">
                                 <td class="gray left">Qty  
                                  <button class="strelka minus">
                                    <svg fill="#ffffff" width="10px" height="10px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="rotate(270)matrix(1, 0, 0, 1, 0, 0)" stroke="#ffffff">
                          
                                      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                      
                                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                      
                                      <g id="SVGRepo_iconCarrier">
                                      
                                      <path d="M21,21H3L12,3Z"/>
                                      
                                      </g>
                                      
                                      </svg>
                                </button>
                                <span class="spyn quant">${lklk}</span>
                                <button class="strelka plus">
                                    
                                    <svg fill="#ffffff" width="10px" height="10px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)matrix(1, 0, 0, 1, 0, 0)" stroke="#ffffff">
                          
                                      <g id="SVGRepo_bg1Carrier" stroke-width="0"/>
                                      
                                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                      
                                      <g id="SVGRepo_iconCarrier">
                                      
                                      <path d="M21,21H3L12,3Z"/>
                                      
                                      </g>
                                      
                                      </svg>
                                  </button> 
                                    
                                   </td>
                                 <td></td>
                                 <td class="white zak-td"><span class="cdpc price">${
                                   lklk * Number(priceOf.textContent)
                                 }</span>$</td>
                               </tr>
                             </tbody>`;
    korElemNaz.append(table);
    chetchick();
    emptyCart();

    trQuant(table);
    deleteCart();
    const tables = korElemNaz.querySelectorAll(".kor-table");

    const value = {
      baseCoast: priceOf.textContent,
      imgSrc: src,
      name: nameOf.textContent,
      sizee: size,
      colorr: color,
      lklklk: lklk,
      coast: lklk * Number(priceOf.textContent),
    };
    localStorage.setItem(randomKey, JSON.stringify(value));
  }
  sss.classList.remove("cart-active");

  zz.forEach((el) => el.classList.remove("pppp"));
  zz[0].classList.add("pppp");
  btntxt.textContent = "Выбрать опцию";
  spyn.textContent = 1;
  sss.removeEventListener("click", addAddTr);
  chetchick();
};

const deleteCart = () => {
  const tables = korElemNaz.querySelectorAll("table");
  tables.forEach((table) => {
    const closvg = table.querySelector(".clo-svg");
    closvg.addEventListener("click", () => {
      const key = closvg.classList[1];
      localStorage.removeItem(key);
      korElemNaz.removeChild(table);
      chetchick();
      emptyCart();
    });
  });
};

love_icon.addEventListener("click", () => {
  love_icon.classList.toggle("love_icon-active");
});

const trQuant = (table) => {
  const quant = table.querySelector(".quant_cart");
  let key = "";
  let item = "";
  let newValue = {};
  console.log(item);
  const minus = table.querySelector(".minus");
  const plus = table.querySelector(".plus");
  const spyn = table.querySelector(".spyn");
  const standartPrice = Number(priceOf.textContent);
  const prise = table.querySelector(".cdpc");
  plus.addEventListener("click", () => {
    q = Number(spyn.textContent);
    q += 1;
    spyn.textContent = q;
    prise.textContent = `${standartPrice * q}`;
    chetchick();
    key = quant.classList[1];
    item = JSON.parse(localStorage.getItem(key));
    newValue = {
      baseCoast: priceOf.textContent,
      coast: `${standartPrice * q}`,
      colorr: item.colorr,
      imgSrc: item.imgSrc,
      lklklk: q,
      name: item.name,
      sizee: item.sizee,
    };
    localStorage.setItem(key, JSON.stringify(newValue));
  });
  minus.addEventListener("click", () => {
    q = Number(spyn.textContent);
    if (q <= 1) {
      q = 1;
      prise.textContent = `${standartPrice * q}`;
      key = quant.classList[1];
      item = JSON.parse(localStorage.getItem(key));
      newValue = {
        baseCoast: priceOf.textContent,
        coast: `${standartPrice * q}`,
        colorr: item.colorr,
        imgSrc: item.imgSrc,
        lklklk: q,
        name: item.name,
        sizee: item.sizee,
      };
      localStorage.setItem(key, JSON.stringify(newValue));
    } else {
      q -= 1;
      prise.textContent = `${standartPrice * q}`;
      key = quant.classList[1];
      item = JSON.parse(localStorage.getItem(key));
      newValue = {
        baseCoast: priceOf.textContent,
        coast: `${standartPrice * q}`,
        colorr: item.colorr,
        imgSrc: item.imgSrc,
        lklklk: q,
        name: item.name,
        sizee: item.sizee,
      };
      localStorage.setItem(key, JSON.stringify(newValue));
    }
    spyn.textContent = q;
    chetchick();
  });
};

oooo.addEventListener("click", () => {
  zz.forEach((z) => z.classList.toggle("zz-active"));
  sss.classList.toggle("disable");
  love_icon.classList.toggle("disable");
  quantity.classList.toggle("quantity-disable");
  zzClick();
});
svet.forEach((tt) =>
  tt.addEventListener("click", () => {
    svet.forEach((t) => t.classList.remove("tt-active"));
    tt.classList.add("tt-active");
    color = tt.dataset.color;
    src = tt.dataset.src;
    mainImg.src = src;
  })
);

function generateRandomKey() {
  return Math.random().toString(36).substring(2, 10); // Генерирует строку из 8 символов
}

// Пример записи данных с рандомным ключом

// console.log(`анные записаны под числовым ключом": ${randomNumberKey}`);
// console.log(`Сохраненные данные:`, JSON.parse(localStorage.getItem(randomNumberKey)));
