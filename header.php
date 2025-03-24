<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/home-bg.css">
  <link rel="stylesheet" href="./css/home.css">
  <link rel="stylesheet" href="./css/price.css">
  <link rel="stylesheet" href="./css/home-section1.css">
  <link rel="stylesheet" href="./css/home-section2.css">
  <link rel="stylesheet" href="./css/home-section3.css">
  <link rel="stylesheet" href="./css/home-section4.css">
  <link rel="stylesheet" href="./css/home-section5.css">
  <link rel="stylesheet" href="./css/home-section6.css">
  <link rel="stylesheet" href="./css/home-shortcut.css">
  <link rel="stylesheet" href="./css/contact.css">
  <link rel="stylesheet" href="./css/portfolio.css">
  <link rel="stylesheet" href="./css/detail.css">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
  <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="https://kit.fontawesome.com/4cb66a5bcd.js" crossorigin="anonymous"></script>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="./js/jquery_count.js"></script>
  <script src="./js/hoverBox.js"></script>
  <script src="./js/jquery.ripples.js"></script>
<script src="./js/main.js"></script>
  <title>WEBBLER</title>
</head>


<body>
  <script src="./js/header.js"></script>
  <script src="./js/section-title.js"></script>
  <header>
    <h1>
      <a href="./index.php">
        <img class="white" src="./img/logo-white.svg" alt="">
        <img class="invert" src="./img/logo-invert.svg" alt="">
      </a>
      <b class="hidden">webbler logo</b>
    </h1>
    <nav class="gnb gnb-lg">
      <?php include "menu.php" ?>
    </nav>
    <nav class="gnb gnb-sm">
      <video src="./video/navbg.mp4" playsinline></video>
      <?php include "menu.php" ?>
    </nav>
    <button class="mbtn">
      <span class="bar1"></span>
      <span class="bar2"></span>
      <span class="bar3"></span>
    </button>
  </header>