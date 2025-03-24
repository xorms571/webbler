var priceListArr = [
  {
    title : '<em>Starter</em><small>간략한 홍보 사이트 제작이라면</small>',
    price : '<strong>200만원</strong><small>부터</small>',
    page : '<b>5개 </b><small>페이지 내외</small>',
    section : '<b>25개 </b><small>섹션 디자인</small>',
    content : '<b>25개 </b><small>콘텐츠 블록 디자인</small>',
    res : '<b>반응형</b><small> : 모바일 최적화</small>',
    perid : '<b>제작기간</b><small> : 20일 이내</small>'
  },
  {
    title : '<em>Business</em><small>중소기업 규모의 사이트 제작이라면</small>',
    price : '<strong>300만원</strong><small>부터</small>',
    page : '<b>15개 </b><small>페이지 내외</small>',
    section : '<b>45개 </b><small>섹션 디자인</small>',
    content : '<b>45개 </b><small>콘텐츠 블록 디자인</small>',
    res : '<b>반응형</b><small> : 모바일 최적화</small>',
    perid : '<b>제작기간</b><small> : 30일 이내</small>'
  },
  {
    title : '<em>Premium</em><small>맞춤 개발이 필요한 사이트라면</small>',
    price : '<strong>600만원</strong><small>부터</small>',
    page : '<b>30개 </b><small>페이지 내외</small>',
    section : '<b>80개 </b><small>섹션 디자인</small>',
    content : '<b>80개 </b><small>콘텐츠 블록 디자인</small>',
    res : '<b>반응형</b><small> : 모바일 최적화</small>',
    perid : '<b>제작기간</b><small> : 60일 이내</small>'
  }
]

priceListArr.forEach(v => {
  $('.price-table').append(`
  <li>
    <p class="title">
      ${v.title}
    </p>
    <p class="price">
      ${v.price}
    </p>
    <p>
      ${v.page}
    </p>
    <p>
      ${v.section}
    </p>
    <p>
      ${v.content}
    </p>
    <p>
      ${v.res}
    </p>
    <p>
      ${v.perid}
    </p>
    <p>
      <a href="./contect.php">
        문의하기
      </a>
    </p>
  </li>
  `)
});