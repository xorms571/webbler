const swiper = new Swiper('.home-section4 .carousel', {
  autoplay:false,
  /* autoplay: { delay: 5000,disableOnInteraction: false}, */
  loop: true,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  pagination: {
    el: '.indicator',
    type: 'bullets',
    clickable: true,
  }
});