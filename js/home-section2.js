$(function () {
  cnt = new Jquery_count(".home-section2 .counter b",3,20)//3자릿수,100속도
  function motion() {
    var offsetTop; var elHeight; var meta;
    requestAnimationFrame(function () {
      offsetTop = $('.home-section2 .img-box').offset().top
      elHeight = $('.home-section2 .img-box').innerHeight()
      meta = 0 + (scry - (offsetTop - widh * 0.5 + elHeight * 0.5)) * -0.2
      if (meta < 0) meta = 0
      $('.home-section2 .img-box img').css({ 'transform': `rotateX(${meta}deg)` });
      offsetTop = $('.home-section2 .counter').offset().top
      if(scry >= offsetTop - widh *.9) {
        cnt.start()//숫자 증가
      }else{cnt.reverse()}
    })
  }
  motion()
  $(window).scroll(function () {
    motion()
  }).resize(function () {
    motion()
  })
})