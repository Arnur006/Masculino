

const cart = ()=>{
  console.log(localStorage)
  const korElemNaz = document.querySelector(".kor-elem-naz");
  const zena = document.querySelector(".zena")
  const kor_chet = document.querySelector(".kor-chet") 
  let quant = 0

  const cartContent = () =>{
    if(Object.keys(localStorage).length>0){
      const empty = document.querySelector(".empty")
      const korzinacheckwrap = document.querySelector(".korzina-check_wrap")
      let qq = 0;
      let globalprice = 0;
      const chetchick = () => {
        qq = 0
        globalprice = 0 
        const tabls = korElemNaz.querySelectorAll("table")
        tabls.forEach(table=>{
          let localPrice = table.querySelector(".cdpc")
          let localSpyn = table.querySelector(".spyn")
          globalprice += Number(localPrice.textContent)
          qq+= Number(localSpyn.textContent)
        })
        kor_chet.textContent = qq
        zena.textContent = globalprice

      }
      const emptyCart = ()=>{
        let i =Number(kor_chet.textContent)
        if(i<1){
          empty.classList.remove('none')
          korElemNaz.classList.add("none")
          korzinacheckwrap.classList.add("none")
         

        }
        else{
          empty.classList.add('none')
          korElemNaz.classList.remove("none")
          korzinacheckwrap.classList.remove("none")
        }
      }
      const deleteCart = () =>{
        const tables = korElemNaz.querySelectorAll("table")
        tables.forEach(table=>{
          const closvg = table.querySelector(".clo-svg")
          closvg.addEventListener('click' , ()=>{
            const key = closvg.classList[1]
            localStorage.removeItem(key)
            korElemNaz.removeChild(table)
            chetchick()
            emptyCart()
          })
     
        })

      }
      const trQuant = (table)=>{
        const quant = table.querySelector('.quant_cart')
        let key = ''
        let item = ''
        let newValue = {}
        console.log(item)
        const minus = table.querySelector('.minus')
        const plus = table.querySelector('.plus')
        const spyn = table.querySelector('.spyn')
        const standartPrice = Number(priceOf.textContent)
        const prise = table.querySelector('.cdpc')
        plus.addEventListener('click' , ()=>{
          q = Number(spyn.textContent)
          q+=1
          spyn.textContent=q
          prise.textContent = `${standartPrice * q}`
          chetchick()
          key = quant.classList[1]
          item = JSON.parse(localStorage.getItem(key))
          newValue = {
            baseCoast:priceOf.textContent,
            coast: `${standartPrice * q}`,
            colorr: item.colorr,
            imgSrc: item.imgSrc,
            lklklk: q,
            name: item.name,
            sizee: item.sizee,
          }
          localStorage.setItem(key, JSON.stringify(newValue));
        })
        minus.addEventListener('click' , ()=>{
          q = Number(spyn.textContent)
          if(q<=1){
            q=1
            prise.textContent = `${standartPrice * q}`
            key = quant.classList[1]
          item = JSON.parse(localStorage.getItem(key))
          newValue = {
            baseCoast:priceOf.textContent,
            coast: `${standartPrice * q}`,
            colorr: item.colorr,
            imgSrc: item.imgSrc,
            lklklk: q,
            name: item.name,
            sizee: item.sizee,
          }
          localStorage.setItem(key, JSON.stringify(newValue));
          }
          else{
            q-=1
            prise.textContent = `${standartPrice * q}`
            key = quant.classList[1]
          item = JSON.parse(localStorage.getItem(key))
          newValue = {
            baseCoast:priceOf.textContent,
            coast: `${standartPrice * q}`,
            colorr: item.colorr,
            imgSrc: item.imgSrc,
            lklklk: q,
            name: item.name,
            sizee: item.sizee,
          }
          localStorage.setItem(key, JSON.stringify(newValue));
          }
          spyn.textContent=q
          chetchick()
          
        })
      }
      Object.keys(localStorage).forEach((key) => {
        const value = JSON.parse(localStorage.getItem(key));
        console.log(value);
        const table = document.createElement('table')
        table.classList.add('.kor-table')
        table.innerHTML = ` <tbody id='${key}'>
                                 <tr>
                                   <td rowspan="4"><img  class="korzina-foto" src="${value.imgSrc}" alt=""></td>
                                   <td class="white left">${value.name}</td>
                                   <td></td>
                                   <td class="zak-td"><svg class="clo-svg ${key}" width="16px" height="16px" viewBox="0 0 24 24" fill="#a5a5a5" xmlns="http://www.w3.org/2000/svg" stroke="#a5a5a5">
    
                                     <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                     
                                     <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                     
                                     <g id="SVGRepo_iconCarrier"> <path class="clo" d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#a5a5a5"/> </g>
                                     
                                     </svg>
                                   </td>
                                 </tr>
                                 <tr>
                                   <td class="white left" colspan="2">${value.colorr}</td>
                                 </tr>
                                 <tr>
                                   
                                   <td class="gray left small-text">Размер ${value.sizee}</td>
    
                                 </tr>
                                 <tr class="quant_cart">
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
                                  <span class="spyn">${value.lklklk}</span>
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
                                   <td class="white zak-td"><span class="cdpc">${Number(value.lklklk) * Number(value.baseCoast)}</span>$</td>
                                 </tr>
                               </tbody>`;
                               globalprice += Number(value.lklklk) * Number(value.baseCoast)
                               korElemNaz.append(table)
                               korElemNaz.classList.remove("none")
                               empty.classList.add('none')
                               korzinacheckwrap.classList.remove("none")
                               quant+= Number(value.lklklk)
                               zena.textContent = globalprice
                               deleteCart()
                              //  trQuant(table)
      });
    }
    kor_chet.textContent = quant
  }
  cartContent()

}
export default cart
document.addEventListener("DOMContentLoaded",cart); 