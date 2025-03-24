$(function(){
  function motion(){
    requestAnimationFrame(function(){
      var offsetTop;
      $('.home-section5 ul li').each(function(){
        offsetTop = $(this).offset().top
        elH = $(this).innerHeight()
        meta = 105 + Math.abs(scry - (offsetTop - widh * .5 + elH * .5)) * -0.05
        if(meta<0) meta = 0
        if(meta<10) meta = 10
        $(this).css({
          'transform':`scale(${meta}%)`,
          'opacity':`${meta}%`
        })
      })
    })
  }
  motion()
  $(window).scroll(function(){
    motion()
  }).resize(function(){
    motion()
  })
})