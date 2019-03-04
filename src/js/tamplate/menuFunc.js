const hamburgerBtn = document.getElementsByClassName('header__top-bar_nav_btn')[0];
const hamburgerMenu = document.getElementsByClassName('header__top-bar_nav')[0];
function addClick(e) {
    e.preventDefault();
    this.classList.toggle("header__top-bar_nav_btn_active");
    hamburgerMenu.classList.toggle("header__top-bar_nav-active");
}
hamburgerBtn.addEventListener("click", addClick);
//End