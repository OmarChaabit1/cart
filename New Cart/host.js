searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}


window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY > 80 ){
        document.querySelector('.header .header-2').classList.add('active');     
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload = () =>{

    if(window.scrollY > 80 ){
        document.querySelector('.header .header-2').classList.add('active');     
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}




let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () =>{
        loginForm.classList.toggle('active');
}
let closeForm = document.querySelector('.login-form-container');
document.querySelector('#close-login-btn').onclick = () =>{
    closeForm.classList.remove('active');
}

//q 
var swiper = new Swiper(".swiper books-slider", {
    loop:true, 
    centredSlides: true,
    autoplay:{
      delay:9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

