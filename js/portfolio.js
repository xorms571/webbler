$(function(){
  function motion(){
      requestAnimationFrame(function(){
        $('.portfolio-bg').css({'background-position':`-${scry}px center`})
      })
  }
  motion()
  $(window).scroll(function(){
    motion()
  }).resize(function(){9
    motion()
  })
  $(window).mousemove(function(e){
    $('.cursor').css({
      'left':e.clientX -35,
      'top':e.clientY -35
    })
  })
  $('.portfolio-list li').mouseenter(function(){
    $('.cursor').addClass('active')
  }).mouseleave(function(){
    $('.cursor').removeClass('active')
  })
})