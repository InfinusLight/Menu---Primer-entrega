/*Animacion - Header*/ 

window.onscroll = function() { 

  let scroll = document.documentElement.scrollTop; 
  let header = document.getElementById("header"); 

  if (scroll > 20){
    header.classList.add('nav_mod');
  }else if (scroll < 20) {
    header.classList.remove('nav_mod');
  }
}