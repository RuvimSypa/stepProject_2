const callBack = document.getElementsByClassName('callback__title')[0];
const callBtn = document.getElementsByClassName('callback__form-btn')[0];

function changeName() {
    if(document.documentElement.clientWidth > 767){
        callBack.innerText = 'Order callback';
        callBtn.innerText = 'call me!'
    }else {
        callBack.innerText = 'Subscribe To Stay in Touch';
        callBtn.innerText = 'subscribe';
    }
}
window.addEventListener('resize', changeName);
window.addEventListener('load', changeName);
