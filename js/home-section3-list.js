var homeSection3Arr = [
  {
    id: 1,
    title: '엠피알 브레인',
    src: 'img/home/site1.jpg',
  },
  {
    id: 2,
    title: '수퍼게이트',
    src: 'img/home/site2.jpg',
  },
  {
    id: 3,
    title: '디자인하우스 전시사업본부',
    src: 'img/home/site3.jpg',
  },
  {
    id: 4,
    title: '서울리빙디자인페어',
    src: 'img/home/site4.jpg',
  },
  {
    id: 5,
    title: '서울 디자인 페스티벌',
    src: 'img/home/site5.jpg',
  },
  {
    id: 6,
    title: '리트빅',
    src: 'img/home/site6.jpg',
  }
]

homeSection3Arr.forEach(v => {
  $('.works-list').append(`
  <li>
    <figure>
      <img src="${v.src}" alt="">
    </figure>
    <a href="./detail.php?id=${v.id}">
      <i class="fa-solid fa-magnifying-glass-arrow-right"></i>
      <h3>${v.title}</h3>
    </a>
  </li>
  `)//<a href="./detail.php?id=${v.id}">출력할 페이지를 지정
})