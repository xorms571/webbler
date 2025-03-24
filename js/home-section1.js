$(function(){
  function motion(){
    requestAnimationFrame(function(){
      var offsetTop; var elH; var meta;
      var section2offsetTop = $('.home-section2').offset().top
      if(scry >= section2offsetTop - widh *.8){
        $('.section1-text-box').removeClass('active')
      }else{
        $('.section1-text-box').addClass('active')
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