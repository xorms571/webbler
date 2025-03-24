$(function(){
  $('.top').click(function(){
    $('body,html').stop().animate({'scrollTop':0},1000,function(){})
  })
  function toggleTopBtnFn(){
    requestAnimationFrame(function(){
      if(scry>500){
        $('.top').fadeIn()
      }else{$('.top').fadeOut()}
    })
  }
  function setFooterHeightFn(){
    requestAnimationFrame(function(){
      var footerH = $('footer').innerHeight()
      $('body').css({'padding-bottom':`${footerH}px`})
    })
  }
  setFooterHeightFn()
  toggleTopBtnFn()
  $(window).resize(function(){
    setFooterHeightFn()
    toggleTopBtnFn()
  }).scroll(function(){
    setFooterHeightFn()
    toggleTopBtnFn()
  })
})