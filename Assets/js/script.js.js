

let body = document.querySelector ("body")
let home = document.querySelector (".home")
let card = document.querySelectorAll (".card")
let btn = document.querySelector (".lightMood ")






btn.onclick = function(){
    body.classList.toggle("dark-black")       
    home.classList.toggle("dark-home")
   
    for(let i=0 ; i < card.length; i++ ){
        card [i].classList.toggle("dark-card");  
    }
    btn.classList.toggle(`active`);   

   if(!body.classList.contains(`dark-black`)){
    btn.classList.replace(`btn-dark`, `btn-light`)
    btn.innerHTML = `<span>&#9790;</span> Dark`; 
    
   }else{
    btn.classList.replace(`btn-dark`, `btn-light`)
    btn.innerHTML = `<span>&#9788;</span> Light`;

   }

   }

   document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1.text-center");
    const text = "Welcome in Our Products";
    let index = 0;
    heading.innerHTML = "";
    // إضافة كل حرف بالتدريج
    function typeEffect() {
      if (index < text.length) {
        heading.innerHTML += text[index];
        index++;
        setTimeout(typeEffect, 100); 
      } else {
        heading.innerHTML += ' <i class="fa-solid fa-tags fa-fade fa-xl" style="color: #daa952;"></i>';
      }
    }
  
    typeEffect();
  });
  
