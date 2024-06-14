let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    autoplay: {
        delay: 1000,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        375: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 10,
        }
    }
})


let swiper2 = new Swiper(".myswiper2", {
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
    },
    loop: true,
    mousewheel: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        375: {
            slidesPerView: 1.1,
            spaceBetween: 10,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        }
    }
})