$(function(){
  function motion(){
    requestAnimationFrame(function(){
      if(scry>=$('.home-section2').offset().top){
        $('.home-bg').hide()
      }else{
        $('.home-bg').show()
      }
    })
  }
  motion()
  $(window).scroll(function(){
    motion()
  }).resize(function(){
    motion()
  })
})