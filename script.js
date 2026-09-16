
const menu=document.querySelector('.menu');
const nav=document.querySelector('.header nav');
if(menu&&nav){menu.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(o));});}
let count=0;
document.querySelectorAll('.cart-btn').forEach(btn=>btn.addEventListener('click',()=>{count++;const t=btn.textContent;btn.textContent=`Added · Demo Cart (${count})`;setTimeout(()=>btn.textContent=t,1500);}));
