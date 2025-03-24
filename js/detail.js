$(function () {
  function motion() {
    requestAnimationFrame(function () {
      $('article>*').each(function () {
        var offsetTop = $(this).offset().top
        if (scry >= offsetTop-widh*.8) {
          $(this).addClass('active')
        } else {
          $(this).removeClass('active')
        }
      })
    })
  }

  motion()
  $(window).scroll(function () {
    motion()
  }).resize(function () {
    motion()
  })
})