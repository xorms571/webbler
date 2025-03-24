var portfolioListArr = [
  {
    id:1,
    title:['엠피알 브레인'],
    slogun:'We convert vision into reality.'
  },
  {
    id:2,
    title:['수퍼게이트'],
    slogun:'편리하고 안전한 일상을 만들다. 수퍼게이트'
  },
  {
    id:3,
    title:['디자인하우스','전시사업본부'],
    slogun:'디자인과 기능에 충실한 워드프레스 기반의 웹사이트'
  },
  {
    id:4,
    title:['서울리빙','디자인페어'],
    slogun:'디지털 아카이브를 구축하다.'
  },
  {
    id:5,
    title:['서울디자인','페스티벌'],
    slogun:'판교를 넘어 글로벌 IT 기업으로'
  },
  {
    id:6,
    title:['리트빅'],
    slogun:'판교를 넘어 글로벌 IT 기업으로'
  },
  {
    id:7,
    title:['위드건축사무소'],
    slogun:'위드건축사무소 사이트는  워드프레스로 만들어졌습니다.'
  },
  {
    id:8,
    title:['그렉스전자'],
    slogun:'생활의 행복을 함께 만들어 갑니다.'
  }, 
]

portfolioListArr.forEach(v => {
  $('.portfolio-list').append(`
  <li>
    <a href="./detail.php?id=${v.id}">
      <figure>
        <img src="./img/works/site${v.id}.jpg" alt>
        <h3>${v.title}</h3>
        <p>
          <b>${v.slogun}</b>
          <b>${v.slogun}</b>
          <b>${v.slogun}</b>
        </p>
      </figure>
    </a>
  </li>
  `)
})