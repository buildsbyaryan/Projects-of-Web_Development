const bar = document.getElementById('bar');
const nav = document.querySelector('.header-list-nav ul');

if(bar){
  bar.addEventListener('click', ()=>{
    nav.classList.add('active');
  });
}