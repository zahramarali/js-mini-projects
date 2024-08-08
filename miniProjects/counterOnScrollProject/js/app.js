let $ = document;
const benefits = $.querySelector('.benefits');
const counters = $.querySelectorAll('.num');
let start = false;

window.addEventListener('scroll', ()=>{
  // console.log(window.scrollY, benefits.offsetTop);
  if(window.scrollY >= benefits.offsetTop){
    if(!start){
      counters.forEach(counter => setCounter(counter))
    }
    start = true;
  }
})

function setCounter(el){
  let elNumCounter = el.dataset.count;
  let counterInterval = setInterval(()=>{
    if(el.textContent == elNumCounter){
      clearInterval(counterInterval)
    }
    el.textContent++
   } ,20)
}