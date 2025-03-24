$(function () {
  hover_box('.works-list li','a')
  function motion() {
    requestAnimationFrame(function(){

    })
  }
  motion()
  $(window).scroll(function () {
    motion()
  }).resize(function () {
    motion()
  })
})