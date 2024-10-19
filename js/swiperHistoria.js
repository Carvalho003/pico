var swiperHistoria = new Swiper(".historiaSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".historia-paginacao",
        clickable:true,
        type: 'progressbar'
      },
      navigation: {
        nextEl: ".next-historia",
        prevEl: ".prev-historia",
      },
    
});

var swiperLugares = new Swiper(".lugares-cube", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".paginacao-lugares",
  },
});


var swiperProfissionais = new Swiper(".swiperProfissionais", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next-prof",
    prevEl: ".prev-prof",
  },
});