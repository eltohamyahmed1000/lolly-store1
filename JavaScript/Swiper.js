const swiper = new Swiper('.swiper', {
  loop: true,

  centeredSlides: true, // ✅ ده اللي بيخلي العنصر النشط في النص دائمًا

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 10,

 breakpoints: {
  0: {
    slidesPerView: 1.2, 
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 1.5,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  }
}

});
