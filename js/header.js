$(function () {
  $('.mbtn').click(function () {
    $(this).toggleClass('active')
    $('.gnb-sm').stop().fadeToggle()//fadeIn(),fadeOut() 반복(토글)
    //fade가 적용되면 display가 block으로 바뀜
    //$('.gnb-sm video')[0].play()
    //pause()특정시간에 중지, current()특정시간 지정해 이동
    document.querySelector('.gnb-sm video').play()
    //play는 최신명령어 배열의 첫번째[0]를 지정해줘야함
    //혹은 바닐라 명령어를 써줘야함
    $('header').toggleClass('active')
    //클릭했을때 비디오의 mix-blend-mode를 토글해야함
  })
  //화면이 바뀔때 mbtn메뉴버튼 초기화
  console.log(widw);
  //widw는 스크롤바 크기를 제외하기때문에 window전체크기를 계산할수없음
  $(window).resize(function () {
    requestAnimationFrame(function () {
      if (matchMedia('screen and (min-width:1000px)').matches) {
        //lg 사이즈 이상일때 (컴퓨터)
        $('.gnb-sm').hide()
        $('header,.mbtn').removeClass('active')
      } else {
        //lg 사이즈 이하일때 (모바일)
      }
      //widw>=1000이라고쓰면 nope
    })
  })
  
function motion() {
  var offsetTop;
  requestAnimationFrame(function () {
    $('.section-title').each(function () {
      offsetTop = $(this).offset().top
      if (scry >= offsetTop - widh *.8) {
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