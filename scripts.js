let menu_button = document.querySelector('.header__menu-button');
let navbar = document.querySelector('.header__nav-mobile');

menu_button.addEventListener("click", (event)=>{
  if(!navbar.style.display || navbar.style.display==='none'){
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }

}) 

