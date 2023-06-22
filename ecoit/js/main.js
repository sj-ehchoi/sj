const header = document.querySelector(".header__wrap");

const swiper = new Swiper('.swiper-container', {
    speed: 300,
    direction: 'vertical',
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      reachEnd: function () {
        swiper.mousewheel.disable();
      },
      reachBeginning: function () {
        removeSticky();
      }
    }
});

window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        swiper.mousewheel.enable();
    } else if (event.deltaY > 0) {
        addSticky();
    }
});

function addSticky() {
    header.classList.add("is-sticky");
}

function removeSticky() {
    header.classList.remove("is-sticky");
}