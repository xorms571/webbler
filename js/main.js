$(function(){
  function motion(){
      window.scry = $(window).scrollTop()
      window.scrx = $(window).scrollLeft()
      window.widh = $(window).height()
      window.widw = $(window).width()
  }

  motion()
  $(window).scroll(function(){
    motion()
  }).resize(function(){
    motion()
  })
})