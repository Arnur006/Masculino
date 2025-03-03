const t = document.querySelector(".tytyt");
const thh = document.querySelectorAll(".thh");
const wrappp = document.querySelector(".wrappp");
console.log(t);
const uuuyyy = document.querySelectorAll(".uuuyyy");
console.log(uuuyyy);
uuuyyy.forEach((tbody) => {
  console.log(tbody);
  const minus = tbody.querySelector(".minus");
  const spyn = tbody.querySelector(".spyn");
  const plus = tbody.querySelector(".plus");
  const cdpc = tbody.querySelector(".cdpc");
  const korzina = tbody.querySelector(".korzina-foto");
  const clo = tbody.querySelector(".clo");

  minus.addEventListener("click", () => {
    if (Number(spyn.textContent) <= 1) {
      spyn.textContent = 1;
    } else {
      spyn.textContent -= 1;
    }
    cdpc.textContent = 13.5 * Number(spyn.textContent);
    globalPrice();
  });
  plus.addEventListener("click", () => {
    spyn.textContent = Number(spyn.textContent) + 1;
    cdpc.textContent = 13.5 * Number(spyn.textContent);
    globalPrice();
  });
  clo.addEventListener("click", () => {
    if (t.children.length > 1) {
      t.removeChild(tbody);
      console.log(t.children.length);
      globalPrice();
    } else {
      wrappp.innerHTML = `
            <div class = "cls0">
             <div class = "kryg"></div>
        <p class = "your-cart"> Your cart is currently empty.</p>
       <a class = "return" href="./index.html">Return tot shop</a>
            </div>
            
            
            `;
    }
  });
});

const globalPrice = () => {
  let globalPrice = 0;
  const cdpc = document.querySelectorAll(".cdpc");
  cdpc.forEach((el) => {
    globalPrice += Number(el.textContent);
  });
  thh.forEach((el) => {
    el.textContent = globalPrice;
  });
};
globalPrice();
