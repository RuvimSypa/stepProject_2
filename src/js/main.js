"use strict";

var callBack = document.getElementsByClassName('callback__title')[0];
var callBtn = document.getElementsByClassName('callback__form-btn')[0];

function changeName() {
  if (document.documentElement.clientWidth > 767) {
    callBack.innerText = 'Order callback';
    callBtn.innerText = 'call me!';
  } else {
    callBack.innerText = 'Subscribe To Stay in Touch';
    callBtn.innerText = 'subscribe';
  }
}

window.addEventListener('resize', changeName);
window.addEventListener('load', changeName);
var hamburgerBtn = document.getElementsByClassName('header__top-bar_nav_btn')[0];
var hamburgerMenu = document.getElementsByClassName('header__top-bar_nav')[0];

function addClick(e) {
  e.preventDefault();
  this.classList.toggle("header__top-bar_nav_btn_active");
  hamburgerMenu.classList.toggle("header__top-bar_nav-active");
}

hamburgerBtn.addEventListener("click", addClick); //End

var clickData = ["<div class=\"slick-content\"><div class=\"slick__person-item\"><img src=\"img/User/bAdGB.png\" alt=\"\" class=\"slick__person-item-img\"></div>\n    <div class=\"slick__person-info\">\n    <h5 class=\"slick__person-info-name\">Steven Strange</h5>\n<span class=\"slick__person-info-nick\">&#64;SSS</span>\n</div>\n</div>\n<div class=\"slick__info\">\n    <p class=\"slick__info-feedback\"><span>&#64;PixelHudda</span> Suspendisse sodales sem est, inscelerisque felis scelerisque in. Aenean faucibus mollis risus. Praesent sit amet erat egeteros.</p>\n<span class=\"slick__info-time-feedback\">2 hours ago</span>\n</div>", "<div class=\"slick-content\">\n                    <div class=\"slick__person-item\">\n                        <img src=\"img/User/James_Bond.png\" alt=\"\" class=\"slick__person-item-img\">\n                    </div>\n                    <div class=\"slick__person-info\">\n                        <h5 class=\"slick__person-info-name\">McCafe</h5>\n                        <span class=\"slick__person-info-nick\">&#64;DoctorS</span>\n                    </div>\n                </div>\n                <div class=\"slick__info\">\n                    <p class=\"slick__info-feedback\"><span>&#64;PixelMudda</span> Suspendisse sodales sem est, inscelerisque felis scelerisque in. Aenean faucibus mollis risus. Praesent sit amet erat egeteros.</p>\n                    <span class=\"slick__info-time-feedback\">2 hours ago</span>\n                </div>", "<div class=\"slick-content\">\n                    <div class=\"slick__person-item\">\n                        <img src=\"img/User/MethodMan.png\" alt=\"\" class=\"slick__person-item-img\">\n                    </div>\n                    <div class=\"slick__person-info\">\n                        <h5 class=\"slick__person-info-name\">Tony Stark</h5>\n                        <span class=\"slick__person-info-nick\">&#64;GoldenMan</span>\n                    </div>\n                </div>\n                <div class=\"slick__info\">\n                    <p class=\"slick__info-feedback\"><span>&#64;PixelVulla</span> Suspendisse sodales sem est, inscelerisque felis scelerisque in. Aenean faucibus mollis risus. Praesent sit amet erat egeteros.</p>\n                    <span class=\"slick__info-time-feedback\">2 hours ago</span>\n                </div>", "<div class=\"slick-content\">\n                    <div class=\"slick__person-item\">\n                        <img src=\"img/User/Thor.png\" alt=\"\" class=\"slick__person-item-img\">\n                    </div>\n                    <div class=\"slick__person-info\">\n                        <h5 class=\"slick__person-info-name\">Tor</h5>\n                        <span class=\"slick__person-info-nick\">&#64;Brother</span>\n                    </div>\n                </div>\n                <div class=\"slick__info\">\n                    <p class=\"slick__info-feedback\"><span>&#64;Pixelbuddha</span> Suspendisse sodales sem est, inscelerisque felis scelerisque in. Aenean faucibus mollis risus. Praesent sit amet erat egeteros.</p>\n                    <span class=\"slick__info-time-feedback\">2 hours ago</span>\n                </div>"];
var leftBtn = document.getElementsByClassName('slick-left')[0];
var rightBtn = document.getElementsByClassName('slick-right')[0];
var personBlock = document.getElementsByClassName('wrapper')[0];
var currentItem = clickData.length - 1;

function moveLeft() {
  var item = currentItem - 1;

  if (item < 0) {
    item = clickData.length - 1;
  }

  personBlock.innerHTML = clickData[item];
  currentItem--;

  if (currentItem < 0) {
    currentItem = clickData.length - 1;
  }
}

function moveRight() {
  var item = currentItem + 1;

  if (item > clickData.length - 1) {
    item = 0;
  }

  personBlock.innerHTML = clickData[item];
  currentItem++;

  if (currentItem > clickData.length - 1) {
    currentItem = 0;
  }
}

leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);