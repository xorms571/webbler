var section5ListArr = [
  {
    src : 'img/home/promotion1.png',
    title : '<h2><b><span>내 브랜드와</span></b></h2><h2><b><span>어울리는 사이트</span></b></h2>',
    desc : '내 브랜드 철학과 스토리가 돋보일 수 있는 사이트를 만들어보세요. 제작 유형에 따라 다양한 템플릿 사이트와 방법들이 준비되어 있습니다.',
  },
  {
    src : 'img/home/promotion2.png',
    title : '<h2><b><span>사이트에 맞는</span></b></h2><h2><b><span>콘텐츠 디자인</span></b></h2>',
    desc : '내 브랜드를 돋보이게 하는 콘텐츠를 만들기 위해서는 다양한 접근이 필요합니다. 마땅한 이미지가 없다면 보정, 리터칭, 함성의 디자인 업무를 거쳐 퀼리티 있는 사이트를 만들 수 있습니다.',
  },
  {
    src : 'img/home/promotion3.png',
    title : '<h2><b><span>추가 비용없는</span></b></h2><h2><b><span>디자인 소스</span></b></h2>',
    desc : '사이트 제작에 쓸만한 이미지가 없어서 고민이신가요? 디지털 콘텐츠 디자인에 필요한 다양한 소스들을 추가 비용없이 사용할 수 있습니다.',
  },
  {
    src : 'img/home/promotion4.png',
    title : '<h2><b><span>편리한 관리를 위한</span></b></h2><h2><b><span>다양한 기능</span></b></h2>',
    desc : '채널톡, 카카오맵, 폼메일, 뉴스레터와 같이 다양한 기능이 필요하세요? 사이트 운영자가 편리하게 사용할 수 있는 맞춤 개발 환경을 제공하고, 관리 교육까지 받아볼 수 있어요.',
  },
]
section5ListArr.forEach(v => {
  $('.home-section5 ul').append(`
  <li>
      <div class="inner">
        <img src="${v.src}" alt="">
        <div class="section-title">
          <h2>${v.title}</h2>
          <p>${v.desc}</p>
        </div>
      </div>
    </li>
  `)
})