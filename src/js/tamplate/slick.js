const clickData = [
    '<div class="social__slick-person"><div class="social__slick-person-block"><img src="img/User/bAdGB.png" alt="" class="social__slick-person__img"></div><div class="social__slick-person__info"><h5 class="social__slick-person__info-name">Steven Strange</h5><span class="social__slick-person__info-nick">&#64;DoctorS</span></div></div><div class="social__slick__info"><p class="social__slick__info-feedback"><span class="social__slick__info-name">&#64;Pixelbuddha</span> Suspendisse sodales sem est, inscelerisque felis scelerisque in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, numquam..</p><span class="social__slick__info-last-feedback">2 hours ago</span></div></div>',
    '<div class="social__slick-person"><div class="social__slick-person-block"><img src="img/User/James_Bond.png" alt="" class="social__slick-person__img"></div><div class="social__slick-person__info"><h5 class="social__slick-person__info-name">Steven Strange</h5><span class="social__slick-person__info-nick">&#64;DeadPull</span></div></div><div class="social__slick__info"><p class="social__slick__info-feedback"><span class="social__slick__info-name">&#64;James Bond</span> Suspendisse sodales sem est, inscelerisque felis scelerisque in. Aenean faucibus mollis risus. Praesent sit amet erat egeteros.</p><span class="social__slick__info-last-feedback">online</span></div></div>',
    '<div class="social__slick-person"><div class="social__slick-person-block"><img src="img/User/MethodMan.png" alt="" class="social__slick-person__img"></div><div class="social__slick-person__info"><h5 class="social__slick-person__info-name">Steven Strange</h5><span class="social__slick-person__info-nick">&#64;DoctorS</span></div></div><div class="social__slick__info"><p class="social__slick__info-feedback"><span class="social__slick__info-name">&#64;Method Man</span> Suspendisse sodales sem est, inscelerisque felis scelerisque in. Aenean faucibus mollis risus. Praesent sit amet erat egeteros.</p><span class="social__slick__info-last-feedback">3 hours ago</span></div></div>',
    '<div class="social__slick-person"><div class="social__slick-person-block"><img src="img/User/Thor.png" alt="" class="social__slick-person__img"></div><div class="social__slick-person__info"><h5 class="social__slick-person__info-name">Steven Strange</h5><span class="social__slick-person__info-nick">&#64;DoctorS</span></div></div><div class="social__slick__info"><p class="social__slick__info-feedback"><span class="social__slick__info-name">&#64;Steven Strange</span> Suspendisse sodales sem est, inscelerisque felis scelerisque in. Aenean faucibus mollis risus. Praesent sit amet erat egeteros.</p><span class="social__slick__info-last-feedback">5 hours ago</span></div></div>'
];
const leftBtn = document.getElementsByClassName('social__slick-left')[0];
const rightBtn = document.getElementsByClassName('social__slick-right')[0];
const personBlock = document.getElementsByClassName('social__slick-block')[0];
let currentItem = clickData.length -1;

function moveLeft() {
    let item = currentItem - 1;
    if(item < 0) {
        item = clickData.length -1;
    }
    personBlock.innerHTML = clickData[item];
    currentItem --;
    if(currentItem < 0) {
        currentItem = clickData.length - 1;
    }
}
function moveRight() {
    let item = currentItem + 1;
    if(item > (clickData.length - 1)){
        item = 0;
    }
    personBlock.innerHTML = clickData[item];
    currentItem ++;
    if(currentItem > (clickData.length - 1)) {
        currentItem = 0;
    }
}

leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);