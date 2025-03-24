var homeSection6Arr = [
  {
    src: 'img/home/process1.png',
    title: '1. 담당 PM이 도와드릴거예요.',
    desc: '원활한 소통을 위해담당 PM이 배정됩니다. 의뢰인은 사이트 제작에 필요한 디테일한 디자인 또는 개발 요청사항을 담당 PM과 편리하게 상의할 수 있습니다.'
  },
  {
    src: 'img/home/process2.png',
    title: '2. 사이트의 목적을 알려주세요.',
    desc: '회사나 브랜드 소개 사이트, 상품 판매 온라인 스토어, 프로모션 사이트와 같이 사이트 유형에 따라 맞춤 설계 플랫폼을 제안드릴거예요.'
  },
  {
    src: 'img/home/process3.png',
    title: '3. 사이트 기획안을 확인해주세요.',
    desc: '사이트 유형에 따라 제작 플랫폼이 선정되면 의뢰인으로부터 제공받은 기초자료를 토대로 사이트의 화면 설계에 대한 기획안 또는 시안을 공유드립니다.'
  },
  {
    src: 'img/home/process4.png',
    title: '4. 사이트 화면을 개발합니다.',
    desc: '유형별 제작 플랫폼의 개발 환경을 설정하고, 기획안에 따라 각각의 웹페이지를 코딩하고 개발합니다. 물론 의뢰인은 진행상황을 확인할 수 있습니다.'
  },
  {
    src: 'img/home/process5.png',
    title: '5. 완성된 사이트를 확인합니다.',
    desc: '기획안에 충실한 개발이 완료되면 의뢰인은 완성된 사이트를 확인하게 됩니다. 추가 수정보완 사항을 검토하고, 사이트 운영에 대한 교육을 제공합니다.'
  },
]
homeSection6Arr.forEach(v => {
  $('.home-section6 .carousel .swiper-wrapper').append(`
      <figure class="swiper-slide">
      <img src="${v.src}">
      <figcaption>
      <h3>${v.title}</h3>
      <p>${v.desc}</p>
      </figcaption>
      </figure>
  `)
})