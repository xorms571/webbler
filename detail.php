<?php include 'header.php' ?>
<script src="./js/detail-list.js"></script>
<script src="./js/detail.js"></script>
<script>
  var url = new URL(location.href)
  var parms = new URLSearchParams(url.search)//파라미터 다 뽑기
  var id = parseInt(parms.get('id'))//파라미터중에 id값 가져오기
  var detailData = detailListArr.find(v=>v.id === id)
</script>
<main class="detail-content">
  <div class="detail-bg">
    <script src="js/particles.js"></script>
    <script src="js/app_particle_default_2.js"></script>
    <div id="particles-js"></div>
  </div>
  <section class="detail-section">
    <div class="section-title">
      <h2></h2>
      <p></p>
      <a href="#">사이트 바로가기</a>
    </div>
    <script>
      $('.section-title h2').html(detailData.title)
      $('.section-title p').html(detailData.desc)
    </script>
    <article class="detail-article">
      <img class="mockup" src="" alt="">
      <div class="text-box">
        <h3></h3>
        <p></p>
        <div>
          <dl>
            <dt>Client</dt>
            <dd class="client"></dd>
          </dl>
          <dl>
            <dt>Type</dt>
            <dd class="type"></dd>
          </dl>
          <dl>
            <dt>Scope</dt>
            <dd class="scope"></dd>
          </dl>
        </div>
      </div>
      <img class="detail" src="" alt="">
      <img class="screen" src="" alt="">
    </article>
    <script>
      $('.mockup').attr('src', `./img/details${id}/mockup.jpg`)
      $('.detail').attr('src', `./img/details${id}/detail.jpg`)
      $('.screen').attr('src', `./img/details${id}/screen.jpg`)
      $('.text-box h3').html(detailData.slogun)
      $('.text-box p').html(detailData.definition)
      $('.text-box .client').html(detailData.client)
      $('.text-box .type').html(detailData.type)
      $('.text-box .scope').html(detailData.scope)
    </script>
  </section>
</main>
<?php include 'footer.php' ?>