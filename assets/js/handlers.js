function getDynamicSilder(view) {
    return new Swiper(".advantages-block__swiper", {
        spaceBetween: 37.5,
        slidesPerView: view,
        grabCursor: true,
        grid: {
            rows: 2,
            fill: "row",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".advantages-swiper.swiper-button-next",
            prevEl: ".advantages-swiper.swiper-button-prev",
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            }
        }
    });
}

let swiper1 = getDynamicSilder(3);

window.addEventListener('resize', () => {
    if(window.innerWidth > 1000 && swiper1 instanceof Swiper) {
        swiper1.destroy(false,true);
        swiper1 = getDynamicSilder(3);
    } else if(window.innerWidth > 700 && swiper1 instanceof Swiper) {
        swiper1.destroy(false,true);
        swiper1 = getDynamicSilder(2);
    } else if(window.innerWidth > 320 && swiper1 instanceof Swiper) {
        swiper1.destroy(false,true);
        swiper1 = getDynamicSilder(1);
    }
})
  
const swiper2 = new Swiper(".services-block__swiper", {
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 54,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".services-swiper.swiper-button-next",
        prevEl: ".services-swiper.swiper-button-prev",
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 70
        },
        700: {
            spaceBetween: 55,
            slidesPerView: 2,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 90,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 54,
        }
    }
});

const swiper3 = new Swiper(".reviews-block__swiper", {
    spaceBetween: 50,
    slidesPerView: 3,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".reviews-swiper.swiper-button-next",
        prevEl: ".reviews-swiper.swiper-button-prev",  
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 70
        },
        700: {
            spaceBetween: 53,
            slidesPerView: 2,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 90,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 54,
        }
    }
});

const swiper4 = new Swiper(".articles-block__swiper", {
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 54,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".article-swiper.swiper-button-next",
        prevEl: ".article-swiper.swiper-button-prev",
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 70
        },
        700: {
            spaceBetween: 55,
            slidesPerView: 2,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 90,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 54,
        }
    }
});

const faqQuestion = document.querySelectorAll('.faq__question');

faqQuestion.forEach(function(link, index) {
    link.addEventListener('click', function(event) {

        const svg = this.querySelector('svg');
        const faqAnswer = this.nextElementSibling;

        if(faqAnswer.classList.contains('open')) {
            faqAnswer.classList.remove('open');
            svg.classList.remove('rotate');
            link.style.background = '';
        } else {
            link.style.background = 'var(--white-color)';
            faqAnswer.classList.add('open');
            svg.classList.add('rotate');
        }
    });
});

