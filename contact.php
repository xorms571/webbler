<?php include "header.php" ?>
<script src="./js/contact.js"></script>
<main class="contact-content">
  <video src="./video/contact.mp4" autoplay muted loop playsinline></video>
  <section>

    <!-- particles.js container -->
    <script src="js/particles.js"></script>
    <script src="js/app_particle_default_2.js"></script> <!-- 흰색 바탕이라 색상 변경함 -->
    <div id="particles-js"></div>
    <!-- particles.js container -->

    <div class="textbox">

      <div class="section-title">
        <h2>
          <b><span>어떤 사이트를</span></b>
          <b><span>만들고 싶으세요</span></b>
        </h2>
        <p class="title-p">
          일단 사이트의 목적과 일정만 우리에게 알려주세요. <br>
          나머지는 우리가 알아서 준비할께요.
        </p>
      </div>

      <address>
        <p>
          <i class="fa-solid fa-headset" aria-hidden="true"></i> <!-- aria-hidden: 접근성 API 차단 -->
          <a href="tel:000-0000-0000">031.926.3426</a>
        </p>

        <p>
          <i class="fa-solid fa-envelope" aria-hidden="true"></i>
          <a href="mailto:mail@mail.com">hello@webbler.kr</a>
        </p>
        
        <p>
          <i class="fa-solid fa-map-location" aria-hidden="true"></i>
          경기도 고양시 일산서구 덕이로 20 가동 D-123호
        </p>
      </address>
      <button class="map-btn">지도보기</button>
    </div>

    <div class="gmap">
      <img class="spinner" src="./img/spinner/spinner.gif" alt="">
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3157.2764124606642!2d126.75434467646437!3d37.68970701705479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zIOqyveq4sOuPhCDqs6DslpHsi5wg7J287IKw7ISc6rWsIOuNleydtOuhnCAyMCDqsIDrj5kgRC0xMjPtmLg!5e0!3m2!1sko!2skr!4v1701913815046!5m2!1sko!2skr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <button class="toggle-map-btn">
        <i class="fa-solid fa-x"></i>
      </button>
    </div>

  </section>
</main>

<?php include "footer.php" ?>