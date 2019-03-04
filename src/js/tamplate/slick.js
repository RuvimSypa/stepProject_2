const clickData = [
    `<div class="slick-content"><div class="slick__person-item"><img src="img/User/bAdGB.png" alt="" class="slick__person-item-img"></div>
    <div class="slick__person-info">
    <h5 class="slick__person-info-name">Steven Strange</h5>
<span class="slick__person-info-nick">&#64;SSS</span>
</div>
</div>
<div class="slick__info">
    <p class="slick__info-feedback"><span>&#64;PixelHudda</span> Suspendisse sodales sem est, inscelerisque felis scelerisque in. Aenean faucibus mollis risus. Praesent sit amet erat egeteros.</p>
<span class="slick__info-time-feedback">2 hours ago</span>
</div>`,
    `<div class="slick-content">
                    <div class="slick__person-item">
                        <img src="img/User/James_Bond.png" alt="" class="slick__person-item-img">
                    </div>
                    <div class="slick__person-info">
                        <h5 class="slick__person-info-name">McCafe</h5>
                        <span class="slick__person-info-nick">&#64;DoctorS</span>
                    </div>
                </div>
                <div class="slick__info">
                    <p class="slick__info-feedback"><span>&#64;PixelMudda</span> Suspendisse sodales sem est, inscelerisque felis scelerisque in. Aenean faucibus mollis risus. Praesent sit amet erat egeteros.</p>
                    <span class="slick__info-time-feedback">2 hours ago</span>
                </div>`,
    `<div class="slick-content">
                    <div class="slick__person-item">
                        <img src="img/User/MethodMan.png" alt="" class="slick__person-item-img">
                    </div>
                    <div class="slick__person-info">
                        <h5 class="slick__person-info-name">Tony Stark</h5>
                        <span class="slick__person-info-nick">&#64;GoldenMan</span>
                    </div>
                </div>
                <div class="slick__info">
                    <p class="slick__info-feedback"><span>&#64;PixelVulla</span> Suspendisse sodales sem est, inscelerisque felis scelerisque in. Aenean faucibus mollis risus. Praesent sit amet erat egeteros.</p>
                    <span class="slick__info-time-feedback">2 hours ago</span>
                </div>`,
    `<div class="slick-content">
                    <div class="slick__person-item">
                        <img src="img/User/Thor.png" alt="" class="slick__person-item-img">
                    </div>
                    <div class="slick__person-info">
                        <h5 class="slick__person-info-name">Tor</h5>
                        <span class="slick__person-info-nick">&#64;Brother</span>
                    </div>
                </div>
                <div class="slick__info">
                    <p class="slick__info-feedback"><span>&#64;Pixelbuddha</span> Suspendisse sodales sem est, inscelerisque felis scelerisque in. Aenean faucibus mollis risus. Praesent sit amet erat egeteros.</p>
                    <span class="slick__info-time-feedback">2 hours ago</span>
                </div>`
];
const leftBtn = document.getElementsByClassName('slick-left')[0];
const rightBtn = document.getElementsByClassName('slick-right')[0];
const personBlock = document.getElementsByClassName('wrapper')[0];
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