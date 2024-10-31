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

const swiper = new Swiper('.preview-block__swiper', {
    slidesPerView: 1,
    spaceBetween: 100,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".preview-swiper.swiper-button-next",
        prevEl: ".preview-swiper.swiper-button-prev",
    },
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

const burgerButton = document.querySelector('.header__burger');
const burgerSvg = document.querySelector('svg');
const mobileNav = document.querySelector('.mobile-nav');

const burgerMenu = () => {

    document.querySelector('.header__burger').addEventListener('click', function() {
        // svgIcon.innerHTML = '<path d="M18.5 18.5L5 5M18.5 5L5 18.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
    });
    
    if(mobileNav.classList.contains('mobile-nav_active')) {
        mobileNav.classList.remove('mobile-nav_active');
        // burgerSvg.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.58579 3.33579 5.25 3.75 5.25H20.25C20.6642 5.25 21 5.58579 21 6C21 6.41421 20.6642 6.75 20.25 6.75H3.75C3.33579 6.75 3 6.41421 3 6ZM3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12ZM3 18C3 17.5858 3.33579 17.25 3.75 17.25H20.25C20.6642 17.25 21 17.5858 21 18C21 18.4142 20.6642 18.75 20.25 18.75H3.75C3.33579 18.75 3 18.4142 3 18Z" fill="white"/>';
    } else {
        mobileNav.classList.add('mobile-nav_active');
        // burgerSvg.innerHTML = '<path d="M18.5 18.5L5 5M18.5 5L5 18.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
    }


}

burgerButton.addEventListener('click', burgerMenu);

