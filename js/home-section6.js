window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.home-section6 .carousel', {
    //autoplay:false,
    autoplay: { delay: 5000,disableOnInteraction: false},
    loop: true,
    pagination: {
      el: '.indicator',
      type: 'bullets',
      clickable: true,
    }, 

    slidesPerView: 1,
    slidesPerGroup : 1,
    breakpoints: {
      900:{
        slidesPerView: 2,
        slidesPerGroup : 2,
      }
    }

  });
})