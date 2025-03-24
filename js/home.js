$(function () {

  var offsetArr = []
  function scrSpy() {//scrollSpy함수
    offsetArr = []
    var sectionCnt = $('main section').length// 섹션 갯수 구하기
    for (var i = 1; i <= sectionCnt + 1; i++) {// 각 섹션의 상단 위치를 배열에 저장
      var offsetTop
      if ($(`main section:nth-child(${i})`).length !== 0) {
        offsetTop = $(`main section:nth-child(${i})`).offset().top
      } else {
        offsetTop =
          $(`main section:nth-child(${i - 1})`).offset().top +
          $(`main section:nth-child(${i - 1})`).innerHeight()
      }
      offsetArr.push(offsetTop)
    }
    $('.scrollSpy button').removeClass('active')// 버튼에서 active 클래스 제거
    for (var i = 1; i <= sectionCnt; i++) {// 해당위치에서 버튼에 active 클래스 추가
      if (scry >= offsetArr[i - 1] && scry < offsetArr[i]) {
        $(`.scrollSpy .btn${i}`).addClass('active')
      }
    }
  }

  $('.scrollSpy button').click(function () {
    //scrollSpy 버튼클릭시 해당위치로 이동
    var idx = parseInt($(this).val())
    window.scrollTo({
      top: offsetArr[idx - 1],
      behavior: 'smooth'
    })
  })

  scrSpy()
  $(window).resize(function () {
    scrSpy()
  }).scroll(function () {
    scrSpy()
  })
})