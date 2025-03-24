$(function(){
  function motion(){
    var offsetTop;
    requestAnimationFrame(function () {
      offsetTop = $('.price-section2').offset().top
      if(scry>=offsetTop - widh *.4){
        $('.price-bg').hide()
      }else{
        $('.price-bg').show()
      }
      offsetTop = $('.price-section2 figure').offset().top
      if(scry>=offsetTop - widh *.8){
        $('.price-section2 figure').addClass('active')
      }else{
        $('.price-section2 figure').removeClass('active')
      }
      $('.price-table>li>p').each(function () {
        offsetTop = $(this).offset().top
        if(scry>=offsetTop-widh){
          $(this).addClass('active')
        }else{
          $(this).removeClass('active')
        }
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